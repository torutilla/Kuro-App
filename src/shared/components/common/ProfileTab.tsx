import Dropdown from "./DropdownButton.tsx";

type ProfileTabProps = {
  name: string;
  email: string;
  avatarUrl?: string;
  onLogout?: () => void;
};

function ProfileTab({ name, email, avatarUrl, onLogout }: ProfileTabProps) {
  return (
    <div className="relative flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-xl p-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold text-white">
              {name.charAt(0)}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white leading-tight">
            {name}
          </span>
          <span className="text-xs text-white/60 leading-tight">{email}</span>
        </div>
      </div>

      <Dropdown
        trigger={
          <button className="p-2 rounded-lg hover:bg-white/10 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="5" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="19" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </button>
        }
      >
        <div className="absolute right-3 -top-5 w-40 bg-primary/80 backdrop-blur-md rounded-lg shadow-lg border border-white/10 z-50">
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10 rounded-lg"
          >
            Logout
          </button>
        </div>
      </Dropdown>
    </div>
  );
}

export default ProfileTab;
