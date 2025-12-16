import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '<project-id>',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  typegen: {
    path: './sanity/**/*.{ts,tsx,js,jsx}',
    schema: '../studio/schema.json',
    generates: './sanity.types.ts',
    overloadClientMethods: true,
  },
})