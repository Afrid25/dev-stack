import type { ComponentType } from "react";
import { FaStar, FaReact, FaVuejs, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import { SiSvelte, SiRedis, SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import type { Technology } from "./TypeScript";

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
};

interface TechnologyCardProps {
  tech: Technology;
  isSelected: boolean;
  onToggle: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isSelected, onToggle }: TechnologyCardProps) => {
  const IconComponent = iconMap[tech.icon];

  return (
    <article className={`flex min-w-0 flex-col justify-between overflow-hidden rounded-xl border bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-6 ${isSelected ? 'border-orange-300 ring-2 ring-orange-100' : 'border-slate-100'}`}>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-2xl sm:text-3xl">
            {IconComponent && <IconComponent className={tech.iconColor} />}
          </div>
          {tech.badge && (
            <span className={`max-w-20 truncate rounded-full px-2 py-0.5 text-[10px] font-medium sm:max-w-none sm:px-3 sm:text-xs ${tech.badgeClassName}`}>
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="mt-3 wrap-break-word text-base font-bold leading-tight text-slate-900 sm:mt-4 sm:text-xl">{tech.name}</h3>
        <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-slate-500 sm:text-xs">{tech.description}</p>
      </div>

      <div className="mt-4 sm:mt-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-500 sm:mb-4 sm:text-xs">
          <div className="flex min-w-0 flex-wrap gap-1">
            <span className="max-w-full truncate rounded bg-slate-100 px-1.5 py-0.5 font-medium sm:px-2">{tech.category}</span>
            <span className="max-w-full truncate rounded bg-slate-100 px-1.5 py-0.5 font-medium sm:px-2">{tech.level}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <FaStar className="text-xs text-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          type="button"
          aria-pressed={isSelected}
          onClick={() => onToggle(tech)}
          className={`w-full rounded-lg py-2 text-[10px] font-semibold leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:rounded-xl sm:py-2.5 sm:text-xs ${
            isSelected
              ? "border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? "Remove from Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;