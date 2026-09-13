import NavItem from "../common/NavItem.tsx";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useLocation, useNavigate } from "react-router-dom";
import { useGsapContext } from "@shared/hooks/useGsap.tsx";

function MobileNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useGsapContext<HTMLDivElement>(({ gsap, root }) => {
    gsap.from(root, {
      y: 48,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);
  return (
    // Outer nav owns the horizontal centering; the inner pill is what GSAP
    // animates so the two transforms never clash.
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <div
        ref={ref}
        className="rounded-full gap-2 p-2 h-16 bg-primary/95 backdrop-blur-md flex justify-around items-center shadow-2xl shadow-primary/30 ring-1 ring-white/10"
      >
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
          onClick={() => navigate("/profile")}
          active={location.pathname == "/profile"}
        />
      </div>
    </nav>
  );
}

export default MobileNavbar;

