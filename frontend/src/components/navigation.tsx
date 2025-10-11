'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const isAdminEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN === 'true'

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl mx-4">
      <div className="bg-background/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between h-16 px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 relative">
              <Image
                src="/images/logo/AI4K Logo.png"
                alt="AI4K Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">Project Library</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/browse">
              <Button variant="ghost">Browse</Button>
            </Link>
            {isAdminEnabled && (
              <Link href="/admin/upload">
                <Button variant="ghost">Admin</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
