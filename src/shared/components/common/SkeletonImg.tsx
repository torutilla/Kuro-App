import { type ImgHTMLAttributes, useState } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export default function Image({
  src,
  fallback = "",
  className = "",
  ...props
}: ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gray-400" />
      )}
      <img
        {...props}
        src={src}
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setLoading(false)}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallback;
          setLoading(false);
        }}
      />
    </div>
  );
}
