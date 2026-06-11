'use client'

import React from 'react'
import Link from 'next/link'
import type { Artist as ArtistType } from '@/payload-types'
import Image from 'next/image'

/**
 * 藝術家描述頁面 - 從 Payload CMS 讀取數據
 */
export const ArtistDescription: React.FC<{ artist?: ArtistType }> = ({ artist }) => {
  const avatar = typeof artist?.avatar === 'object' ? artist.avatar : null

  return (
    <div className="relative z-10 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
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
            <span className="text-blue-300 text-sm tracking-widest uppercase">簡介</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wider">
            ABOUT ARTIST
          </h1>
        </div>

        {/* 藝術家信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* 個人資料卡 */}
          <div
            className="md:col-span-1 p-8 rounded-lg border border-blue-400/30 hover:border-blue-300/60 transition-all duration-500"
            style={{
              background:
                'linear-gradient(135deg, rgba(30, 60, 100, 0.2) 0%, rgba(50, 100, 150, 0.1) 100%)',
            }}
          >
            {/* 頭像 */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-blue-400/50 flex items-center justify-center overflow-hidden bg-gray-800">
              {avatar && avatar.url ? (
                <img
                  src={avatar.url}
                  alt={artist?.name || 'Artist'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl">👤</span>
              )}
            </div>
            <h2 className="text-white text-2xl font-light text-center mb-2 tracking-wider">
              {artist?.name || '藝術家'}
            </h2>
            <p className="text-blue-300 text-center text-sm tracking-wider mb-6">
              {artist?.slug?.toUpperCase() || 'ARTIST NAME'}
            </p>

            <div className="space-y-4 text-sm text-gray-400">
              {artist?.birthYear && (
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">出生年份</p>
                  <p className="text-white">{artist.birthYear}</p>
                </div>
              )}
              {artist?.nationality && (
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">國籍</p>
                  <p className="text-white">{artist.nationality}</p>
                </div>
              )}
              {artist?.mediums && artist.mediums.length > 0 && (
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">工作媒材</p>
                  <p className="text-white">
                    {artist.mediums.map((m: any) => m.medium).join('、')}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 藝術家描述 */}
          <div className="md:col-span-2 space-y-8">
            {/* 藝術宣言 */}
            {artist?.manifesto && (
              <div>
                <h3 className="text-white text-2xl font-light tracking-wider mb-4 text-blue-300">
                  藝術宣言
                </h3>
                <div className="text-gray-300 leading-relaxed text-base prose prose-invert max-w-none">
                  {/* 簡單渲染 richText 內容 */}
                  {typeof artist.manifesto === 'string' ? (
                    <p>{artist.manifesto}</p>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: JSON.stringify(artist.manifesto) }} />
                  )}
                </div>
              </div>
            )}

            {/* 教育背景 */}
            {artist?.education && artist.education.length > 0 && (
              <div>
                <h3 className="text-white text-xl font-light tracking-wider mb-4 text-blue-300">
                  教育背景
                </h3>
                <div className="space-y-3">
                  {artist.education.map((edu: any, idx: number) => (
                    <div key={idx} className="border-l-2 border-blue-400 pl-4">
                      <p className="text-white font-light">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">
                        {edu.institution} ({edu.year})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 獲獎記錄 */}
            {artist?.awards && artist.awards.length > 0 && (
              <div>
                <h3 className="text-white text-xl font-light tracking-wider mb-4 text-blue-300">
                  獲獎與展覽
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {artist.awards.map((award: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        {award.year} {award.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 聯繫信息 */}
        <div
          className="p-8 rounded-lg border border-blue-400/30 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(30, 60, 100, 0.15) 0%, rgba(50, 100, 150, 0.05) 100%)',
          }}
        >
          <h3 className="text-white text-xl font-light tracking-wider mb-4">聯繫方式</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300">
            {artist?.email && (
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">電子郵件</p>
                <a
                  href={`mailto:${artist.email}`}
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  {artist.email}
                </a>
              </div>
            )}
            {artist?.email && artist?.socialMedia && (
              <div className="hidden md:block w-px h-8 bg-blue-400/30" />
            )}
            {artist?.socialMedia && (
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">社群媒體</p>
                <p className="text-blue-300">{artist.socialMedia}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
