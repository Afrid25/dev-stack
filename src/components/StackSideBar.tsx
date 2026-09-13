
import type { ComponentType } from 'react'
import { FaDocker, FaJava, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiJavascript, SiRedis, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import type { Technology } from './TypeScript'
import StackItem from './StackItem'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
    FaReact,
    FaVuejs,
    SiSvelte,
    TbBrandNextjs,
    FaNodeJs,
    BiLogoPostgresql,
    SiRedis,
    SiJavascript,
    SiTypescript,
    FaJava,
    SiTailwindcss,
    FaDocker,
}

interface StackSideBarProps {
    selectedStack: Technology[]
    onRemove: (id: string) => void
}

const StackSideBar = ({ selectedStack, onRemove }: StackSideBarProps) => {
    return (
        <aside className="sticky top-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-xs text-slate-500">
                {selectedStack.length > 0
                    ? `${selectedStack.length} tools selected.`
                    : 'No technologies selected yet.'}
            </p>

            <div className="mt-4">
                {selectedStack.length === 0 ? (
                    <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-200 text-center">
                        <span className="text-xs text-slate-400">Your stack is empty.</span>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {selectedStack.map((tech) => (
                            <StackItem
                                key={tech.id}
                                tech={tech}
                                Icon={iconMap[tech.icon]}
                                onRemove={onRemove}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </aside>
    )
}

export default StackSideBar