import { Circle } from "@mui/icons-material";
function LoadingComponent() {
  return (
    <div className="flex gap-1 loading">
      <Circle fontSize="inherit" />
      <Circle fontSize="inherit" />
      <Circle fontSize="inherit" />
    </div>
  );
}

export default LoadingComponent;
