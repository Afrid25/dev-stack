import { useState } from 'react'
import MobileMenu from './MobileMenu'
import NavActions from './NavActions'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { navItems } from './navItems'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        className="relative mx-auto flex min-h-20 max-w-6xl items-center gap-8 px-5 md:px-8"
        aria-label="Main navigation"
      >
        <NavLogo /> // Logo part

        {/*  Nav Items */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <NavLinks items={navItems} />
        </div>

        {/* Sign in and Sign up part  */}
        <div className="ml-auto hidden md:block">
          <NavActions />
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          items={navItems}
          onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
};

export default NavBar
