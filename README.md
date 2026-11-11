# Valorialabs Demos

A pnpm workspace for Valorialabs demos. The first app is a Next.js App Router project in `apps/web`. Shared UI lives in `packages/ui` so later demos can reuse the same Tailwind CSS and shadcn/ui setup.

## Prerequisites

- Node.js `>=20.9.0`
- pnpm `11.25.0` (pinned in the root `package.json`)

If pnpm is not installed, activate the pinned version with Corepack:

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
```

## Setup

Install dependencies from the repository root:

```bash
pnpm install
```

This workspace was created with the official shadcn Next.js monorepo template:

```bash
pnpm dlx shadcn@latest init -t next --monorepo -d -y -n valorialabs-demos
```

`-d` applies the default Nova preset. The CLI writes a child directory, so the generated files were moved up into this folder. The root package name is `valorialabs-demos`.

## Workspace map

```text
apps/web                         First Next.js demo (App Router, TypeScript)
packages/ui                      Shared shadcn components, cn helper, and global CSS
packages/eslint-config           Shared ESLint config
packages/typescript-config       Shared TypeScript config (strict)
package.json                     Root scripts, run through Turborepo
pnpm-workspace.yaml              Workspace globs: apps/* and packages/*
turbo.json                       Task pipeline for dev, build, lint, format, typecheck
```

New demo apps go in `apps/`. Shared components go in `packages/ui`. App-specific components stay inside that app, for example `apps/web/components`.

## Commands

Run these from the repository root:

```bash
pnpm install     # install workspace dependencies
pnpm dev         # start every app in development
pnpm build       # production build
pnpm lint        # ESLint
pnpm typecheck   # TypeScript, no emit
pnpm format      # Prettier, including Tailwind class sorting
```

`pnpm dev` starts `apps/web` with Next.js. Open [http://localhost:3000](http://localhost:3000).

To run one app only:

```bash
pnpm --filter web dev
```

## shadcn/ui

Tailwind CSS v4 and shadcn/ui are already installed. The design settings, which every app must keep in sync, are:

- style: `base-nova`
- base color: `neutral`
- icon library: `lucide`
- CSS variables: enabled
- component base: Base UI (`@base-ui/react`)

Add a component from the repository root. The CLI installs shared UI into `packages/ui` and wires the import for `apps/web`:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Import shared components from the UI package:

```tsx
import { Button } from "@workspace/ui/components/button"
```

`Button` is already installed. Global styles are imported in `apps/web/app/layout.tsx` from `@workspace/ui/globals.css`.

## Adding another demo

1. Create a new Next.js app under `apps/<name>`.
2. Depend on `@workspace/ui` with `workspace:*`.
3. In `next.config.ts`, set `transpilePackages: ["@workspace/ui"]`.
4. Re-export the shared PostCSS config, as `apps/web/postcss.config.mjs` does.
5. Import `@workspace/ui/globals.css` from the app layout.
6. Add a `components.json` whose `style`, `iconLibrary`, and `baseColor` match `apps/web/components.json` (`base-nova`, `lucide`, `neutral`). Point `tailwind.css` at `packages/ui/src/styles/globals.css`, and point the `ui` and `utils` aliases at `@workspace/ui`.
7. Run `pnpm install` from the root. `pnpm-workspace.yaml` already includes `apps/*`.

## Conventions

- TypeScript is strict, including `noUncheckedIndexedAccess`, through `packages/typescript-config`.
- Keep imports at the top of the file.
- In a `switch` over a union or enum, use a `never` check in the default branch.
- Do not hand-edit generated shadcn internals unless the change is intentional. Prefer `pnpm dlx shadcn@latest add` so files land in the right package.
- Record meaningful setup and structure changes in the project log below.

## Project log

### 2026-11-12 — Initial workspace

- Activated pnpm `11.25.0` with Corepack. Node.js in use was `v22.23.4`.
- Scaffolded the shadcn Next.js monorepo (`-t next --monorepo -d -y -n valorialabs-demos`) and moved it into this folder.
- Stack: Next.js 16.4.4, React 19.3.1, TypeScript, Tailwind CSS v4, shadcn/ui (`base-nova`, neutral, lucide), Turborepo, ESLint, and Prettier.
- First app is `apps/web`. Shared UI, including `Button`, is in `packages/ui`.
- The scaffold created the git repository and its initial commit. No further commit was made for this setup.
- `.pnpm-store/` is gitignored. pnpm may create that cache in the repo; it is not part of the source.

### 2026-11-12 — Maverick Epoxy demo

- Mounted the Maverick Epoxy drop-in as `/maverick-epoxy` in `apps/web` (route under `app/maverick-epoxy`, assets under `public/maverick-epoxy`).
- Added `motion`, `cn`, `@fontsource-variable/montserrat`, and `@fontsource/lato` to `apps/web`. `lucide-react` was already installed.
- Homepage **View my demo** button links to that route.
