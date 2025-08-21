# Hani El Khalfi - Portfolio Website

A modern, responsive portfolio website showcasing Hani El Khalfi's work as a Full-Stack Developer & Data Scientist.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with smooth animations
- **Responsive**: Optimized for all device sizes
- **Dark Mode**: Automatic theme switching based on user preference
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Accessible**: WCAG compliant with proper focus management
- **Fast**: Built with Next.js 15 and optimized for performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX support for blog posts
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/          # About/CV page
│   │   ├── contact/        # Contact page
│   │   ├── work/           # Projects/Work page
│   │   ├── layout.tsx      # Root layout with navigation
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navigation.tsx  # Header navigation
│       └── Footer.tsx      # Footer component
├── public/
│   ├── images/
│   │   ├── IMG_4054.jpg    # Profile picture
│   │   └── avatar.jpg      # Website icon
│   ├── projects/           # Project screenshots
│   └── resume/
│       └── Hani_El_Khalfi_ang.pdf  # CV download
└── mdx-components.tsx      # MDX styling components
```

## 🎨 Branding

- **Primary Color**: Smoky Black (`#100C08`)
- **Typography**: Geist Sans & Geist Mono
- **Design Philosophy**: Minimal, elegant, professional

## 📄 Content Sections

### Hero Section
- Professional introduction
- Key metrics and achievements
- Tech stack highlights
- Call-to-action buttons

### About Page
- Detailed professional bio
- Skills categorization
- Work experience with quantified results
- Education background
- Language proficiencies
- Downloadable CV

### Work/Projects Page
- Featured project showcases
- GitHub repository links
- Technology stack for each project
- Impact metrics and status
- Detailed feature lists

### Contact Page
- Professional contact information
- Social media links
- Email with copy-to-clipboard functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
```

Upload the `.next` folder and run `npm start` on your server.

## 📝 Customization

### Updating Content
- **Personal Info**: Edit contact details in layout.tsx
- **Projects**: Update the projects array in `src/app/work/page.tsx`
- **Experience**: Modify experience data in `src/app/about/page.tsx`
- **Assets**: Replace images in `public/images/` and `public/projects/`

### Styling
- **Colors**: Update CSS variables in `src/app/globals.css`
- **Typography**: Modify font imports in `layout.tsx`
- **Components**: Customize styling in individual component files

## 📊 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

**Hani El Khalfi**
- Email: elkhalfihani10@gmail.com
- Phone: (+212) 632-448-493
- GitHub: [@heniEl10](https://github.com/heniEl10)
- LinkedIn: [elkhalfihani](https://www.linkedin.com/in/elkhalfihani)

---

Built with ❤️ using Next.js and deployed on Vercel.
