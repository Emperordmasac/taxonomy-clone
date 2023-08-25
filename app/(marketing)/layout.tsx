import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/dashboard/user-account-nav"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex items-center justify-between h-16 py-4 border-b border-b-slate-200">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className="relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
