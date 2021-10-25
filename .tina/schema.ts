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

const localizedHtml = [
  {
    type: "string",
    name: "en",
    label: "en",
    ui: {
      component: "textarea",
    },
  },
  {
    ui: {
      component: "textarea",
    },
    name: "fr",
    label: "fr",
    type: "string",
  },
  {
    ui: {
      component: "textarea",
    },
    name: "kor",
    label: "kor",
    type: "string",
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
      label: "ART-Talks Page",
      name: "arttalks",
      path: "content/arttalks",
      fields: [
        {
          label: "Main Title",
          type: "object",
          name: "mainTitle",
          fields: localizedString(),
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
    {
      label: "Home",
      name: "home",
      path: "content/home",
      fields: [
        {
          label: "Description",
          type: "object",
          name: "description",
          fields: localizedHtml,
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
      label: "Archive",
      name: "archive",
      path: "content/archive",
      fields: [
        {
          label: "Description",
          type: "object",
          name: "description",
          fields: localizedHtml,
        },
      ],
    },
    {
      label: "Submission",
      name: "submission",
      path: "content/submission",
      fields: [
        {
          label: "Description",
          type: "object",
          name: "description",
          fields: localizedHtml,
        },
      ],
    },
    {
      label: "About",
      name: "about",
      path: "content/about",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "object",

          fields: [
            {
              type: "string",
              name: "en",
              label: "en",
              ui: {
                component: "html",
              },
            },
            {
              type: "string",
              name: "fr",
              label: "fr",
              ui: {
                component: "html",
              },
            },
            {
              type: "string",
              name: "kor",
              label: "kor",
              ui: {
                component: "html",
              },
            },
          ],
        },
      ],
    },
  ],
});
