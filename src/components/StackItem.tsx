import type { ComponentType } from 'react'
import type { Technology } from './TypeScript'

interface StackItemProps {
    tech: Technology
    Icon?: ComponentType<{ className?: string }>
    onRemove: (id: string) => void
}

const StackItem = ({ tech, Icon, onRemove }: StackItemProps) => {
    return (
        <li className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2.5">
            <div className="flex items-center gap-2">
                {Icon && <Icon className={`text-base ${tech.iconColor}`} />}
                <span className="text-xs font-semibold text-slate-800">{tech.name}</span>
            </div>
            <button
                type="button"
                aria-label={`Remove ${tech.name} from your stack`}
                onClick={() => onRemove(tech.id)}
                className="rounded p-1 text-xs font-medium text-slate-400 hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
            >
                Remove
            </button>
        </li>
    )
}

export default StackItem