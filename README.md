# ByteSpace New

ByteSpace New is a responsive online-learning website recreated from a supplied Figma design as a front-end assessment project.

The implementation focuses on close visual reproduction, reusable React components, responsive behaviour, accessibility, performance, and maintainable project structure.

## Project Status

The interface includes the complete landing page together with bonus Sign In, Signup, and custom 404 pages.

Production deployment is completed in the final deployment step.

## Design

Figma design:

https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0

Style guide:

https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=63-645&p=f&t=AudTe7PMzXRWSUom-0

## Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Next.js Image optimization
- Next.js font optimization
- Satoshi Variable
- Poppins
- Vercel for production deployment

## Features

- Responsive ByteSpace landing page
- Hero section with course search interface
- Featured course discovery
- Data-driven reusable course cards
- Course category filters
- Learning-path categories
- Professional-growth section
- Creator promotion section
- Creator call-to-action
- Community testimonials
- Responsive navigation
- Mobile navigation menu
- Newsletter footer
- Sign In interface
- Signup interface
- Custom 404 interface
- Shared design tokens
- Reusable UI components
- Scroll-reveal animations
- Reduced-motion support
- Keyboard-accessible controls
- Optimized local image assets

## Routes

| Route | Description |
| --- | --- |
| `/` | ByteSpace landing page |
| `/signin` | Sign In interface |
| `/signup` | Signup interface |
| Invalid route | Custom ByteSpace 404 page |

## Project Structure

```text
jt-bytespace-new/
├── app/
│   ├── signin/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── template.tsx
│
├── components/
│   ├── animations/
│   ├── auth/
│   ├── layout/
│   └── ui/
│
├── data/
│   ├── categories.ts
│   ├── courses.ts
│   └── testimonials.ts
│
├── docs/
│   └── screenshots/
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── fonts/
│   └── images/
│
├── sections/
│   └── home/
│
├── styles/
│   ├── fonts.ts
│   └── tokens.ts
│
└── package.json