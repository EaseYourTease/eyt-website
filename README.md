# Ease Your Tease (EYT)

**Premium AI Transformation Company Website**

---

## About

This is the official website of **Ease Your Tease (EYT)** — an AI transformation company building AI-native systems across corporates, schools, and institutes.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page with all core sections |
| For Corporates | `/for-corporates` | AI solutions for enterprises |
| For Schools | `/for-schools` | AI programs for K-12 schools |
| For Institutes | `/for-institutes` | AI programs for colleges & institutes |
| Solutions | `/solutions` | All EYT solutions |
| Case Studies | `/case-studies` | Success stories |
| About | `/about` | Company overview |
| Contact | `/contact` | Book a strategy call |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/EaseYourTease/eyt-website.git
cd eyt-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and log in
3. Click "New Project" and import this repository
4. Vercel auto-detects Next.js — no extra config needed
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## Environment Variables

Create a `.env.local` file:

```
# Contact form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=contact@easeyourtease.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

## Project Structure

```
eyt-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── for-corporates/
│   ├── for-schools/
│   ├── for-institutes/
│   ├── solutions/
│   ├── case-studies/
│   ├── about/
│   └── contact/
├── components/
│   ├── ui/
│   ├── sections/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── constants/
├── public/
└── package.json
```

## License

MIT — see [LICENSE](./LICENSE)

---

**Built with Next.js · Tailwind CSS · Framer Motion**
