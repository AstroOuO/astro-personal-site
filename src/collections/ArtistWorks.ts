import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const ArtistWorks: CollectionConfig = {
  slug: 'artist-works',
  labels: {
    singular: '藝術作品',
    plural: '藝術作品',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'artist', 'category', 'year', 'updatedAt'],
    description: '管理藝術家的個別作品',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: '作品名稱',
    },
    {
      name: 'artist',
      type: 'relationship',
      relationTo: 'artists',
      required: true,
      label: '藝術家',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: '藝術類別',
      options: [
        { label: '音樂作品', value: 'music' },
        { label: '3D動畫', value: 'animation3d' },
        { label: '平面設計', value: 'graphicDesign' },
      ],
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: '創作年份',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: '作品圖片',
    },
    {
      name: 'description',
      type: 'richText',
      label: '作品描述',
    },
    {
      name: 'dimensions',
      type: 'text',
      label: '尺寸 (例: 100cm × 150cm)',
    },
    {
      name: 'medium',
      type: 'text',
      label: '材料/媒材',
    },
    {
      name: 'price',
      type: 'number',
      label: '價格 (可選)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: '特色作品',
      defaultValue: false,
    },
  ],
  timestamps: true,
}
