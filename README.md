# Next.js Portfolio

A modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Radix UI.

## Features

- **Next.js App Router**: Modern React framework with server components
- **SEO Optimized**: Dynamic metadata, sitemap, robots.txt, structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Theme toggle with system preference detection
- **TypeScript**: Type-safe development
- **Radix UI**: Accessible UI components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Fonts**: Jakarta Sans, Montserrat (via next/font)
- **Deployment**: Cloudflare Pages

## Project Structure

```
Portofolio-Frontend
├─ app/                    # Next.js App Router
│  ├─ layout.tsx          # Root layout with metadata
│  ├─ page.tsx            # Homepage
│  ├─ globals.css         # Global styles
│  ├─ robots.ts           # Robots.txt configuration
│  └─ sitemap.ts          # Sitemap generation
├─ components/            # React components
│  ├─ effects/            # Background effects
│  ├─ layout/             # Layout components (Navbar, Footer)
│  └─ ui/                 # UI components (buttons, cards, etc.)
├─ lib/                   # Utility functions
│  ├─ metadata.ts         # Metadata utilities
│  ├─ projectsData.ts     # Project data
│  └─ utils.ts            # General utilities
├─ data/                  # Static data
│  └─ projectsData.ts     # Project data source
├─ public/                # Static assets
│  ├─ icons/              # Technology icons
│  ├─ projects/           # Project screenshots
│  └─ projects1-5/        # Additional project assets
├─ openspec/              # OpenSpec change management
├─ vite-archive/          # Archived Vite project (old)
├─ components.json        # shadcn/ui configuration
├─ next.config.js         # Next.js configuration
├─ tailwind.config.ts     # Tailwind CSS configuration
├─ tsconfig.json          # TypeScript configuration
├─ package.json           # Dependencies
└─ README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build
```

### Start Production Server

```bash
# Start production server
npm start
```

## Deployment

This project is deployed on Cloudflare Pages. To deploy:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy automatically on push to main branch

## SEO Features

- **Dynamic Metadata**: Each page has optimized title, description, and Open Graph tags
- **Structured Data**: JSON-LD schemas for Person, CreativeWork, and SoftwareSourceCode
- **Sitemap**: Automatically generated sitemap.xml
- **Robots.txt**: Configured to allow search engine crawling
- **Performance**: Optimized for Core Web Vitals

## Customization

### Adding Projects

Edit `data/projectsData.ts` to add or modify projects.

### Styling

Modify `tailwind.config.ts` to customize the design system.

### Components

Add new components in the `components/` directory following the existing structure.

## License

This project is open source and available under the MIT License.
