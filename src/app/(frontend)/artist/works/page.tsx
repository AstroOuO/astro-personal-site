import type { Metadata } from 'next'
import { ArtistLayout } from '@/components/Artist/ArtistLayout'
import { ArtistWorks } from '@/components/Artist/ArtistWorks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: '作品集 - Artist Works',
  description: '藝術家精選作品集，展示數位藝術、雕塑、攝影等多元創作。',
}

export default async function WorksPage() {
  // 從 Payload 獲取所有藝術作品
  const payload = await getPayload({ config: configPromise })
  const works = await payload.find({
    collection: 'artist-works',
    limit: 1000,
    overrideAccess: false,
  })

  return (
    <ArtistLayout>
      <ArtistWorks works={works.docs as any[]} />
    </ArtistLayout>
  )
}
