import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '~/assets/images',
      publicFolder: '',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'src/content/post',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'publishDate',
            label: 'publishDate',
            required: true,
          },
          {
            type: 'datetime',
            name: 'updateDate',
            label: 'updateDate',
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'excerpt',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'category',
            required: true,
          },

          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            },
          },

          {
            type: 'image',
            name: 'image',
            label: 'image',
            required: true,
          },

          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
