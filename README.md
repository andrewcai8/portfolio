# Portfolio Framework

A clean, minimal portfolio website framework inspired by modern design principles.

## Features

- **Clean, minimal design** with modern typography (Inter font)
- **Responsive layout** that works on all devices
- **Sidebar navigation** with smooth transitions
- **Modular content system** for easy customization
- **ASCII art area** for visual interest
- **Fixed footer** with location and social links
- **Smooth animations** and hover effects

## Structure

```
portfolio-1/
├── src/
│   ├── main.js       # Main application logic and content
│   └── style.css     # All styles and responsive design
├── index.html        # HTML structure with fonts
└── package.json      # Project dependencies
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

## Customization

### Content
Edit the `content` object in `src/main.js` to update:
- Navigation sections (About, Investing, Press)
- Text content for each section
- Highlighted terms and links

### Styling
Key variables in `src/style.css`:
- **Accent color**: `#002FA7` (used for highlights)
- **Typography**: Inter font family
- **Layout**: Flexbox-based responsive design
- **Spacing**: Consistent 40px/60px grid system

### ASCII Art
Replace the `asciiArt` variable in `src/main.js` with your own design.

### Footer
Update location and social links in the `renderFooter()` function.

### Navigation
Add new sections by:
1. Adding entries to the `content` object
2. The navigation will automatically update

## Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Colors

- **Primary text**: `#333`
- **Secondary text**: `#666`
- **Accent/Links**: `#002FA7`
- **Background**: `#fff`
- **ASCII art**: `#ccc`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory. 