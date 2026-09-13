import { useEffect, useState, type ComponentType } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import { SiSvelte, SiRedis, SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import type { Technology } from "./TypeScript";
import TechnologyCard from "./TechnologyCard";

const sidebarIconMap: Record<string, ComponentType<{ className?: string }>> = {
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

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const handleToggleStack = (tech: Technology) => {
    setSelectedStack((prev) => {
      const isSelected = prev.some((item) => item.id === tech.id);
      if (isSelected) {
        return prev.filter((item) => item.id !== tech.id);
      }

      const withoutSameCategory = prev.filter((item) => item.category !== tech.category);
      return [...withoutSameCategory, tech];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section id="technology" className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_280px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isSelected={selectedStack.some((item) => item.id === tech.id)}
                onToggle={handleToggleStack}
              />
            ))}
          </div>

          <aside className="sticky top-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-xs text-slate-500">
              {selectedStack.length > 0
                ? `${selectedStack.length} tools selected.`
                : "No technologies selected yet."}
            </p>

            <div className="mt-4">
              {selectedStack.length === 0 ? (
                <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-200 text-center">
                  <span className="text-xs text-slate-400">Your stack is empty.</span>
                </div>
              ) : (
                <ul className="space-y-2">
                  {selectedStack.map((tech) => {
                    const Icon = sidebarIconMap[tech.icon];
                    return (
                      <li
                        key={tech.id}
                        className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2.5"
                      >
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className={`text-base ${tech.iconColor}`} />}
                          <span className="text-xs font-semibold text-slate-800">{tech.name}</span>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${tech.name} from your stack`}
                          onClick={() => handleRemove(tech.id)}
                          className="rounded p-1 text-xs font-medium text-slate-400 hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                        >
                          ✕
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;