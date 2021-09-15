import { defineSchema } from "@tinacms/cli";
const localizedString = ({ textArea = false } = {}) => [
  {
    type: "string",
    name: "en",
    label: "en",
    ui: {
      component: textArea ? "textarea" : "text",
    },
  },
  {
    type: "string",
    name: "fr",
    label: "fr",
    ui: {
      component: textArea ? "textarea" : "text",
    },
  },
  {
    type: "string",
    name: "kor",
    label: "kor",
    ui: {
      component: textArea ? "textarea" : "text",
    },
  },
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
        },
      ],
    },
    {
      label: "Home",
      name: "home",
      path: "content/pages",
      fields: [
        {
          label: "ART-Talks description",
          type: "object",
          name: "description",
          fields: localizedString({ textArea: true }),
        },
        {
          label: "Days",
          type: "object",
          name: "days",
          list: true,
          fields: [
            {
              label: "Title",
              name: "title",
              type: "object",
              fields: localizedString(),
            },
            {
              label: "Subtitle",
              name: "subtitle",
              type: "object",
              fields: localizedString(),
            },
          ],
        },
      ],
    },
    {
      label: "ART-Talks Page",
      name: "arttalks",
      path: "content/pages",
      fields: [
        {
          label: "Main Title",
          type: "object",
          name: "mainTitle",
          fields: localizedString({ textArea: true }),
        },
        {
          label: "ART-Talks description",
          type: "object",
          name: "description",
          fields: localizedString({ textArea: true }),
        },
        {
          label: "Days",
          type: "object",
          name: "days",
          list: true,
          fields: [
            {
              label: "Title",
              name: "title",
              type: "object",
              fields: localizedString(),
            },
            {
              label: "Subtitle",
              name: "subtitle",
              type: "object",
              fields: localizedString(),
            },
            {
              label: "Body",
              name: "body",
              type: "object",
              list: true,
              templates: [
                {
                  label: "Text section",
                  name: "text",
                  fields: [
                    {
                      label: "body",
                      name: "title",
                      type: "object",
                      fields: localizedString({ textArea: true }),
                    },
                  ],
                },
                {
                  label: "Video section",
                  name: "video",
                  fields: [
                    { label: "Vimeo Video", name: "vimeoUrl", type: "string" },
                  ],
                },
                {
                  label: "Image",
                  name: "image",
                  fields: [
                    {
                      label: "Caption",
                      name: "caption",
                      type: "object",
                      fields: localizedString(),
                    },
                    { label: "Image", name: "imageUrl", type: "image" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
