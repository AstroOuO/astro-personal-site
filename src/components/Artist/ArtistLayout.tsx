'use client'

import React from 'react'

/**
 * 藝術家布局 - 黑色 + 藍色金屬漸層背景
 */
export const ArtistLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0f1520 50%, #1a2535 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 金屬質感覆蓋層 */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `
          linear-gradient(90deg, transparent 0%, rgba(100, 150, 200, 0.1) 50%, transparent 100%),
          repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 1px, transparent 1px, transparent 2px)
        `,
          backgroundSize: '100% 100%, 100% 2px',
        }}
      />

      {children}
    </div>
  )
}
