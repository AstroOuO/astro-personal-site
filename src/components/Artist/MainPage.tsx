'use client'

import React from 'react'
import Link from 'next/link'
import type { Artist as ArtistType } from '@/payload-types'

/**
 * 藝術家主頁 - 從 Payload CMS 讀取數據
 */
export const MainPage: React.FC<{ artist?: ArtistType }> = ({ artist }) => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
      {/* 主標題區域 */}
      <div className="text-center px-6 mb-16">
        <div className="mb-6">
          {/* 裝飾線條 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-300 text-sm tracking-widest uppercase">藝術家</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400" />
          </div>
        </div>

        {/* 主標題 */}
        <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider">
          {artist?.name || 'ARTIST'}
        </h1>

        {/* 副標題 */}
        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide mb-8">
          PORTFOLIO & GALLERY
        </p>

        {/* 描述文字 */}
        <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-12">
          探索藝術創作的世界，展示獨特的視角與創意表達。 每一個作品都承載著對美的追求。
        </p>
      </div>

      {/* 導航卡片區域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full px-6 mb-20">
        {/* 作品卡片 */}
        <Link href="/artist/works">
          <div className="group cursor-pointer">
            <div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden border border-blue-400/30 hover:border-blue-300/60 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                background:
                  'linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(30, 60, 100, 0.4) 100%)',
              }}
            >
              {/* 卡片內容 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  🎨
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-light tracking-wider">WORKS</h2>
                <p className="text-gray-400 text-sm mt-3 group-hover:text-blue-300 transition-colors">
                  查看作品集 →
                </p>
              </div>

              {/* 懸停效果邊框 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </Link>

        {/* 描述卡片 */}
        <Link href="/artist/description">
          <div className="group cursor-pointer">
            <div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden border border-blue-400/30 hover:border-blue-300/60 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                background:
                  'linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(30, 60, 100, 0.4) 100%)',
              }}
            >
              {/* 卡片內容 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  ✍️
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-light tracking-wider">ABOUT</h2>
                <p className="text-gray-400 text-sm mt-3 group-hover:text-blue-300 transition-colors">
                  藝術家簡介 →
                </p>
              </div>

              {/* 懸停效果邊框 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </Link>
      </div>

      {/* 頁腳提示 */}
      <div className="text-center text-gray-500 text-sm tracking-wider">
        <p>精品藝術創作展 2024</p>
      </div>
    </div>
  )
}
