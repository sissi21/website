# Luisa Cerrato - Professional CV Website

A responsive executive CV and portfolio website for **Luisa Cerrato**, Project Manager. Built with **Astro**, **Svelte 5**, and **Tailwind CSS v4**.

The project is pre-configured for static asset deployment to **Cloudflare Pages / Workers** (matching the configuration patterns in `luca-on-the-web`).

---

## 🛠 Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **UI Components**: [Svelte 5](https://svelte.dev/) (`@astrojs/svelte`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Package Manager**: `pnpm` (Node.js >= 20, active: Node v24)
- **Deployment Target**: Cloudflare Pages / Workers (`wrangler.jsonc`)

---

## 🚀 Local Development & Preview Commands

From the project root (`/home/cerrato/luisa/site`):

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Local Development Server
Starts the local development server with hot module replacement (HMR):
```bash
pnpm run dev
```
By default, the server will be available at:
`http://localhost:4321`

To expose it on the local network (LAN):
```bash
pnpm run dev --host
```

### 3. Build for Production
Compiles all static HTML, CSS, JavaScript chunks, and assets to `./dist/`:
```bash
pnpm run build
```

### 4. Preview Production Build Locally
To test the built static distribution locally using Astro's preview server:
```bash
# Foreground preview (press Ctrl+C to stop)
pnpm run preview

# Or run on a specific port and expose to network:
pnpm run preview --port 4321 --host

# Background daemon mode:
pnpm run preview --background --port 4321
pnpm run preview status   # check status
pnpm run preview logs     # view server logs
pnpm run preview stop     # terminate background daemon
```

---

## 📁 Project Structure

```text
/home/cerrato/luisa/site/
├── astro.config.mjs         # Astro configuration with Svelte and Tailwind CSS
├── wrangler.jsonc           # Cloudflare deployment settings
├── package.json             # NPM dependencies and scripts
├── public/
│   ├── avatar.jpg           # Luisa's profile portrait
│   ├── favicon.svg & favicon.ico
├── src/
│   ├── data/
│   │   └── cv.ts            # Complete typed CV dataset
│   ├── styles/
│   │   └── global.css       # Tailwind CSS and print stylesheet
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML layout, SEO meta tags, Google Fonts
│   ├── components/
│   │   ├── Navbar.svelte    # Top navigation bar with quick print/contact CTAs
│   │   ├── HeroHeader.svelte        # Profile avatar, serif title, contact badges
│   │   ├── SummaryCard.svelte       # Executive profile with key metrics
│   │   ├── ExperienceSection.svelte # Interactive timeline with role filters
│   │   ├── SkillsSection.svelte     # Categorized skill badges
│   │   ├── EducationSection.svelte  # EDHEC and Bocconi credentials
│   │   ├── CertificationsSection.svelte # Google, Harvard, EDHEC certifications
│   │   ├── LanguagesSection.svelte  # 5-dot proficiency ratings
│   │   ├── ContactSection.svelte    # Contact cards and .vcf vCard export
│   │   └── Footer.svelte            # Footer and attribution
│   └── pages/
│       └── index.astro      # Main page rendering the 2-column grid
└── dist/                    # Static production output
```

---

## ☁️ Cloudflare Deployment

When ready to deploy to Cloudflare:
```bash
# Preview via Cloudflare Wrangler
npx wrangler pages dev dist

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=luisa-cerrato
```
