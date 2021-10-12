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
                    "6165ef5e7b6de61b88feb475",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-v-2-studio",
                  apiId: "78474c83-772a-4b90-932d-1fcba76503a7",
                },
                {
                  buildHookId: "6165ef5ff595582170ae2484",
                  title: "Blog Website",
                  name: "sanity-gatsby-v-2",
                  apiId: "c57ff2f9-4cb5-4782-95d4-350fa16a45b5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DazEB2/sanity-gatsby-v2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-v-2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
