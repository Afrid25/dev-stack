import NavActions from './NavActions'
import NavLinks from './NavLinks'
import type { NavItem } from './navItems'

interface MobileMenuProps {
    isOpen: boolean
    items: NavItem[]
    onToggle: () => void
    onClose: () => void
}

const MobileMenu = ({ isOpen, items, onToggle, onClose }: MobileMenuProps) => {
    return (
        <div className="relative ml-auto md:hidden">
            <button
                className="rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={onToggle}
            >
                <span className="sr-only">Menu</span>
                <span className="block h-0.5 w-5 bg-current" />
                <span className="mt-1.5 block h-0.5 w-5 bg-current" />
                <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            </button>

            {isOpen && (
                <div id="mobile-navigation" className="absolute right-0 top-14 z-10 w-64 rounded-lg border border-slate-200 bg-white p-5 shadow-lg">
                    <NavLinks items={items} onItemClick={onClose} />
                    <div className="mt-6 border-t border-slate-100 pt-5">
                        <NavActions />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
