# Getting Started with CDN Assets

This guide will help you start using assets from this CDN repository.

## Quick Start

### 1. Using CSS Files

Add the following to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/css/example.css">
```

### 2. Using JavaScript Files

Add the following before your closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/js/example.js"></script>
```

### 3. Using Images

```html
<img src="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/images/your-image.png" alt="Description">
```

## CDN Providers

### jsDelivr (Recommended)
- Fast global CDN
- Automatic minification
- Version support
- Format: `https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/path/to/file`

### Raw GitHub
- Direct from GitHub
- No caching optimization
- Format: `https://raw.githubusercontent.com/FutureAIGuide/cdn-assets/main/path/to/file`

### Statically
- Free CDN service
- Good performance
- Format: `https://cdn.statically.io/gh/FutureAIGuide/cdn-assets/main/path/to/file`

## Versioning

You can target specific versions or branches:

```html
<!-- Latest from main branch -->
<script src="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@main/js/script.js"></script>

<!-- Specific tag/version -->
<script src="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@v1.0.0/js/script.js"></script>

<!-- Specific commit -->
<script src="https://cdn.jsdelivr.net/gh/FutureAIGuide/cdn-assets@abc1234/js/script.js"></script>
```

## Best Practices

1. **Use version tags** for production to ensure stability
2. **Test thoroughly** before deploying
3. **Monitor performance** using browser dev tools
4. **Have fallbacks** for critical assets
5. **Use SRI** (Subresource Integrity) for security when possible

## Examples

Check the `/css/example.css` and `/js/example.js` files for sample code.

## Need Help?

- Open an [issue](https://github.com/FutureAIGuide/cdn-assets/issues)
- Check existing documentation
- Review contribution guidelines
