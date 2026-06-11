import type { Metadata } from 'next'
import { ArtistLayout } from '@/components/Artist/ArtistLayout'
import { ArtistDescription } from '@/components/Artist/ArtistDescription'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: '藝術家簡介 - About Artist',
  description: '藝術家簡歷、創作宣言、教育背景與獲獎記錄。',
}

export default async function DescriptionPage() {
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
      <ArtistDescription artist={artist} />
    </ArtistLayout>
  )
}
