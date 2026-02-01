# Fonts Directory

This directory contains font files (WOFF, WOFF2, TTF, OTF, etc.).

## Usage

```css
@font-face {
  font-family: 'YourFont';
  src: url('https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/fonts/your-font.woff2') format('woff2'),
       url('https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/fonts/your-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Guidelines

- Prefer WOFF2 format for best compression and browser support
- Include WOFF as fallback
- Use `font-display: swap` for better performance
- Check font licenses before uploading
- Subset fonts when possible to reduce file size
