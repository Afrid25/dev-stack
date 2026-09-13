import type { NavItem } from './navItems'

interface NavLinksProps {
    items: NavItem[]
    onItemClick?: () => void
}

const NavLinks = ({ items, onItemClick }: NavLinksProps) => {
    return (
        <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            {items.map((item) => (
                <li key={item.href}>
                    <a
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
                        href={item.href}
                        onClick={onItemClick}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavLinks
