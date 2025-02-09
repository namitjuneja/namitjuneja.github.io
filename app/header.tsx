'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between selection:bg-highlight_yellow/50 selection:text-black dark:selection:bg-highlight_yellow_dark/10 dark:selection:text-highlight_yellow_dark">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Namit Juneja
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Research Scientist
        </TextEffect>
      </div>
    </header>
  )
}
