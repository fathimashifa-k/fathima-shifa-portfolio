# Fathima Shifa K: Portfolio

A one-page portfolio for a full stack developer, built from her resume. The hero is an interactive storefront preview that reflects the e-commerce features she builds.

## Tech stack
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3. No API keys or environment variables needed.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Customize
- All text lives in `data/content.ts`: profile, projects, experience, skills, education.
- Colors (light and dark) are the CSS variables at the top of `app/globals.css`.
- Add a project by adding an object to `projects`. Add `link` fields only for URLs you can verify.
- Add your email to `profile` and the Contact section in `app/page.tsx` when you want one listed.

## Deploy
Push to GitHub, import the repository in Vercel, keep the Next.js preset, and deploy.
