# Portfolio

My software engineering portfolio, built with Next.js, TypeScript and Tailwind CSS, and hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

| What | File |
| --- | --- |
| Name, intro, GitHub/LinkedIn/email/CV links | `lib/site.ts` |
| Projects (add, remove, reorder) | `lib/projects.ts` |
| About page text, experience, tools | `app/about/page.tsx` |
| Colours (light and dark mode) | `app/globals.css` |

Search for `TODO` to find the placeholders still to fill in.

## Deploy to Vercel

1. Push this folder to a new GitHub repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/KindaViking/portfolio.git
   git push -u origin main
   ```

2. In Vercel, choose **Add New → Project**, import the repo and click **Deploy**.
3. The site goes live at a free `*.vercel.app` address. Every push to `main` redeploys it.

## Adding a custom domain later

In Vercel, open **Project → Settings → Domains**, add the domain, and copy the DNS records it shows into your domain's DNS settings.

## Before pushing

Run `npm run build` and `npm run lint` locally to catch the same errors Vercel would.
