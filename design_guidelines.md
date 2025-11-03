# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Design**: Inspired by modern portfolio aesthetics seen in Behance and Dribbble showcases, combined with the clean layouts of Linear and Notion. The design emphasizes clarity, professional polish, and seamless user flow.

## Core Design Principles
- **Professional Minimalism**: Clean, uncluttered layouts that let content breathe
- **Progressive Disclosure**: Information revealed through smooth scrolling with subtle animations
- **Content Hierarchy**: Clear visual distinction between primary and secondary information
- **Accessibility-First**: High contrast ratios, readable typography, proper semantic structure

## Typography System

**Font Selection**:
- Primary: 'Inter' for body text and UI elements (clean, highly legible)
- Display: 'Manrope' or 'Plus Jakarta Sans' for headings (modern, friendly)

**Type Scale**:
- Hero Title: 3.5rem (desktop) / 2.5rem (mobile), Bold (700-800)
- Section Headings: 2.5rem (desktop) / 2rem (mobile), SemiBold (600)
- Subsection Headings: 1.5rem, Medium (500)
- Body Large: 1.125rem for introductions
- Body Text: 1rem, Regular (400)
- Small Text: 0.875rem for metadata/captions

**Line Heights**:
- Headings: 1.2
- Body Text: 1.6
- Lists/Skills: 1.5

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently
- Component padding: p-6 to p-8
- Section spacing: py-16 (mobile) / py-24 (desktop)
- Element gaps: gap-6 to gap-8
- Container max-width: max-w-6xl with px-6 horizontal padding

**Grid Structure**:
- Skills Grid: 2 columns (mobile) / 4 columns (desktop)
- Projects Grid: 1 column (mobile) / 3 columns (desktop) with equal card heights
- Education/Contact: 1 column (mobile) / 2 columns (desktop)

## Component Library

### Navigation
**Sticky Header**: Fixed top navigation with blur backdrop
- Logo/Name: left-aligned, medium font weight
- Nav Links: right-aligned, smooth scroll anchors (Home, About, Skills, Projects, Education, Contact)
- Mobile: Hamburger menu transforming to full-screen overlay
- Height: h-16 to h-20
- Shadow: subtle bottom shadow on scroll

### Hero Section (Home)
**Layout**: Full viewport height (min-h-screen), two-column split (desktop) / stacked (mobile)
- Left Column (60%): Name, title, brief tagline, CTA button ("View Projects" + "Contact Me")
- Right Column (40%): Professional illustration/hero image
- Vertical centering with generous padding
- Background: subtle gradient or geometric pattern overlay

### About Section
**Single Column Layout**: max-w-4xl centered
- Profile image: circular, 150px-200px, positioned top-center or left-aligned with text wrap
- Summary paragraph: body-large size, 1.6 line-height
- Key highlights: 3-4 pill-shaped badges for "CS Student", "UI/UX", "Internship Ready"
- Section padding: py-20

### Skills Section
**Card Grid Layout**:
- Four category cards: "Programming Languages", "Web Development", "Database", "Other Skills"
- Card design: rounded corners (rounded-lg), subtle border, padding p-6
- Each card: Icon at top, category heading, skill list with bullet points or tags
- Skills displayed as inline tags/pills with spacing
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

### Projects Section
**Card Grid with Hover Effects**:
- Three project cards in equal-width grid
- Card structure:
  - Top: Project thumbnail/icon placeholder (aspect-ratio-16/9)
  - Title: h3, semibold
  - Description: 2-3 lines, truncated if needed
  - Tech stack: small tags/pills below description
  - Optional link/button: "View Details"
- Card padding: p-6
- Rounded corners: rounded-xl
- Hover: subtle lift (translate-y-1) and shadow increase

### Education Section
**Two-Column Layout** (desktop) / Stacked (mobile):
- Left: Institution details card with degree, dates, location
- Right: Three stacked mini-sections:
  - Languages: pill tags
  - Soft Skills: bullet list or icon grid
  - Interests: icon + text combinations
- Consistent card styling with other sections

### Contact Section
**Split Layout**:
- Left Column (60%): Contact form
  - Fields: Name, Email, Subject, Message (textarea)
  - Input styling: border, rounded, padding p-3, focus states
  - Submit button: prominent, full-width on mobile
- Right Column (40%): Contact information card
  - Email, Phone, Location with icons
  - Social links: LinkedIn, GitHub as icon buttons
  - Spacing: gap-6 between contact items

**Form Design**:
- Label above input, small font, medium weight
- Input height: h-12 for text fields
- Textarea: min-h-32
- Consistent border-radius and padding across all inputs
- Clear focus states

### Footer
**Simple centered layout**:
- Copyright text
- Quick links to sections
- Social icons repeated
- Padding: py-8
- Border-top separator

## Animation Guidelines

**Scroll Animations**: Use sparingly with Intersection Observer
- Fade-in + slight upward motion (translate-y-4 to translate-y-0)
- Stagger delay for card grids (100ms increments)
- Duration: 400-600ms with ease-out timing

**Interaction Animations**:
- Button hover: subtle scale (1.02) + shadow increase
- Card hover: translate-y-1 + shadow enhancement
- Link hover: underline slide-in effect
- Smooth scrolling: scroll-behavior smooth

**Navigation**: Smooth scroll to sections with offset for fixed header

## Responsive Breakpoints
- Mobile: base (0-640px) - single column, stacked layouts
- Tablet: md (768px) - begin 2-column layouts
- Desktop: lg (1024px) - full multi-column grids
- Large Desktop: xl (1280px) - max container width

## Images

**Hero Image**: 
- Professional illustration or geometric abstract visual representing software development/UI-UX
- Position: Right side of hero section on desktop, above content on mobile
- Style: Modern, clean, possibly isometric or flat design illustration
- Size: Fills 40% width on desktop, full-width on mobile
- Format: SVG preferred for sharpness, or high-resolution PNG/WebP

**Project Thumbnails**: 
- Placeholder images or mockup screenshots for each project
- Aspect ratio: 16:9
- Rounded corners to match card style
- Can use subtle gradient backgrounds if no actual screenshots available

**Optional Profile Photo**:
- Circular crop in About section
- Professional headshot or avatar
- Size: 150-200px diameter

## Accessibility Requirements
- ARIA labels for navigation and form elements
- Keyboard navigation support for all interactive elements
- Focus indicators on all focusable elements (ring-2 style)
- Sufficient color contrast maintained throughout
- Alt text for all images
- Semantic HTML structure (header, nav, main, section, footer)

## Content Density
- Generous whitespace between sections (py-20 to py-24)
- Balanced content within sections - not too sparse, not overwhelming
- Clear visual hierarchy guides eye through content
- Each section feels complete and purposeful