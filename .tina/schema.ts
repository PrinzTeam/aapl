import { defineSchema } from "@tinacms/cli";
const localizedString = [
  { type: "string", name: "en", label: "en" },
  { type: "string", name: "fr", label: "fr" },
  { type: "string", name: "kor", label: "kor" },
];
export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      label: "Home Page",
      name: "home",
      path: "content/pages",
      fields: [
        {
          label: "Main Title",
          type: "object",
          name: "mainTitle",
          fields: localizedString,
        },
        {
          label: "ART-Talks description",
          type: "object",
          name: "description",
          fields: localizedString,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
});
