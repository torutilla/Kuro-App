import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import NavItem from "../common/NavItem.tsx";
import ProfileTab from "../common/ProfileTab.tsx";
import { Home, Message, Pets } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

function DesktopSidebar() {
  const { user } = useAuth();
  if (!user) return;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="hidden lg:flex fixed top-0 left-0 h-full w-56 bg-primary flex-col py-6 px-4 z-50 shadow-xl">
      <h1 className="mb-10 text-xl font-bold text-white">Kuro</h1>

      <div className="flex flex-col gap-6 flex-1">
        <NavItem
          active={location.pathname === "/home"}
          label="Home"
          icon={<Home />}
          onClick={() => navigate("/home")}
        />
        <NavItem
          label="Messages"
          icon={<Message />}
          active={location.pathname === "/inbox"}
          onClick={() => navigate("/inbox")}
        />
        <NavItem
          active={location.pathname === "/post"}
          label="Post"
          icon={<Pets />}
          onClick={() => navigate("/post")}
        />
      </div>

      <ProfileTab name={user.name} email={user.email} />
    </nav>
  );
}

export default DesktopSidebar;
