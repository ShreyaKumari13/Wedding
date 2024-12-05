'use client'

import CataHome from "@/app/components/catapage/catahome"

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <CataHome />
      {children}
    </main>
  )
}
