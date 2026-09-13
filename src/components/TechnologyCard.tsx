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
    <article className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${isSelected ? 'border-orange-300 ring-2 ring-orange-100' : 'border-slate-100'}`}>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-3xl">
            {IconComponent && <IconComponent className={tech.iconColor} />}
          </div>
          {tech.badge && (
            <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${tech.badgeClassName}`}>
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">{tech.description}</p>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex gap-2">
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium">{tech.category}</span>
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium">{tech.level}</span>
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
          className={`w-full rounded-xl py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
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