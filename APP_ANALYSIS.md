# Complete App Analysis: Nanci Ferreira (Dita) Website

## 🎯 Project Overview

**Project Name:** Dita Website  
**Purpose:** Static portfolio/tribute website for Nanci Ferreira (known as "Dita")  
**Type:** Next.js 15 static export website  
**Deployment Target:** GitHub Pages  
**Language:** Portuguese (pt-BR)

---

## 👤 Subject Profile

**Nanci Ferreira ("Dita")**
- **Age:** 73 years old
- **Location:** Cascata, Águas da Prata, São Paulo, Brazil
- **Role:** Cultural leader, environmental activist, artisan, storyteller
- **Expertise:** Traditional crafts, medicinal herbs, cultural preservation
- **Legacy:** Integrating art, sustainability, and ancestral wisdom in the Atlantic Forest region

---

## 🏗️ Technical Architecture

### Tech Stack
- **Framework:** Next.js 15.4.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.7.3
- **Styling:** Tailwind CSS 3.4.3 + Custom CSS
- **Animations:** Motion (Framer Motion) 12.23.22
- **UI Components:** Radix UI primitives
- **Fonts:** Geist Sans & Geist Mono
- **Build:** Static export for GitHub Pages

### Key Configuration
```javascript
// next.config.js
- output: 'export' (static site generation)
- basePath: '/dita-website'
- assetPrefix: '/dita-website'
- images: { unoptimized: true }
- trailingSlash: true
```

---

## 📁 Project Structure

```
dita-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Main homepage (882 lines)
│   │   └── globals.css         # Global styles & animations
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky header navigation
│   │   ├── DomeGallery.tsx     # 3D dome photo gallery (1000+ lines)
│   │   ├── SplashCursor.tsx    # WebGL fluid simulation cursor
│   │   ├── Waves.tsx           # Interactive wave background
│   │   ├── RotatingText.tsx    # Animated text rotation
│   │   └── Logo/               # Logo components
│   ├── data/
│   │   └── nanci-data.ts       # All content data (structured)
│   └── lib/
│       └── utils.ts            # Utility functions (cn, getImagePath)
├── public/
│   ├── dita (1-135).jpg/png    # 135+ gallery images
│   ├── dita_logo.png           # Logo
│   ├── dita-photo.jpg          # Featured photos
│   ├── nanci-dita-full.jpg
│   ├── noise.png               # Texture overlays
│   └── particles.png
└── Configuration files
```

---

## 🎨 Design System

### Color Palette (AMOLED-Optimized)
- **Primary:** Green (#10b981, #059669) - Represents nature/sustainability
- **Background:** Pure black (#000000) - AMOLED optimization
- **Accent:** Green gradients with glow effects
- **Text:** White with varying opacity (100%, 90%, 80%, 70%)

### Typography
- **Headings:** Fluid responsive sizing (clamp-based)
- **Body:** Geist Sans (variable font)
- **Monospace:** Geist Mono
- **Scale:** text-fluid-xs to text-fluid-6xl

### Visual Effects
1. **Glass Morphism:** Backdrop blur with subtle borders
2. **Glow Effects:** Green luminous borders and shadows
3. **Animations:** Fade-in, slide-up, float, shimmer, breathe
4. **Noise Texture:** Subtle grain overlay for depth
5. **Vignette:** Radial gradient darkening edges

---

## 📄 Page Sections

### 1. Hero Section
- Full-screen introduction
- Circular profile image with rotating gradient border
- Floating badges (age, location, role)
- Background: dita-photo.jpg with opacity overlay
- CTA button to "Conheça seu trabalho"

### 2. Bio Section
- Extended biography text
- Inspirational quote in styled blockquote
- Background: dita-photo.jpg
- Interactive Waves component overlay

### 3. About/Expertise Section
- 3 expertise cards:
  - Traditional Crafts (Artesanato)
  - Storytelling (Contadora de Histórias)
  - Medicinal Herbs (Ervas Medicinais)
- Background: dita-maracatu.jpg

### 4. Gallery Preview
- 4-image grid with hover effects
- Images: nanci-dita-close, nanci2, dita+friend-square, dita-photo

### 5. Projects Section
- 3 main projects with detailed cards:
  - Bio-jewelry Workshops
  - Natural Musical Instruments
  - Kintal da Dita (Cultural Space)
- Methodology principles grid

### 6. Stats Section
- Impact numbers: 73+ years, 4 organizations, 3 expertise areas

### 7. Organizations Section
- 4 organizations with role descriptions:
  - Associação Sócio Cultural da Estação da Cascata
  - Comunidade de Artistas Locais
  - SOS - Águas da Prata
  - Guardiões da Terra Cascata

### 8. Tourism Section
- Prata Expedições partnership
- External link to prataexpedicoes.com.br

### 9. Impact & Legacy Section
- 3 impact cards: Local, Model, Legacy

### 10. Events Section
- Special events (Virada Climática 1 & 2)
- Regular participation list

### 11. Dome Gallery Section
- Interactive 3D photo gallery
- 135+ images in dome formation
- Drag to rotate, click to enlarge
- Grayscale with color on focus

### 12. ODS Section (NEW) ✨
- **10 UN Sustainable Development Goals** aligned with Nanci's work
- Color-coded cards with official UN SDG colors
- Interactive hover effects with scale animation
- Detailed descriptions of how Nanci contributes to each goal
- Bottom info card about Agenda 2030 commitment
- Goals covered: 3, 4, 5, 8, 10, 11, 12, 13, 15, 17

### 13. Call to Action
- Inspirational message
- Dual CTA buttons
- Featured quote

### 14. Footer
- Navigation links (including new ODS link)
- Contact information
- Copyright notice

---

## 🎭 Interactive Components

### 1. Navigation Component
- Sticky header with scroll detection
- Logo + brand name
- Desktop: Horizontal menu
- Mobile: Hamburger menu
- Smooth scroll to sections

### 2. DomeGallery Component
**Most Complex Component (1000+ lines)**
- WebGL-based 3D dome visualization
- 35 segments × multiple rows = 175+ tile positions
- Features:
  - Drag to rotate (mouse/touch)
  - Inertia physics
  - Click to enlarge images
  - Smooth transitions
  - Responsive sizing
  - Grayscale filter with color on focus
  - Scroll lock when active
- Uses @use-gesture/react for interactions

### 3. SplashCursor Component
**WebGL Fluid Simulation**
- Real-time fluid dynamics
- Follows cursor movement
- Creates colorful splashes
- Configurable parameters:
  - Density/velocity dissipation
  - Pressure, curl, splat force
  - Color update speed
- Transparent background overlay

### 4. Waves Component
**Interactive Background**
- Perlin noise-based wave generation
- Responds to cursor movement
- Configurable:
  - Wave speed (X/Y)
  - Wave amplitude
  - Friction, tension
  - Grid spacing
- Canvas-based rendering

### 5. RotatingText Component
- Animated text rotation
- Character-by-character stagger
- Configurable timing and effects
- (Not currently used in main page)

---

## 📊 Data Structure

### nanci-data.ts Schema
```typescript
{
  personal: {
    name, nickname, age, location, father,
    description, bio, extendedBio, quote
  },
  expertise: [
    { title, description }
  ],
  organizations: [
    { name, role, description }
  ],
  projects: [
    { title, category, description, impact, details }
  ],
  specialEvents: [
    { title, description, type }
  ],
  methodology: {
    title, description,
    principles: []
  },
  tourism: {
    company, role, approach
  },
  events: [],
  impact: {
    local, model, legacy
  },
  challenges: {
    continuity, expansion
  }
}
```

---

## 🎨 Custom CSS Features

### Animations
- `fadeIn` - Opacity + translateY + blur
- `floatAnimation` - Vertical oscillation
- `pulseGlow` - Box shadow pulsing
- `rotateGradient` - Background position shift
- `shimmer` - Gradient sweep
- `breathe` - Scale pulsing
- `slideInFromBottom/Left/Right` - Directional entry
- `glowPulse` - Drop shadow animation

### Utility Classes
- `.glass` - Glassmorphism effect
- `.glass-light` - Lighter glass variant
- `.amoled-card` - Dark card with glow
- `.circular-image` - Circular frame with gradient border
- `.text-gradient` - Animated gradient text
- `.border-glow` - Glowing border effect
- `.image-glow` - Image with glow halo
- `.text-fluid-*` - Responsive typography

### Animation Delays
- `.animate-delay-100` through `.animate-delay-800`
- Staggered entrance effects

---

## 🖼️ Image Assets

### Featured Images (8)
1. `nanci-dita-full.jpg` - Full portrait
2. `nanci-dita-close.jpg` - Close-up portrait
3. `dita-photo.jpg` - Artisan photo
4. `dita-maracatu.jpg` - Cultural event
5. `dita+friend-square.jpg` - Community photo
6. `dita3.jpg` - Cultural moment
7. `nanci2.jpg` - Portrait
8. `dita-nobackground.png` - Transparent PNG for hero

### Gallery Images (135+)
- `dita (1).jpg` through `dita (135).jpg`
- Multiple formats: JPG, PNG, HEIC, WEBP
- Various aspect ratios and compositions

### Utility Images
- `dita_logo.png` - Logo
- `noise.png` - Texture overlay
- `particles.png` - Particle effect
- `favicon.ico` / `favicon.svg` - Site icons

---

## 🚀 Performance Optimizations

1. **Static Export:** Pre-rendered HTML for fast loading
2. **Image Optimization:** Unoptimized for static hosting
3. **AMOLED Design:** Pure black saves battery on OLED screens
4. **Lazy Loading:** Components load as needed
5. **CSS Animations:** Hardware-accelerated transforms
6. **WebGL:** GPU-accelerated graphics
7. **Responsive Images:** Fluid sizing with clamp()

---

## 📱 Responsive Design

### Breakpoints
- **sm:** 40rem (640px)
- **md:** 48rem (768px)
- **lg:** 64rem (1024px)
- **xl:** 80rem (1280px)
- **2xl:** 86rem (1376px)

### Mobile Adaptations
- Hamburger menu navigation
- Stacked layouts
- Touch-optimized interactions
- Reduced animation complexity
- Fluid typography scaling

---

## 🌐 Deployment Configuration

### GitHub Pages Setup
- Repository: `/dita-website`
- Base path configured in next.config.js
- Asset prefix for correct resource loading
- Trailing slashes for proper routing
- Static HTML export

### Build Commands
```bash
pnpm build    # Creates static export in /out
pnpm dev      # Development server
pnpm start    # Production server (not used for static)
pnpm lint     # ESLint check
```

---

## 🎯 Key Features Summary

### Visual Excellence
✅ AMOLED-optimized dark theme  
✅ Smooth animations and transitions  
✅ Glass morphism design language  
✅ Responsive fluid typography  
✅ Interactive background effects  

### Content Rich
✅ Comprehensive biography  
✅ Detailed project descriptions  
✅ Organization affiliations  
✅ Impact metrics  
✅ Event participation history  

### Interactive Elements
✅ 3D photo gallery dome  
✅ WebGL fluid cursor  
✅ Wave background interaction  
✅ Smooth scroll navigation  
✅ Hover effects throughout  

### Technical Quality
✅ TypeScript for type safety  
✅ Modern React 19 features  
✅ Accessible markup  
✅ SEO-optimized metadata  
✅ Performance-focused  

---

## 🔧 Dependencies Breakdown

### Core
- `next` 15.4.4 - Framework
- `react` 19.1.0 - UI library
- `typescript` 5.7.3 - Type safety

### Styling
- `tailwindcss` 3.4.3 - Utility CSS
- `tailwindcss-animate` - Animation utilities
- `@tailwindcss/typography` - Typography plugin
- `autoprefixer` - CSS compatibility
- `postcss` - CSS processing

### UI Components
- `@radix-ui/react-*` - Accessible primitives
- `lucide-react` - Icon library
- `motion` (framer-motion) - Animations

### Interactions
- `@use-gesture/react` - Gesture handling
- `clsx` + `tailwind-merge` - Class management

### Fonts
- `geist` - Typography system

### Development
- `@playwright/test` - E2E testing
- `vitest` - Unit testing
- `eslint` - Code linting
- `prettier` - Code formatting

---

## 📈 Content Statistics

- **Total Sections:** 13 major sections
- **Projects:** 3 detailed projects
- **Organizations:** 4 affiliations
- **Expertise Areas:** 3 specializations
- **Gallery Images:** 135+ photos
- **Events:** 8+ regular events
- **Special Events:** 2 major events
- **Lines of Code:** ~3000+ (estimated)

---

## 🎨 Design Philosophy

### Themes
1. **Nature & Sustainability** - Green color palette
2. **Ancestral Wisdom** - Traditional design elements
3. **Modern Technology** - WebGL and advanced interactions
4. **Community Focus** - Emphasis on collaboration
5. **Cultural Preservation** - Storytelling and heritage

### User Experience
- **Immersive:** Full-screen sections with rich media
- **Engaging:** Interactive elements throughout
- **Informative:** Comprehensive content structure
- **Accessible:** Semantic HTML and ARIA labels
- **Performant:** Optimized for fast loading

---

## 🔮 Future Enhancement Opportunities

1. **Multilingual Support** - English translation
2. **Blog Section** - Regular updates and stories
3. **Video Gallery** - Multimedia content
4. **Contact Form** - Direct communication
5. **Event Calendar** - Upcoming activities
6. **Shop Integration** - Bio-jewelry sales
7. **Newsletter Signup** - Community engagement
8. **Social Media Integration** - Share buttons
9. **Testimonials** - Community feedback
10. **Search Functionality** - Content discovery

---

## 📝 Conclusion

This is a **highly polished, production-ready website** that beautifully showcases Nanci Ferreira's life work. It combines:

- **Modern web technologies** (Next.js 15, React 19, TypeScript)
- **Stunning visual design** (AMOLED theme, glass morphism, animations)
- **Advanced interactions** (3D gallery, WebGL effects, gesture controls)
- **Rich content** (comprehensive biography, projects, impact)
- **Cultural sensitivity** (Portuguese language, local context)
- **Performance optimization** (static export, efficient rendering)

The website serves as both a **tribute** and a **portfolio**, effectively communicating Dita's legacy of integrating art, sustainability, and ancestral wisdom in the Atlantic Forest region of Brazil.

---

## 🌍 ODS Integration (NEW FEATURE)

### Overview
A new section has been added to showcase how Nanci Ferreira's work aligns with the United Nations Sustainable Development Goals (SDGs). This section demonstrates the global impact of local actions.

### Data Structure
```typescript
ods: {
  title: string
  description: string
  objectives: [
    {
      number: number (1-17)
      title: string
      description: string
      color: string (official UN SDG color)
    }
  ]
}
```

### 10 SDGs Represented

1. **SDG 3 - Good Health and Well-Being** (#4C9F38)
   - Medicinal herbs knowledge
   - Traditional medicine practices

2. **SDG 4 - Quality Education** (#C5192D)
   - Educational workshops
   - Ancestral knowledge preservation

3. **SDG 5 - Gender Equality** (#FF3A21)
   - Female leadership in traditionally male spaces
   - Women's empowerment through bio-jewelry

4. **SDG 8 - Decent Work and Economic Growth** (#A21942)
   - Sustainable income generation
   - Community tourism

5. **SDG 10 - Reduced Inequalities** (#DD1367)
   - Rural community representation
   - Voice in public policies

6. **SDG 11 - Sustainable Cities and Communities** (#FD9D24)
   - Kintal da Dita cultural space
   - Community strengthening

7. **SDG 12 - Responsible Consumption and Production** (#BF8B2E)
   - Natural materials crafts
   - Sustainable alternatives

8. **SDG 13 - Climate Action** (#3F7E44)
   - Virada Climática events
   - Earth Guardians activism

9. **SDG 15 - Life on Land** (#56C02B)
   - Atlantic Forest biodiversity protection
   - Native tree planting

10. **SDG 17 - Partnerships for the Goals** (#19486A)
    - Local, national, and international networks
    - Multi-stakeholder collaboration

### Visual Design
- **Color System:** Official UN SDG colors for authenticity
- **Card Layout:** 3-column responsive grid
- **Hover Effects:** Scale animation + glow effect
- **Number Badges:** Prominent SDG numbers with colored backgrounds
- **Bottom Card:** Commitment statement about Agenda 2030

### User Experience
- Smooth animations with staggered delays
- Interactive hover states
- Clear visual hierarchy
- Accessible color contrasts
- Mobile-responsive layout

### Impact
This section:
- Connects local actions to global goals
- Demonstrates comprehensive impact
- Educates visitors about SDGs
- Validates Nanci's work with international framework
- Inspires others to align with SDGs

---

**Analysis Date:** October 22, 2025  
**Analyzed By:** Kiro AI Assistant  
**Project Status:** Production-Ready ✅  
**Latest Update:** ODS Section Added 🌍
