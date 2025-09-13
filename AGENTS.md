# AGENTS - Project Information

## General Description
This is Juan Otaola's personal website built with **Astro** and **Starlight**, which functions as a personal blog/documentation site. The site is focused on sharing frontend development knowledge, personal opinions, and off-topic content.

## Technology Stack
- **Framework**: Astro 5.13.5
- **UI Framework**: Starlight (documentation)
- **React**: 19.1.0 (for interactive components)
- **Deployment**: Vercel
- **Language**: TypeScript/JavaScript
- **Styles**: Custom CSS + Roboto Slab font
- **Charts**: Recharts for visualizations

## Project Structure

### Content Organization (`/src/content/docs/`)
The folder structure in `/content/docs/` is automatically reflected in `/components/`:

```
src/content/docs/
├── about.mdx                    # About me page
├── frontend/                    # Frontend Handbook
│   ├── introduccion.mdx
│   ├── producto.mdx
│   ├── ingenieria.mdx
│   ├── diseno.mdx
│   ├── arquitectura-hexagonal.mdx
│   ├── ciclo-de-vida-funcionalidad.mdx
│   ├── cultura-equipo.mdx
│   ├── organizacion-procesos.mdx
│   ├── otras-disciplinas.mdx
│   ├── conclusion.mdx
│   └── __assets__/             # Frontend-specific images
├── marcadores/                  # Bookmarks and recommendations
│   ├── libros.mdx
│   └── links.mdx
├── off-topic/                   # Non-technical content
│   ├── dinero.mdx
│   └── sentimientos.mdx
└── opinion/                     # Personal opinions
    ├── index.mdx
    ├── errar.mdx
    ├── redes-sociales.mdx
    └── __assets__/             # Opinion images
```

### Component Organization (`/src/components/`)
Components follow the same structure as content:

```
src/components/
├── frontend/                    # Frontend Handbook components
│   └── tech-pillars.jsx        # React component for the 3 pillars
├── marcadores/                  # Bookmark components
│   ├── BookCard.jsx            # Individual book card
│   ├── BookCard.css            # BookCard styles
│   ├── BooksGallery.jsx        # Books gallery container
│   └── BooksGallery.css        # BooksGallery styles
├── off-topic/                   # Components for off-topic content
│   └── money/                   # Money-specific components
│       ├── AgeCalculator.astro
│       ├── BudgetChart.jsx
│       └── InvestmentChart.jsx
└── ui/                         # Reusable UI components
    └── Image.astro             # Custom image component
```

## Development Patterns

### 1. MDX File Structure
All MDX files follow this pattern:

```mdx
---
title: Page title
description: SEO description
sidebar:
  label: Sidebar label (optional)
  order: Order number (optional)
---

import Component from "@/components/path/component"

Markdown content...
```

### 2. Component Imports
- **Astro Components**: `import Component from "@/components/path/component.astro"`
- **React Components**: `import Component from "@/components/path/component.jsx"`
- **Component Styles**: `import './Component.css'` (alongside component file)
- **Local Images**: `import Image from "./__assets__/image.png"`

### 3. React Components
React components must include `client:load` for hydration:

```jsx
<TechPillars client:load />
```

### 4. Assets by Section
Each section can have its own `__assets__/` folder for specific images:
- `/frontend/__assets__/` - Frontend handbook images
- `/opinion/__assets__/` - Opinion article images

## Sidebar Configuration
The sidebar is configured in `astro.config.mjs`:

```javascript
sidebar: [
  { label: 'About me', slug: "about" },
  { 
    label: 'Frontend Handbook', 
    autogenerate: { directory: 'frontend' },
    collapsed: true 
  },
  { 
    label: 'Off-topic', 
    autogenerate: { directory: 'off-topic' },
    collapsed: true 
  },
  { 
    label: 'Bookmarks', 
    autogenerate: { directory: 'marcadores' },
    collapsed: true 
  },
  "opinion"
]
```

## Naming Conventions

### MDX Files
- **kebab-case**: `arquitectura-hexagonal.mdx`
- **Descriptive**: `ciclo-de-vida-funcionalidad.mdx`
- **Spanish**: All names in Spanish

### Components
- **PascalCase**: `TechPillars.jsx`, `BudgetChart.jsx`
- **Descriptive**: Names that describe the functionality
- **React**: `.jsx` for React components
- **Astro**: `.astro` for Astro components

### Folders
- **kebab-case**: `off-topic`, `tech-pillars`
- **Reflect content structure**: The `/components/` structure should reflect `/content/docs/`

## Styles and Design

### Font
- **Primary**: Roboto Slab (variable font)
- **Configuration**: In `astro.config.mjs` and `package.json`

### Theme Colors
Components use specific colors:
- **Product**: `#FFE4B5` (light orange) / `#FFA500` (orange)
- **Engineering**: `#B3D9FF` (light blue) / `#80BFFF` (blue)
- **Design**: `#D4F1D4` (light green) / `#B4DFB4` (green)

### Custom CSS
- **Global Styles**: `/src/styles/custom.css` - Only for global styles and Starlight customizations
- **Component Styles**: Each component has its own CSS file alongside the component
- **Import Pattern**: `import './Component.css'` in the component file

## Rules for New Development

### 1. Create New Content Section
1. Create folder in `/src/content/docs/new-section/`
2. Create corresponding folder in `/src/components/new-section/`
3. Add entry in sidebar of `astro.config.mjs` if needed
4. Create `__assets__/` if specific images are needed

### 2. Create New Component
1. **Astro**: For static components or server-side logic
2. **React**: For interactive components (charts, forms, etc.)
3. **Location**: Follow the content folder structure
4. **Naming**: PascalCase, descriptive
5. **Styles**: Create a CSS file alongside the component (e.g., `Component.css`)
6. **Import**: Import the CSS file in the component: `import './Component.css'`

### 3. Add MDX Content
1. **Frontmatter**: Include title, description, sidebar if needed
2. **Imports**: Use absolute paths with `@/`
3. **React Components**: Include `client:load`
4. **Assets**: Use relative imports for local images

### 4. Interactive Components
- **Recharts**: For charts and visualizations
- **React Hooks**: For state and interactivity
- **Responsive**: Responsive design by default

## Usage Examples

### Simple React Component
```jsx
// /src/components/new-section/MyComponent.jsx
import React, { useState } from 'react';
import './MyComponent.css';

export default function MyComponent({ prop }) {
  const [state, setState] = useState(prop);
  
  return (
    <div className="my-component">
      {/* Component content */}
    </div>
  );
}
```

```css
/* /src/components/new-section/MyComponent.css */
.my-component {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background: var(--sl-color-gray-7);
}
```

### Usage in MDX
```mdx
---
title: My Page
description: Description of my page
---

import MyComponent from "@/components/new-section/MyComponent.jsx"

# My Page

<MyComponent prop="value" client:load />
```

### Astro Component
```astro
---
// /src/components/new-section/MyComponent.astro
import './MyComponent.css';

export interface Props {
  title: string;
  content?: string;
}

const { title, content } = Astro.props;
---

<div class="my-component">
  <h2>{title}</h2>
  {content && <p>{content}</p>}
</div>
```

```css
/* /src/components/new-section/MyComponent.css */
.my-component {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background: var(--sl-color-gray-7);
}
```

## Deployment
- **Platform**: Vercel
- **Command**: `npm run build`
- **URL**: https://www.juanoa.com
- **Analytics**: Vercel Analytics enabled

## Useful Commands
```bash
npm run dev      # Local development
npm run build    # Production build
npm run preview  # Build preview
```

## Important Notes
1. **Mirror structure**: `/content/docs/` and `/components/` must maintain the same structure
2. **Spanish**: All content is in Spanish
3. **Responsive**: All components must be responsive
4. **Performance**: Use `client:load` only when necessary
5. **SEO**: Include title and description in all MDX files
6. **Accessibility**: Follow good accessibility practices
7. **Component Styles**: Each component should have its own CSS file alongside the component
8. **Global Styles**: Only use `/src/styles/custom.css` for global styles and Starlight customizations
