import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="min-h-[60vh] grid place-items-center py-20 bg-medical-grid">
        <div className="text-center px-4">
          <div className="font-[Outfit] text-7xl sm:text-8xl font-extrabold text-blue-800">404</div>
          <h1 className="mt-4 font-[Outfit] text-2xl sm:text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link to="/" data-testid="notfound-home" className="mt-8 inline-block rounded-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
