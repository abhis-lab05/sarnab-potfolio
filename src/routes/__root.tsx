import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-black text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page wandered off the funnel.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sarnab Das — Performance Marketer" },
      { name: "description", content: "Sarnab Das is a performance marketer with 4.5+ years driving growth across edtech, real estate, e-commerce and D2C." },
      { name: "author", content: "Sarnab Das" },
      { property: "og:title", content: "Sarnab Das — Performance Marketer" },
      { name: "twitter:title", content: "Sarnab Das — Performance Marketer" },
      { property: "og:description", content: "Sarnab Das is a performance marketer with 4.5+ years driving growth across edtech, real estate, e-commerce and D2C." },
      { name: "twitter:description", content: "Sarnab Das is a performance marketer with 4.5+ years driving growth across edtech, real estate, e-commerce and D2C." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f210d8c1-288e-403f-94c0-a9d18dc018b2/id-preview-2af06572--7bbd5dba-6e82-4bee-ab2e-f26babf22b94.lovable.app-1777185447836.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f210d8c1-288e-403f-94c0-a9d18dc018b2/id-preview-2af06572--7bbd5dba-6e82-4bee-ab2e-f26babf22b94.lovable.app-1777185447836.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
