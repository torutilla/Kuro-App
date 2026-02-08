import { Link } from "react-router-dom";
type AuthFooterProps = {
  label: string;
  link: {
    label: string;
    to: string;
  };
};
function AuthFooter({ link, label }: AuthFooterProps) {
  return (
    <p>
      {label}
      <span>
        <Link to={link.to}>{link.label}</Link>
      </span>
    </p>
  );
}

export default AuthFooter;
