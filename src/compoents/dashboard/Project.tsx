import { useForm } from "react-hook-form";
import { Image, Link, Loader2, Plus, X } from "lucide-react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import api from "../../lib/api";
import { toast } from "sonner";

interface ProjectFormData {
  image?: FileList;
  title: string;
  description: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
  type: "company" | "personal";
}

const Project = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({
    defaultValues: {
      type: "personal",
    },
  });

  // =========================
  // Image Preview
  // =========================
  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  // =========================
  // Submit Project
  // =========================
  const onSubmit = async (data: ProjectFormData) => {
    try {
      const formData = new FormData();

      // Basic fields
      formData.append("title", data.title.trim());

      formData.append("description", data.description.trim());

      formData.append(
        "technologies",
        JSON.stringify(
          data.technologies
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean),
        ),
      );

      formData.append("liveUrl", data.liveUrl?.trim() || "");

      formData.append("githubUrl", data.githubUrl?.trim() || "");

      formData.append("type", data.type);

      // =========================
      // Image is OPTIONAL
      // =========================
      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      // =========================
      // API Request
      // =========================
      const res = await api.post("/api/project/add-project", formData);

      console.log(res.data, "project response");

      toast.success("Successfully Added Project");

      // Reset form
      reset();

      // Remove preview
      setPreview(null);
    } catch (error) {
      console.error("Project add error:", error);

      toast.error("Failed to add project");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add Project</h1>

          <p className="mt-2 text-sm text-gray-400">
            Add your company or personal project to your portfolio.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ================= IMAGE ================= */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Project Image</h2>

              <p className="mt-1 text-sm text-gray-400">
                Optional. You can add a project image if you want.
              </p>
            </div>

            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Project preview"
                  className="h-64 w-full rounded-xl object-cover"
                />

                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label
                htmlFor="project-image"
                className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] transition hover:border-white/40 hover:bg-white/[0.04]"
              >
                <Image size={42} className="mb-3 text-gray-400" />

                <p className="text-sm font-medium text-gray-300">
                  Upload Project Image
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  JPG, JPEG, PNG, WEBP or GIF
                </p>

                <input
                  id="project-image"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  className="hidden"
                  {...register("image")}
                  onChange={(event) => {
                    register("image").onChange(event);
                    handleImagePreview(event);
                  }}
                />
              </label>
            )}
          </div>

          {/* ================= PROJECT INFORMATION ================= */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-6 text-lg font-semibold">Project Information</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* TITLE */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Project Title
                </label>

                <input
                  type="text"
                  placeholder="Enter project title"
                  {...register("title", {
                    required: "Project title is required",
                  })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />

                {errors.title && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Enter project description"
                  {...register("description", {
                    required: "Project description is required",
                  })}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />

                {errors.description && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* TECHNOLOGIES */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Technologies
                </label>

                <input
                  type="text"
                  placeholder="React, Node.js, MongoDB, Express.js"
                  {...register("technologies", {
                    required: "Technologies are required",
                  })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Separate technologies using commas.
                </p>

                {errors.technologies && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.technologies.message}
                  </p>
                )}
              </div>

              {/* LIVE URL */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Link size={16} />
                  Live URL
                </label>

                <input
                  type="url"
                  placeholder="https://example.com"
                  {...register("liveUrl")}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              {/* GITHUB URL */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <BsGithub size={16} />
                  GitHub URL
                </label>

                <input
                  type="url"
                  placeholder="https://github.com/username/project"
                  {...register("githubUrl")}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              {/* PROJECT TYPE */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Project Type
                </label>

                <select
                  {...register("type", {
                    required: "Project type is required",
                  })}
                  className="w-full rounded-lg border border-white/10 bg-[#111722] px-4 py-3 text-sm outline-none transition focus:border-purple-500"
                >
                  <option value="personal">Personal Project</option>

                  <option value="company">Company Project</option>
                </select>

                {errors.type && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.type.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ================= SUBMIT ================= */}
          {/* ================= SUBMIT ================= */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Adding Project...
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Add Project
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;
