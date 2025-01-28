import Link from "next/link";

interface MonoBadgeProps {
  value: string;
  link?: string;
}

export default function MonoBadge({ value, link }: MonoBadgeProps) {
  if (link) {
    return (
      <Link
        href={link}
        className="inline-flex items-center font-mono text-xs"
        target="_blank"
      >
        <span className="bg-gray-800 text-white px-1.5 py-0.5">{value}</span>
      </Link>
    );
  }
  return (
    <div className="inline-flex items-center font-mono text-xs">
      <span className="bg-gray-800 text-white px-1.5 py-0.5">{value}</span>
    </div>
  );
}
