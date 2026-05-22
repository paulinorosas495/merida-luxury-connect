import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/valor/$slug")({
  component: ValorDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-[#F5F0EB]">
      <p className="font-serif text-2xl">Sección no encontrada</p>
    </div>
  ),
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-[#F5F0EB]">
      <p className="font-serif text-2xl">Algo salió mal</p>
    </div>
  ),
  loader: ({ params }) => {
    const value = site.values.find((v) => v.slug === params.slug);
    if (!value) throw notFound();
    return { value };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.value.title} — ${site.brand}` },
          { name: "description", content: loaderData.value.body.slice(0, 160) },
          { property: "og:title", content: `${loaderData.value.title} — ${site.brand}` },
          { property: "og:description", content: loaderData.value.body.slice(0, 160) },
          { property: "og:image", content: loaderData.value.image },
          { name: "twitter:image", content: loaderData.value.image },
        ]
      : [],
  }),
});

function ValorDetail() {
  const { value } = Route.useLoaderData();
  return <DetailPage title={value.title} body={value.body} image={value.image} />;
}