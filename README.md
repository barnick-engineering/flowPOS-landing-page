# FlowPOS marketing site

SaaS landing page for FlowPOS — React, Vite, Tailwind v4, shadcn-style UI (aligned with the main `frontend` app).

## Run locally

```bash
cd website
npm install
cp .env.example .env   # set your YouTube demo URL
npm run dev
```

Opens at **http://localhost:5174** (app POS UI stays on 5173).

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_DEMO_VIDEO_URL` | YouTube watch or youtu.be link for hero embed (top center) |
| `VITE_APP_URL` | Link for Log in / Open app buttons |
| `VITE_CONTACT_EMAIL` | Sales contact on pricing CTA |

## Build

```bash
npm run build
npm run preview
```

Static output: `website/dist/`

## Sections

1. **Hero** — centered YouTube embed, headline, SaaS positioning  
2. **How it works** — 5-step operation flow (setup → POS → kitchen → pay → back office)  
3. **Features** — product highlights  
4. **Pricing** — sample Starter / Growth / Pro / Enterprise packages (BDT sample)  
5. **Contact** — email + link to demo app  

Replace the placeholder YouTube URL in `.env` with your own product walkthrough.
# flowPOS-landing-page
