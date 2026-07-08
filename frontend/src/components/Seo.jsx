import { Helmet } from "react-helmet-async";
import { CLINIC } from "@/data/clinic";

export default function Seo({
  title,
  description,
  path = "/",
  image = CLINIC.logo,
  schema,
}) {
  const url = `${CLINIC.siteUrl}${path}`;
  const fullTitle = title
    ? `${title} | ${CLINIC.name}`
    : `${CLINIC.name} — Best Physiotherapist in Bagnan, Howrah`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
