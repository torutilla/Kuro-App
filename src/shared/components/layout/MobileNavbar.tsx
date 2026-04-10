import NavItem from "../common/NavItem.tsx";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useLocation, useNavigate } from "react-router-dom";

function MobileNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="rounded-full fixed bottom-3 -translate-x-1/2 left-1/2 w-fit gap-5 p-2 h-16 bg-primary flex justify-around items-center  z-50 lg:hidden shadow-lg">
      <NavItem
        icon={<HomeIcon />}
        label=""
        onClick={() => navigate("/home")}
        active={location.pathname == "/home"}
      />
      <NavItem
        icon={<ChatBubbleOutlineIcon />}
        label=""
        onClick={() => navigate("/inbox")}
        active={location.pathname == "/inbox"}
      />
      <NavItem
        icon={<PersonOutlineIcon />}
        label=""
        active={location.pathname == "/profile"}
      />
    </nav>
  );
}

export default MobileNavbar;
