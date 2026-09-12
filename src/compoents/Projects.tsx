import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import api from "../lib/api";

interface Project {
  _id?: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: "personal" | "company";
}

type Tab = "personal" | "company";

const TABS: { key: Tab; label: string }[] = [
  { key: "personal", label: "Personal" },
  { key: "company", label: "Company" },
];

export default function Projects(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>("personal");
  const [showAll, setShowAll] = useState(false);
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Projects using Axios
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/project/get-projects");

        // Response format handles both array & nested data object
        if (response.data.success && Array.isArray(response.data.projects)) {
          setProjectsList(response.data.projects);
        } else if (Array.isArray(response.data)) {
          setProjectsList(response.data);
        }
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects by active tab (personal / company)
  const filteredProjects = projectsList.filter(
    (project) => project.type === activeTab,
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="w-full bg-[#0B0F17] py-10 md:py-15 border border-t-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
          04. Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
          Things I've built
        </h2>

        <p className="text-[15px] text-[#9AA4B2] max-w-xl mb-10 leading-relaxed">
          A mix of personal projects built out of curiosity and work built as
          part of a team.
        </p>

        {/* Tab switcher */}
        <div className="relative inline-flex items-center bg-[#0D1320] border border-[#1E2530] rounded-lg p-1 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setShowAll(false);
              }}
              className="relative px-5 cursor-pointer py-2 text-[13.5px] font-medium rounded-md z-10"
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="active-tab-pill"
                  className="absolute inset-0 bg-[#E3B341] rounded-md -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                />
              )}

              <span
                className={
                  activeTab === tab.key ? "text-[#0B0F17]" : "text-[#9AA4B2]"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Loading & Error States */}
        {loading && (
          <div className="text-center py-12 text-[#9AA4B2]">
            Loading projects...
          </div>
        )}

        {error && <div className="text-center py-12 text-red-400">{error}</div>}

        {/* Project grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project._id || project.title + i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-lg border border-[#1E2530] bg-[#0D1320] overflow-hidden hover:border-[#E3B341]/40 transition-colors duration-150"
                >
                  <div className="aspect-video overflow-hidden bg-[#0B0F17] border-b border-[#1E2530]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] font-medium text-[#E6EDF3]">
                      {project.title}
                    </h3>

                    <p className="text-[13.5px] text-[#9AA4B2] mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11.5px] text-[#9AA4B2] border border-[#1E2530] rounded-md px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[#1E2530]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] text-[#E3B341] hover:underline"
                        >
                          <ExternalLink size={14} />
                          Live site
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] text-[#9AA4B2] hover:text-[#E6EDF3] transition-colors duration-150"
                        >
                          <BsGithub size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty state */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-12 text-[#9AA4B2]">
            No projects found in this category.
          </div>
        )}

        {/* See More / Show Less */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-5 py-2.5 text-[13.5px] font-medium text-[#E3B341] border border-[#1E2530] rounded-lg hover:border-[#E3B341]/40 transition-colors duration-150 cursor-pointer"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
