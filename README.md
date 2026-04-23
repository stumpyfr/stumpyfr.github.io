# niels.freier.fr

Personal site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Dev

```bash
bun dev        # start dev server at localhost:4321
bun run build  # type-check + build to dist/
bun preview    # preview the build locally
```

## Content

All editable content lives in `src/content/` and `src/config/site.ts`.

| What | Where |
|---|---|
| Projects | `src/content/projects/*.mdx` |
| Speaking & Media | `src/content/speaking-media/*.mdx` |
| Nav links | `src/config/site.ts` → `navLinks` |
| Site metadata | `src/config/site.ts` → `siteConfig` |

Each project card is a `.mdx` file with `title`, `group`, `description`, and `links` frontmatter fields.

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.