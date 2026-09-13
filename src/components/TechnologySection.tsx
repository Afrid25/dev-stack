import { useEffect, useState } from "react";
import type { Technology } from "./TypeScript";
import StackSideBar from "./StackSideBar";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Technology data request failed: ${response.status}`);
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to load technology data:", error);
        }
      }
    };

    loadTechnologies();

    return () => controller.abort();
  }, []);

  const handleToggleStack = (tech: Technology) => {
    setSelectedStack((prev) => { 
      const isSelected = prev.some((item) => item.id === tech.id);
      return isSelected
        ? prev.filter((item) => item.id !== tech.id)
        : [...prev, tech];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section
      id="technology"
      className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Select as many technologies as you want to build your ideal stack.
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

          <StackSideBar selectedStack={selectedStack} onRemove={handleRemove} />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
