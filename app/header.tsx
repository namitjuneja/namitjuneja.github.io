'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="relative overflow-hidden rounded-full ring-[1.5px] ring-zinc-400 border-3 border-transparent h-[48px] w-[48px]">
          <Image
            src="/images/profile_nobg.png"    // Put your image in public folder
            alt="Namit Juneja"
            width={48}
            height={48}
            className="h-[48px] w-[48px] object-cover"
          />
        </div>
        <div className="flex flex-col ml-4 justify-center">
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
      </div>
    </header>
  )
}
