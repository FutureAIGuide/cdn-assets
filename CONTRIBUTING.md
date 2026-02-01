# Contributing to CDN Assets

Thank you for your interest in contributing to this CDN assets repository! This document provides guidelines for contributing assets.

## How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/cdn-assets.git
   cd cdn-assets
   ```

3. **Create a branch**
   ```bash
   git checkout -b add-new-asset
   ```

4. **Add your assets**
   - Place files in the appropriate directory (css/, js/, images/, fonts/)
   - Follow the naming conventions and guidelines

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of the asset"
   ```

6. **Push to your fork**
   ```bash
   git push origin add-new-asset
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Provide a clear description of what you're adding

## Asset Guidelines

### File Naming
- Use lowercase letters
- Use hyphens (-) to separate words
- Include version numbers when appropriate: `library-v1.2.3.js`
- Be descriptive: `button-primary.css` instead of `btn.css`

### CSS Files
- Minify for production use
- Include source maps if available
- Document browser compatibility
- Avoid `!important` unless absolutely necessary

### JavaScript Files
- Minify for production use
- Include source maps if available
- Use modern JavaScript (ES6+) or provide transpiled versions
- Document dependencies and browser compatibility

### Images
- Optimize before uploading (use tools like TinyPNG, ImageOptim)
- Use appropriate formats:
  - SVG for icons and logos
  - PNG for images requiring transparency
  - JPG for photographs
- Keep file sizes under 1MB when possible
- Provide multiple sizes for responsive designs when appropriate

### Fonts
- Only upload fonts you have the right to distribute
- Include license information
- Prefer WOFF2 format (best compression)
- Include WOFF as fallback
- Subset fonts when possible

## File Size Limits
- Individual files should generally be under 10MB
- Consider splitting large files or hosting them elsewhere
- Optimize and compress all assets before uploading

## Pull Request Requirements
- Clear description of what the asset is and how it's used
- Confirmation that you have the right to distribute the asset
- Any relevant documentation or usage examples

## Code of Conduct
- Be respectful and constructive
- Help others learn and grow
- Focus on what is best for the community

## Questions?
If you have questions, please open an issue for discussion.

Thank you for contributing! 🎉
