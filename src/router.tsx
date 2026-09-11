import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Derive basepath at runtime so the static export also works when served
  // from a subpath (e.g. GitHub Pages project sites at user.github.io/repo/).
  // The app only has a single "/" route, so any directory prefix is the base.
  let basepath = "/";
  if (typeof window !== "undefined") {
    const dir = window.location.pathname.replace(/\/[^/]*$/, "");
    if (dir) basepath = dir;
  }

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
