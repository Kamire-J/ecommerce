import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Royal Threads Designs',
  title: 'Royal Threads Designs',
  description: 'An e-commerce website built by Payload and Next.js.',
  images: [
    {
      url: '/assets/images/royalthreads.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
