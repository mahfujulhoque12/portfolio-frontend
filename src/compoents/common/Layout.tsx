import { Link, Outlet } from "react-router";
import useAuthStore from "../../store/auth.store";
import { IoMdLogOut } from "react-icons/io";

const DashboardLayout = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#E6EDF3]">
      {/* ================= TOPBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[#1E2530] bg-[#0D1320]/95 backdrop-blur">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#E3B341] flex items-center justify-center">
              <span className="text-[#0B0F17] font-bold text-sm">M</span>
            </div>

            <div>
              <h1 className="text-sm font-semibold text-[#E6EDF3]">
                My Dashboard
              </h1>
              <p className="text-[11px] text-[#7C879A]">Admin Panel</p>
            </div>
          </div>

          {/* Navigation + Profile */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <nav className="hidden sm:flex items-center gap-6">
              <Link
                to="/dashboard"
                className="text-sm text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                Home
              </Link>

              <Link
                to="/contact"
                className="text-sm text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                Contact
              </Link>
            </nav>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#1E2530] bg-[#151C2C] flex items-center justify-center">
                <span className="text-sm font-medium text-[#E3B341]">M</span>
              </div>

              <div className="hidden md:block">
                <p className="text-[13px] font-medium text-[#E6EDF3]">Mahfuj</p>
                <p className="text-[11px] text-[#7C879A]">Administrator</p>
              </div>
              <button
                onClick={() => logout()}
                className="cursor-pointer text-red-500 "
              >
                <IoMdLogOut className="" size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-16 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
