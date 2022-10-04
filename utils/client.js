import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'vlsdeife',
  dataset: 'production',
  apiVersion: '2022-03-08',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
