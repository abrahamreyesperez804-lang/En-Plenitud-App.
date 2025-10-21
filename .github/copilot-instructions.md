# GitHub Copilot Instructions for En-Plenitud-App

## Project Overview
This is a static single-page application (SPA) for "Centro de Rehabilitación — En Plenitud", a rehabilitation center focused on addiction treatment. The website provides information about services, programs, team, gallery, testimonials, and contact information.

## Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **No Build System**: Pure client-side code, no dependencies or bundlers
- **Target Browsers**: Modern browsers with ES6+ support
- **Hosting**: GitHub Pages compatible

## Project Structure
```
/
├── index.html              # Main HTML file with 7 tab sections
├── styles.css             # All styles with CSS custom properties
├── js_app_Version3.js     # Main JavaScript logic
└── README.md              # Project documentation
```

**Note**: The HTML file references `css/styles.css` and `js/app.js`, but the actual files are currently at the root level as `styles.css` and `js_app_Version3.js`. This means the website won't work correctly until the file structure is reorganized or the HTML paths are updated to match the actual file locations.

## Code Style & Conventions

### HTML
- Use semantic HTML5 elements
- Include ARIA attributes for accessibility (aria-label, aria-expanded, role, etc.)
- Use Spanish language (`lang="es"`) for all content
- Follow the existing tab-based navigation pattern with data-tab attributes
- Maintain mobile-responsive meta viewport settings

### CSS
- Use CSS custom properties (variables) defined in `:root`
- Follow the existing color scheme:
  - Primary: `#1e88e5` (blue)
  - Accent: `#2e7d32` (green)
  - Background: `#f6f7fb`
  - Card: `#ffffff`
- Use `rem` units for spacing and `px` for borders
- Mobile-first responsive design with breakpoint at 800px
- Keep selectors simple and maintainable

### JavaScript
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Wait for DOM to load with `DOMContentLoaded`
- Use event delegation where appropriate
- Follow existing patterns for:
  - Tab navigation with hash-based routing
  - Mobile menu toggle with ARIA attributes
  - Lightbox gallery interactions
  - Form validation and submission

## Accessibility Guidelines
- All interactive elements must be keyboard accessible
- Include appropriate ARIA attributes for screen readers
- Maintain focus management (especially in tab navigation and lightbox)
- Use semantic HTML for better accessibility
- Ensure color contrast meets WCAG standards

## Key Features to Maintain
1. **Tab Navigation**: Hash-based routing with 7 sections
2. **Mobile Menu**: Hamburger menu for responsive navigation
3. **Gallery Lightbox**: Click/keyboard accessible photo viewer
4. **Contact Form**: Client-side validation with user feedback
5. **Responsive Design**: Works on mobile, tablet, and desktop

## Development Guidelines

### When Adding New Features
- Keep the vanilla JavaScript approach (no frameworks)
- Maintain the single-file structure for simplicity
- Test on mobile devices or use responsive design tools
- Ensure keyboard accessibility
- Use Spanish for all user-facing text

### When Modifying Existing Code
- Preserve the existing tab navigation system
- Keep CSS custom properties for easy theming
- Maintain ARIA attributes and accessibility features
- Test mobile menu functionality
- Verify form validation still works

### Testing Approach
- Manual testing in browser (no automated tests currently)
- Test on Chrome, Firefox, Safari
- Test responsive breakpoints
- Test keyboard navigation (Tab, Enter, Escape keys)
- Test with screen reader if possible

## File Naming Convention
- Current files follow a descriptive naming pattern
- JavaScript file has version suffix (Version3)
- Keep file names descriptive and in English

## Deployment
- Static files are served directly
- Can be deployed to GitHub Pages
- No build process required
- Works by opening index.html directly in a browser

## Content Language
- All user-facing content is in Spanish
- Comments and code can be in English or Spanish
- Maintain consistent Spanish terminology for rehabilitation services

## Future Considerations
- Consider organizing CSS and JS into subdirectories (css/, js/)
- May want to add actual form backend integration (currently simulated)
- Consider replacing gallery placeholder divs with actual images
- May add more sections or expand existing ones

## Common Tasks

### Adding a New Tab Section
1. Add navigation link in header with `data-tab` attribute
2. Create new section with class "tab" and appropriate ARIA attributes
3. Add corresponding click handler (existing code handles this automatically)
4. Update the `activateTab` function if needed

### Styling Changes
1. Modify CSS custom properties in `:root` for theme changes
2. Add new styles following the existing naming convention
3. Test responsive behavior at 800px breakpoint

### Form Modifications
1. Add new fields with proper labels and ARIA attributes
2. Update validation logic in the submit event handler
3. Maintain the status message feedback pattern

## Known Issues
- **File Path Mismatch**: The HTML file expects CSS and JS in subdirectories (`css/styles.css`, `js/app.js`) but files are currently in root (`styles.css`, `js_app_Version3.js`)
- **JavaScript Filename**: The actual JS file is named `js_app_Version3.js` but HTML references `js/app.js`

When fixing these issues, prefer organizing files into subdirectories as the HTML expects rather than changing the HTML paths.

## Notes for AI Assistants
- Prefer simple, readable code over clever solutions
- Maintain the existing architecture (single-page, no frameworks)
- Always consider mobile users and accessibility
- Keep Spanish content authentic and professional
- When in doubt, follow existing patterns in the codebase
