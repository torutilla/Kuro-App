type NavItemProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

function NavItem({ label, icon, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        lg:w-full justify-center lg:justify-start
        flex items-center gap-3 px-3 py-2 rounded-full lg:rounded-xl w-fit
        transition group 
        ${active ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}
      `}
    >
      <span
        className={`
          transition
          ${active ? "text-white" : "text-white/70 group-hover:text-white"}
        `}
      >
        {icon}
      </span>

      <span className="text-sm font-medium hidden lg:block">{label}</span>
    </button>
  );
}

export default NavItem;
