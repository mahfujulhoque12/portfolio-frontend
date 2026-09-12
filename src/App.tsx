import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/Home";
import SmoothScroll from "./compoents/common/SmoothScroll";
import Dashboard from "./page/Dashboard";
import DashboardLayout from "./compoents/common/Layout";
import Login from "./page/Login";
import ProtectedRoute from "./compoents/common/ProtectedRoute";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll />

      <Toaster position="top-right" richColors theme="dark" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
