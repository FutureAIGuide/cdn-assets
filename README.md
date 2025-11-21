# CDN Assets Repository

A centralized repository for hosting static assets (CSS, JavaScript, images, fonts) that can be accessed via CDN.

## 📁 Repository Structure

```
cdn-assets/
├── css/          # CSS stylesheets
├── js/           # JavaScript files
├── images/       # Image assets (PNG, JPG, SVG, etc.)
├── fonts/        # Font files (WOFF, WOFF2, TTF, etc.)
└── docs/         # Documentation and guides
```

## 🚀 Usage

### Accessing Assets

Assets in this repository can be accessed via GitHub's CDN using raw.githubusercontent.com:

```
https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/<path-to-asset>
```

#### Examples:

**CSS:**
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/css/style.css">
```

**JavaScript:**
```html
<script src="https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/js/script.js"></script>
```

**Images:**
```html
<img src="https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/images/logo.png" alt="Logo">
```

**In CSS:**
```css
@font-face {
  font-family: 'CustomFont';
  src: url('https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/fonts/custom-font.woff2');
}
```

### Alternative CDN Options

For better performance and caching, consider using these CDN services:

1. **jsDelivr** (Recommended for production):
   ```
   https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/<path-to-asset>
   ```

2. **Statically**:
   ```
   https://cdn.statically.io/gh/FutureAIGuide/cdn-assets/main/<path-to-asset>
   ```

## 📝 Adding New Assets

1. Fork this repository
2. Add your assets to the appropriate directory
3. Commit your changes with a descriptive message
4. Submit a pull request

## 🔖 Versioning

Assets are organized by version when necessary. For versioned assets:
- Use semantic versioning (e.g., v1.0.0, v1.1.0)
- Create version-specific directories when breaking changes occur
- Maintain backward compatibility when possible

## 🛠️ Best Practices

- **Minify** CSS and JavaScript files for production
- **Optimize** images before uploading
- Use **descriptive names** for files
- Include **version numbers** in file names for cache busting (e.g., `style-v1.2.css`)
- Avoid uploading **very large files** (>10MB)

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📮 Support

For issues or questions, please open an issue in this repository.