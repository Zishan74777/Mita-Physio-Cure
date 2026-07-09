import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  const list = [{ label: "Home", to: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `https://mitaphysiocure.in${it.to || ""}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500" data-testid="breadcrumbs">
      <ol className="flex flex-wrap items-center gap-1.5">
        {list.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i === 0 && <Home className="h-3.5 w-3.5" />}
            {it.to && i < list.length - 1 ? (
              <Link to={it.to} className="hover:text-blue-700">{it.label}</Link>
            ) : (
              <span className="text-slate-800 font-medium">{it.label}</span>
            )}
            {i < list.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
          </li>
        ))}
      </ol>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </nav>
  );
}
