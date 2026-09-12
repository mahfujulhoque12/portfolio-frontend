import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import api from "../lib/api";
import { toast } from "sonner";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await api.post("/api/auth/login", data);

      console.log("Login response:", res.data);

      if (res.data.success) {
        const { token, user } = res.data;

        // Save to Zustand
        login(token, user);
        toast.success("Login Successfully");
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.log("Login error:", error);

      toast.error(error.response?.data?.message || "Failed to login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-[#E3B341] flex items-center justify-center">
            <span className="text-xl font-bold text-[#0B0F17]">M</span>
          </div>

          <h1 className="text-2xl font-semibold text-[#E6EDF3]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-[#7C879A]">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-lg border border-[#1E2530] bg-[#0D1320] p-6 md:p-8"
        >
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-[13px] text-[#9AA4B2] mb-2"
            >
              Email
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C879A]"
              />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full bg-[#0B0F17] border rounded-md pl-10 pr-3.5 py-3 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none transition-colors duration-150 ${
                  errors.email
                    ? "border-red-500/60"
                    : "border-[#1E2530] focus:border-[#E3B341]"
                }`}
              />
            </div>

            {errors.email && (
              <p className="text-[12px] text-red-400 mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[13px] text-[#9AA4B2] mb-2"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C879A]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full bg-[#0B0F17] border rounded-md pl-10 pr-11 py-3 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none transition-colors duration-150 ${
                  errors.password
                    ? "border-red-500/60"
                    : "border-[#1E2530] focus:border-[#E3B341]"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7C879A] hover:text-[#E3B341] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-[12px] text-red-400 mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#E3B341] text-[#0B0F17] text-[14px] font-medium hover:bg-[#f0c257] transition-colors duration-150"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[12px] text-[#5B6472] mt-6">
          Secure dashboard access
        </p>
      </div>
    </div>
  );
};

export default Login;
