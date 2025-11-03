# Architecture Firm Website

A modern, professional website for an architecture firm built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist aesthetic perfect for showcasing architectural work
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Video Support**: Native video player for project showcases and rendered videos
- **Project Filtering**: Interactive project gallery with category filtering
- **Contact Form**: Professional contact form (email integration to be added)
- **SEO Friendly**: Optimized metadata and structure for search engines

## Pages

- **Home**: Hero section with featured projects and testimonials preview
- **About**: Company history, mission, and design philosophy
- **Projects**: Filterable project gallery with video support
- **Services**: Comprehensive list of architectural services
- **Team**: Team member profiles and credentials
- **Testimonials**: Client testimonials and success stories
- **Contact**: Contact form and business information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Video**: Native HTML5 video player

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── testimonials/      # Testimonials page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ContactForm.tsx    # Contact form component
│   ├── FeaturedProjects.tsx
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation bar
│   ├── ProjectCard.tsx    # Project card component
│   ├── TestimonialsPreview.tsx
│   └── VideoPlayer.tsx    # Video player component
├── lib/                   # Utility functions and data
│   ├── data.ts           # Sample data
│   └── types.ts          # TypeScript types
└── public/               # Static assets
    ├── images/           # Image files
    ├── logos/            # Logo files
    └── videos/           # Video files
```

## Customization

### Adding Content

1. **Update Company Information**: 
   - Edit `lib/data.ts` to update projects, team members, testimonials, and services
   - Update contact information in `app/contact/page.tsx` and `components/Footer.tsx`

2. **Add Logo**:
   - Place your logo in `public/logos/`
   - Update `components/Navbar.tsx` to reference your logo

3. **Add Projects**:
   - Add project data to `lib/data.ts`
   - Place project images in `public/images/projects/`
   - Place project videos in `public/videos/`

4. **Customize Styling**:
   - Edit `tailwind.config.ts` for custom colors and themes
   - Modify `app/globals.css` for global styles

### Email Integration (Phase 2)

To enable email sending from the contact form:

1. Choose an email service (Resend, SendGrid, or EmailJS)
2. Sign up and get API keys
3. Create an API route in `app/api/contact/route.ts`
4. Update `components/ContactForm.tsx` to call the API

Example with Resend:
```bash
npm install resend
```

Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  // Implement email sending logic
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Other Hosting Options

- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## Future Enhancements

- Blog system with CMS integration
- Email functionality for contact form
- Google Maps integration
- Image gallery with lightbox
- Admin dashboard for content management
- Multi-language support
- Dark mode toggle

## Support

For questions or support, contact: [your-email@example.com]

## License

Private - All rights reserved

