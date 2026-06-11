import type { Metadata } from 'next'
import { ArtistLayout } from '@/components/Artist/ArtistLayout'
import { MainPage } from '@/components/Artist/MainPage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: '藝術家 - Artist Portfolio',
  description: '探索藝術創作的世界，精品藝術作品展。',
}

export default async function ArtistPage() {
  // 從 Payload 獲取第一個藝術家
  const payload = await getPayload({ config: configPromise })
  const artists = await payload.find({
    collection: 'artists',
    limit: 1,
    overrideAccess: false,
  })

  const artist = artists.docs?.[0]

  return (
    <ArtistLayout>
      <MainPage artist={artist} />
    </ArtistLayout>
  )
}
