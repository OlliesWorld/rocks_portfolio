export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620878efa90e6fd9ac1f650c",
                  title: "Sanity Studio",
                  name: "rocks-portfolio-studio",
                  apiId: "36155178-6c04-45af-9e9d-ef0c934a29d7",
                },
                {
                  buildHookId: "620878ef61c7e0d1b45207c6",
                  title: "Blog Website",
                  name: "rocks-portfolio",
                  apiId: "7a843314-6732-4f63-ac7b-c1c062d72323",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/OlliesWorld/rocks_portfolio",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://rocks-portfolio.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent projects",
        order: "_createdAt desc",
        types: ["project"],
      },
      layout: { width: "medium" },
    },
  ],
};
