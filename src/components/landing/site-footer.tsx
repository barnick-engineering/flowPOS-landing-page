export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className='border-t border-border py-10'>
      <div className='container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row'>
        <p>
          © {year} FlowPOS · Barnick Labs · Restaurant POS SaaS
        </p>
        <nav className='flex gap-6'>
          <a href='#how-it-works' className='hover:text-foreground'>
            Process
          </a>
          <a href='#pricing' className='hover:text-foreground'>
            Pricing
          </a>
          <a href='#contact' className='hover:text-foreground'>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
