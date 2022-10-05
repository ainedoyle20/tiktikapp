import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const query = postDetailQuery(id);
    console.log('in here');

    const data = await client.fetch(query);

    res.status(200).json(data[0]);
  } else if (req.method === 'PUT') {
    const { id }:any = req.query;
    const { userId, comment} = req.body;

    const data = await client
      .patch(id)
      .setIfMissing({ comments: [] })
      .insert('after', 'comments[-1]', [{
        _key: uuidv4(),
        postedBy: { _type: 'postedBy', _ref: userId},
        comment,
      }])
      .commit()

    res.status(200).json(data);
  }
}
