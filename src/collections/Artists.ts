import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Artists: CollectionConfig = {
  slug: 'artists',
  labels: {
    singular: '藝術家',
    plural: '藝術家',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'updatedAt'],
    description: '管理藝術家基本信息與簡介',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: '藝術家名稱',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: '網址別名',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: '頭像',
    },
    {
      name: 'birthYear',
      type: 'number',
      label: '出生年份',
    },
    {
      name: 'nationality',
      type: 'text',
      label: '國籍',
    },
    {
      name: 'mediums',
      type: 'array',
      label: '工作媒材',
      fields: [
        {
          name: 'medium',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: '藝術宣言與簡介',
          fields: [
            {
              name: 'manifesto',
              type: 'richText',
              required: true,
              label: '藝術宣言',
            },
            {
              name: 'bio',
              type: 'richText',
              label: '個人簡歷',
            },
          ],
        },
        {
          label: '教育與經歷',
          fields: [
            {
              name: 'education',
              type: 'array',
              label: '教育背景',
              fields: [
                {
                  name: 'degree',
                  type: 'text',
                  required: true,
                  label: '學位',
                },
                {
                  name: 'institution',
                  type: 'text',
                  required: true,
                  label: '學校/機構',
                },
                {
                  name: 'year',
                  type: 'text',
                  required: true,
                  label: '年份 (例: 2015-2017)',
                },
              ],
            },
            {
              name: 'awards',
              type: 'array',
              label: '獲獎記錄',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: '獎項名稱',
                },
                {
                  name: 'year',
                  type: 'number',
                  required: true,
                  label: '年份',
                },
              ],
            },
          ],
        },
        {
          label: '聯繫方式',
          fields: [
            {
              name: 'email',
              type: 'email',
              required: true,
              label: '電子郵件',
            },
            {
              name: 'socialMedia',
              type: 'text',
              label: '社群媒體 (例: @artist_portfolio)',
            },
            {
              name: 'website',
              type: 'text',
              label: '個人網站',
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
