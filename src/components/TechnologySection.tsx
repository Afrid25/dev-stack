import { useEffect, useState } from "react";
import type { Technology } from "./TypeScript";
import StackSideBar from "./StackSideBar";
import TechnologyCard from "./TechnologyCard";
import toast from 'react-hot-toast'

export const TechnologyFallback = () => {
  return (
    <section className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8" aria-label="Loading technologies">
      <div className="mx-auto flex min-h-64 max-w-6xl items-center justify-center">
        <p className="animate-pulse text-sm font-medium text-slate-500">Loading technologies...</p>
      </div>
    </section>
  )
}

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to load technology data:", error);
          setIsLoading(false);
        }
      }
    };

    loadTechnologies();

    return () => controller.abort();
  }, []);

  const handleToggleStack = (tech: Technology) => {
    const isSelected = selectedStack.some((item) => item.id === tech.id)

    if (isSelected) {
      toast(`${tech.name} removed from your stack`)
    } else {
      toast.success(`${tech.name} added to your stack`)
    }

    setSelectedStack((previousStack) => (
      isSelected
        ? previousStack.filter((item) => item.id !== tech.id)
        : [...previousStack, tech]
    ))
  };

  const handleRemove = (id: string) => {
    const removedTechnology = selectedStack.find((item) => item.id === id)
    if (removedTechnology) {
      toast(`${removedTechnology.name} removed from your stack`)
    }

    setSelectedStack((previousStack) => previousStack.filter((item) => item.id !== id))
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return

    setSelectedStack([])
    toast.success('All technologies removed from your stack')
  }

  if (isLoading) {
    return <TechnologyFallback />
  }

  return (
    <section
      id="technology"
      className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
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
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isSelected={selectedStack.some((item) => item.id === tech.id)}
                onToggle={handleToggleStack}
              />
            ))}
          </div>

          <StackSideBar
            selectedStack={selectedStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
