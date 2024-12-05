'use client'

import { CataHeader } from "@/app/components/catapage/cataheader"
import Footer from "@/app/components/footer"

export default function CataloguePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <CataHeader activeSection="dresses" />
    </main>
  )
}