'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { ArtistWork as ArtistWorkType } from '@/payload-types'

/**
 * 藝術家作品頁面 - 從 Payload CMS 讀取數據
 */
export const ArtistWorks: React.FC<{ works?: ArtistWorkType[] }> = ({ works = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categoryMap: Record<string, string> = {
    music: '音樂作品',
    animation3d: '3D動畫',
    graphicDesign: '平面設計',
  }

  const categories = ['全部', ...Object.values(categoryMap)]

  const filteredWorks =
    selectedCategory && selectedCategory !== '全部'
      ? works.filter((work) => categoryMap[work.category as string] === selectedCategory)
      : works

  return (
    <div className="relative z-10 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* 返回按鈕 */}
        <div className="mb-12">
          <Link
            href="/artist"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
          >
            <span>←</span>
            <span>返回</span>
          </Link>
        </div>

        {/* 標題區域 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-300 text-sm tracking-widest uppercase">作品集</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wider">WORKS</h1>
          <p className="text-gray-400 text-lg tracking-wide">精選藝術作品展</p>
        </div>

        {/* 分類篩選 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === '全部' ? null : category)}
              className={`px-6 py-2 rounded-full text-sm tracking-wider transition-all duration-300 ${
                (!selectedCategory && category === '全部') || selectedCategory === category
                  ? 'bg-blue-500 text-white border border-blue-400'
                  : 'bg-gray-900/50 text-gray-300 border border-gray-700 hover:border-blue-400/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 作品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredWorks.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div
                className="relative h-64 rounded-lg overflow-hidden border border-blue-400/30 group-hover:border-blue-300/60 transition-all duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(30, 60, 100, 0.3) 0%, rgba(50, 100, 150, 0.2) 100%)',
                }}
              >
                {/* 作品縮圖 */}
                {typeof work.image === 'object' && work.image?.url ? (
                  <img
                    src={work.image.url}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-blue-950/40">
                    <div className="text-6xl text-blue-400/30 group-hover:text-blue-300/60 transition-colors duration-500">
                      🖼️
                    </div>
                  </div>
                )}

                {/* 懸停疊層 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              </div>

              {/* 作品信息 */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white text-lg font-light tracking-wide group-hover:text-blue-300 transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{work.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  {categoryMap[work.category as string] || work.category}
                </p>
                {work.description && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {typeof work.description === 'string' ? work.description : 'No description'}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 沒有作品提示 */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">此分類暫無作品</p>
          </div>
        )}
      </div>
    </div>
  )
}
