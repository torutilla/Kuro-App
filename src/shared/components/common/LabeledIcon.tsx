type LabeledIconProps = {
  icon: React.ReactNode;
  label: string;
};
function LabeledIcon({ icon, label }: LabeledIconProps) {
  return (
    <div className="flex gap-1 text-sm">
      {icon}
      <p>{label}</p>
    </div>
  );
}

export default LabeledIcon;
