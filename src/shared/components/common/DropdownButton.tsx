import { useEffect, useRef, useState } from "react";

type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

function Dropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>

      {open && (
        <div className="dropdown-in absolute right-0 z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-xl border border-white/10 bg-secondary/90 shadow-2xl backdrop-blur-md">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

