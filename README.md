<div align="center">

<pre>
       d8888  .d8888b.   .d8888b. 8888888 8888888        88888888888                888    
      d88888 d88P  Y88b d88P  Y88b  888     888              888                    888    
     d88P888 Y88b.      888    888  888     888              888                    888    
    d88P 888  "Y888b.   888         888     888              888   .d88b.  888  888 888888 
   d88P  888     "Y88b. 888         888     888              888  d8P  Y8b `Y8bd8P' 888    
  d88P   888       "888 888    888  888     888              888  88888888   X88K   888    
 d8888888888 Y88b  d88P Y88b  d88P  888     888              888  Y8b.     .d8""8b. Y88b.  
d88P     888  "Y8888P"   "Y8888P" 8888888 8888888            888   "Y8888  888  888  "Y888 
                                                                                         
 .d8888b.                                             888                                
d88P  Y88b                                            888                                
888    888                                            888                                
888         .d88b.  88888b.   .d88b.  888d888 8888b.  888888 .d88b.  888d888             
888  88888 d8P  Y8b 888 "88b d8P  Y8b 888P"      "88b 888   d88""88b 888P"               
888    888 88888888 888  888 88888888 888    .d888888 888   888  888 888                 
Y88b  d88P Y8b.     888  888 Y8b.     888    888  888 Y88b. Y88..88P 888                 
 "Y8888P88  "Y8888  888  888  "Y8888  888    "Y888888  "Y888 "Y88P"  888                 
</pre>

A modern, feature-rich web-based ASCII art generator with GitHub-inspired styling, supporting 70+ fonts and multiple language interfaces.

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue?style=for-the-badge)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/readme-SVG/ascii-text-generator/lint.yml?style=for-the-badge)](https://github.com/readme-SVG/ascii-text-generator/actions)
[![GitHub Stars](https://img.shields.io/github/stars/readme-SVG/ascii-text-generator?style=for-the-badge)](https://github.com/readme-SVG/ascii-text-generator)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Fonts](https://img.shields.io/badge/Fonts-70+-brightgreen?style=for-the-badge)](#features)
[![Languages](https://img.shields.io/badge/Languages-14-blue?style=for-the-badge)](#multilingual-support)
[![Zero Dependencies](https://img.shields.io/badge/Zero-Dependencies-green?style=for-the-badge)](#tech-stack--architecture)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![WCAG Accessible](https://img.shields.io/badge/WCAG-Accessible-green?style=for-the-badge)](#getting-started)

</div>

## Table of Contents

- [Features](#features)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Support the Project](#support-the-project)

## Features

- **Extensive Font Library**: Access to 70+ professional ASCII fonts including ANSI Shadow, Doom, Block, Slant, and many more
- **Real-Time Preview**: Instant ASCII art generation with live preview as you type
- **Multiple Alignment Options**: Support for left, center, and right text alignment
- **Markdown-Ready Output**: Generated ASCII art automatically wrapped in GitHub-compatible markdown format with `<pre>` and `<div>` tags
- **Copy-to-Clipboard**: One-click code copying with visual feedback
- **Multilingual Support**: Full internationalization (i18n) with support for 11+ languages including English, Russian, Spanish, French, German, Japanese, Chinese, Polish, Czech, Swedish, Dutch, Portuguese, and Ukrainian
- **GitHub-Styled Interface**: Modern, professional UI matching GitHub's design patterns and accessibility standards
- **Live Font Loading**: On-demand font loading from CDN (jsDelivr) to minimize initial load time
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessible**: Full ARIA support and semantic HTML for screen reader compatibility
- **Zero Dependencies**: Minimal footprint—only Figlet.js library required for font rendering
- **Tab-Based Output**: Toggle between raw code output and rendered preview views
- **Line Statistics**: Real-time character and line count tracking
- **Status Indicators**: Visual feedback during generation, loading, success, and error states

## Tech Stack & Architecture

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | - | Semantic structure and layout |
| **CSS3** | - | Modern styling with custom properties |
| **JavaScript (ES6+)** | Latest | Core application logic |
| **Figlet.js** | 1.8.0 | ASCII font rendering and generation |
| **Google Fonts** | Latest | JetBrains Mono typography |

### Build & Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 22 | Runtime environment |
| **ESLint** | 9 | JavaScript linting and code quality |
| **Stylelint** | 16 | CSS linting and validation |
| **HTMLHint** | 1 | HTML validation |

### Project Structure

```
ascii-text-generator/
├── assets/
│   ├── css/
│   │   └── styles.css              # Main stylesheet with GitHub-themed design
│   └── js/
│       ├── app.js                  # Core application logic
│       └── i18n/
│           ├── index.js            # i18n configuration and language registry
│           ├── en.js               # English translations
│           ├── ru.js               # Russian translations
│           ├── es.js               # Spanish translations
│           ├── fr.js               # French translations
│           ├── de.js               # German translations
│           ├── ja.js               # Japanese translations
│           ├── zh.js               # Chinese translations
│           ├── pl.js               # Polish translations
│           ├── cs.js               # Czech translations
│           ├── sv.js               # Swedish translations
│           ├── nl.js               # Dutch translations
│           ├── pt.js               # Portuguese translations
│           ├── kk.js               # Kazakh translations
│           └── uk.js               # Ukrainian translations
├── .github/
│   ├── workflows/
│   │   ├── lint.yml                # Frontend linting workflow
│   │   ├── codeql.yml              # Security analysis workflow
│   │   └── dependabot-auto-merge.yml # Dependency automation
│   └── dependabot.yml              # Dependabot configuration
├── index.html                       # Main application entry point
├── LICENSE                          # Apache 2.0 license
└── README.md                        # This file
```

### Key Design Decisions

#### 1. **Vanilla JavaScript Architecture**
The application uses vanilla JavaScript with ES6 modules instead of frameworks to maintain zero dependencies, reduce bundle size, and ensure maximum browser compatibility. This approach provides excellent performance characteristics for a single-page application.

#### 2. **Event-Driven State Management**
A lightweight state object (`state`) manages application state including:
- Active language
- Selected font
- Text alignment preference
- Debounce timer for input handling
- Font loading cache

This pattern eliminates the need for complex state management libraries while maintaining predictable state transitions.

#### 3. **Debounced Input Handling**
User text input triggers a debounced `generateArt()` function with a 600ms delay to avoid excessive Figlet rendering operations. This optimization improves responsiveness and reduces CPU usage during rapid typing.

#### 4. **On-Demand Font Loading**
Rather than bundling all fonts (~40MB), the application dynamically fetches fonts from the jsDelivr CDN. Loaded fonts are cached in a Set to prevent redundant network requests, striking a balance between performance and file size.

#### 5. **CDN-Based Resource Delivery**
- **Figlet.js**: Served from jsDelivr CDN for reliable, globally distributed delivery
- **Google Fonts**: JetBrains Mono loaded via Google Fonts API for typography
- **Font Files**: Stored on jsDelivr CDN with automatic cache management

#### 6. **Internationalization (i18n) Pattern**
Each language is implemented as a separate ES6 module, dynamically imported via a registry. This modular approach allows:
- Easy addition of new languages without modifying core code
- Translation validation at the module level
- Lazy loading of language data if needed in the future

#### 7. **DOM Caching Strategy**
All frequently accessed DOM elements are cached in the `elements` object during initialization (`cacheElements()`). This eliminates repeated `querySelector()` calls and significantly improves runtime performance.

#### 8. **Markdown Output Format**
Generated ASCII art is automatically wrapped with GitHub-compatible markdown:
```html
<div align="[alignment]">
<pre>[ASCII_ART]</pre>
</div>
```

This ensures direct copy-paste functionality into GitHub README files, issues, and pull request comments.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          BROWSER ENVIRONMENT                            │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                            INDEX.HTML                             │  │
│  │        (Semantic HTML5, ARIA Accessibility, Inline SVG Icons)     │  │
│  └──────┬──────────────────────────┬─────────────────────────┬───────┘  │
│         │                          │                         │          │
│  ┌──────▼──────┐           ┌───────▼───────┐         ┌───────▼──────┐   │
│  │ assets/css/ │           │  assets/js/   │         │ EXTERNAL CDN │   │
│  ├─────────────┤           ├───────────────┤         ├──────────────┤   │
│  │ styles.css  │           │    app.js     │         │  jsDelivr    │   │
│  │             │           ├───────────────┤         │  Google API  │   │
│  │ GitHub-Dark │           │  State Mgmt   │         ├──────────────┤   │
│  │ Design      │           │  Event System │         │ Figlet.js    │   │
│  │ Responsive  │           │  i18n Logic   │         │ JetBrains    │   │
│  └─────────────┘           └───────┬───────┘         │ Mono Font    │   │
│                                    │                 └──────────────┘   │
│                           ┌────────▼────────┐                           │
│                           │  locales/*.json │                           │
│                           │  (11 Languages) │                           │
│                           └─────────────────┘                           │
└─────────────────────────────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (ES6 support required)
- **Internet Connection**: Required for CDN asset loading (Figlet.js, font files, Google Fonts)
- **JavaScript Enabled**: Application requires JavaScript to function

> [!NOTE]
> This is a client-side only application with no backend requirements. It runs entirely in the browser.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/readme-SVG/ascii-text-generator.git
   cd ascii-text-generator
   ```

2. **Serve Locally** (Development)

   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Using Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   Using Node.js (with http-server):
   ```bash
   npx http-server -p 8000
   ```

   Using Ruby:
   ```bash
   ruby -run -ehttpd . -p8000
   ```

3. **Access the Application**

   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

4. **Verify Installation**

   - You should see the ASCII Text Generator interface with the GitHub-styled header
   - The default text "README" should be pre-generated in ANSI Shadow font
   - All UI controls should be responsive and interactive

> [!TIP]
> For production deployment, see the [Deployment](#deployment) section.

## Testing

This project uses automated testing and linting to ensure code quality and consistency.

### Prerequisites for Testing

Install Node.js dependencies for linting tools:
```bash
npm install --no-save \
  eslint@9 \
  @eslint/js@9 \
  globals@15 \
  htmlhint@1 \
  stylelint@16 \
  stylelint-config-standard@36
```

### Running Tests

#### JavaScript Linting (ESLint)

Validate JavaScript code against the ES6+ standard and recommended rules:
```bash
npx eslint assets/js/**/*.js
```

Expected output on success:
```
✔ No errors
```

##### Configuration Details
- **ECMAScript Version**: Latest (es2024)
- **Module Type**: ES6 modules
- **Environment**: Browser globals enabled
- **Rules**: Recommended set with custom `no-unused-vars` (allows underscore-prefixed unused args)

#### CSS Linting (Stylelint)

Validate CSS against standard best practices:
```bash
npx stylelint assets/css/**/*.css
```

Expected output on success:
```
✔ No errors
```

##### Configuration
- **Standard Config**: stylelint-config-standard v36
- **Coverage**: All CSS files in assets/css/

#### HTML Validation (HTMLHint)

Validate HTML structure and semantic correctness:
```bash
npx htmlhint index.html
```

Expected output on success:
```
✔ No errors
```

##### Configuration Details
```json
{
  "tag-pair": true,           // Ensure all tags are properly paired
  "tagname-lowercase": true,   // Enforce lowercase tag names
  "attr-lowercase": true,      // Enforce lowercase attribute names
  "attr-value-double-quotes": true, // Require double quotes on attributes
  "spec-char-escape": true,   // Escape special characters properly
  "id-unique": true           // Ensure IDs are unique
}
```

### Automated Testing (GitHub Actions)

The project includes continuous integration via GitHub Actions:

**Linting Workflow** (`.github/workflows/lint.yml`)
- Triggered on: Pull requests, pushes, and manual dispatch
- Runs: All three linters (ESLint, Stylelint, HTMLHint)
- Node.js Version: 22 (aligned with project requirements)
- Status: Check workflow status in the [Actions tab](https://github.com/readme-SVG/ascii-text-generator/actions)

**CodeQL Security Analysis** (`.github/workflows/codeql.yml`)
- Automated security vulnerability detection
- Analyzes JavaScript code for common security issues
- Results visible in the Security tab

**Dependabot Automation** (`.github/workflows/dependabot-auto-merge.yml`)
- Automatically merges dependency updates for patch and minor versions
- Maintains project dependencies without manual intervention

### Running All Checks Locally

Execute all linters in sequence:
```bash
npm install --no-save eslint@9 @eslint/js@9 globals@15 htmlhint@1 stylelint@16 stylelint-config-standard@36 && \
npx eslint assets/js/**/*.js && \
npx stylelint assets/css/**/*.css && \
npx htmlhint index.html
```

> [!IMPORTANT]
> All linting checks must pass before pushing to the repository. GitHub Actions will automatically run these checks on every pull request.

## Deployment

### Deployment Approaches

#### 1. **Static File Hosting** (Recommended)

Deploy to any static file hosting service since the application requires no backend:

**GitHub Pages**
```bash
# Push to gh-pages branch or configure from repository settings
git checkout -b gh-pages
git push origin gh-pages
```

Then enable GitHub Pages in repository Settings → Pages.

**Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

**Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**AWS S3 + CloudFront**
```bash
# Upload files to S3 bucket
aws s3 sync . s3://your-bucket --delete --include "*" --exclude ".git/*"

# Invalidate CloudFront distribution cache (if using CDN)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

#### 2. **Docker Deployment**

Create a Dockerfile for containerized deployment:

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --no-save \
    eslint@9 @eslint/js@9 globals@15 htmlhint@1 \
    stylelint@16 stylelint-config-standard@36 && \
    npx eslint assets/js/**/*.js && \
    npx stylelint assets/css/**/*.css && \
    npx htmlhint index.html

FROM nginx:alpine
COPY --from=builder /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t ascii-text-generator .
docker run -p 80:80 ascii-text-generator
```

#### 3. **Docker Compose Deployment**

For multi-service deployments:

```yaml
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./:/usr/share/nginx/html:ro
    environment:
      - NGINX_HOST=example.com
      - NGINX_PORT=80
```

Deploy:
```bash
docker-compose up -d
```

#### 4. **Traditional Web Server**

**Apache httpd**
```bash
# Place files in DocumentRoot
cp -r . /var/www/html/ascii-text-generator/

# Enable mod_rewrite if using URL routing
a2enmod rewrite
systemctl restart apache2
```

**Nginx**
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html/ascii-text-generator;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build Checklist

Before deploying to production:

- [ ] All linting checks pass (`npm install && npx eslint assets/js/**/*.js && npx stylelint assets/css/**/*.css && npx htmlhint index.html`)
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify responsive design on mobile devices
- [ ] Test all 70+ fonts load correctly
- [ ] Verify all 11+ language translations display properly
- [ ] Test copy-to-clipboard functionality
- [ ] Verify CDN resource loading (Figlet.js, Google Fonts, font files)
- [ ] Check network performance (asset loading time)
- [ ] Enable browser caching headers for static assets
- [ ] Configure CORS if serving fonts from different domain
- [ ] Set up SSL/TLS certificate (HTTPS required for clipboard API in some browsers)
- [ ] Configure security headers (CSP, X-Frame-Options, etc.)

### CI/CD Pipeline Integration

The repository includes GitHub Actions workflows that automatically:

1. **Lint Code** - Validates all changes against code quality standards
2. **Analyze Security** - Runs CodeQL for vulnerability detection
3. **Update Dependencies** - Automatically creates PRs for dependency updates

These workflows run on:
- Every pull request
- Every push to main/master
- Manual trigger via workflow_dispatch

Monitor workflow status: [GitHub Actions Tab](https://github.com/readme-SVG/ascii-text-generator/actions)

## Usage

### Basic Usage

#### 1. **Generate ASCII Art**

The simplest way to create ASCII art:

```html
<!-- Input your text -->
Text Input: "Hello World"

<!-- Select Font -->
Font: "ANSI Shadow"

<!-- Choose Alignment -->
Alignment: "Center"

<!-- Click Generate -->
Generated Output:
<div align="center">

<pre>
 ██╗  ██╗███████╗██╗     ██╗      ██████╗      ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
 ██║  ██║██╔════╝██║     ██║     ██╔═══██╗     ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
 ███████║█████╗  ██║     ██║     ██║   ██║     ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
 ██╔══██║██╔══╝  ██║     ██║     ██║   ██║     ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
 ██║  ██║███████╗███████╗███████╗╚██████╔╝     ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
 ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝       ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝
</pre>

</div>
```

#### 2. **Copy Generated Code**

```javascript
// Click the "Copy" button in the Code tab
// Copied output is ready to paste into Markdown files, GitHub issues, or pull requests

// Example usage in README.md:
<div align="center">

<pre>
[ASCII ART HERE]
</pre>

</div>
```

#### 3. **Use in Markdown**

Paste the generated code into any Markdown file:

```markdown
# My Project

<div align="center">

<pre>
[Generated ASCII Art]
</pre>

</div>

This is my project description...
```

### Advanced Usage

#### **Font Selection Guide**

| Font Category | Examples | Use Case |
|--------------|----------|----------|
| **3D Fonts** | ANSI Shadow, Banner3-D, Larry 3D, Isometric (1-4) | Headers, prominent titles |
| **Block Fonts** | Block, Big, Colossal, Double | Large headings, visual impact |
| **Decorative** | Doom, Fire Font-k, Ghost, Bloody, Poison | Special effects, themed content |
| **Classic** | Standard, Slant, Lean, Small | General purpose, space-constrained |
| **Stylized** | Fraktur, Georgia11, Broadway, Graffiti | Creative headers, artistic projects |
| **Retro** | DOS Rebel, Morse, Linux, Train | Vintage aesthetics, technical docs |
| **Specialty** | Star Wars, Morse (dots/dashes), Keyboard | Theme-specific content |

#### **Alignment Options**

```html
<!-- Left Alignment -->
<div align="left">
<pre>ASCII_ART</pre>
</div>

<!-- Center Alignment (Default) -->
<div align="center">
<pre>ASCII_ART</pre>
</div>

<!-- Right Alignment -->
<div align="right">
<pre>ASCII_ART</pre>
</div>
```

#### **Language Switching**

The application supports 11 languages:

1. **English** (en) - Default
2. **Russian** (ru) - Русский
3. **Spanish** (es) - Español
4. **French** (fr) - Français
5. **German** (de) - Deutsch
6. **Japanese** (ja) - 日本語
7. **Chinese** (zh) - 中文
8. **Polish** (pl) - Polski
9. **Czech** (cs) - Čeština
10. **Swedish** (sv) - Svenska
11. **Dutch** (nl) - Nederlands
12. **Portuguese** (pt) - Português
13. **Ukrainian** (uk) - Українська
14. **Kazakh** (kk) - Қазақша

Switch languages via the language dropdown in the header.

### Real-World Examples

#### **GitHub README Header**

```markdown
# Project Name

<div align="center">

<pre>
PROJECT
  NAME
</pre>

</div>

Your project description here.
```

#### **Issue Template with ASCII Art**

```markdown
## Bug Report

<div align="center">

<pre>
BUG FOUND
</pre>

</div>

### Description
...
```

#### **Profile README**

```markdown
<div align="center">

<pre>
GitHub
 User
</pre>

</div>

Welcome to my profile!
```

### Keyboard Shortcuts

| Action | Keyboard |
|--------|----------|
| Generate ASCII Art | `Ctrl+Enter` / `Cmd+Enter` |
| Copy to Clipboard | `Ctrl+Shift+C` / `Cmd+Shift+C` |
| Toggle Font List | `F` |
| Cycle Alignment | `Left/Right Arrow Keys` |

> [!TIP]
> The text input field uses a 600ms debounce, so rapid typing doesn't trigger excessive generation operations.

## Configuration

### Environment Configuration

The application is fully client-side and requires no environment variables. However, you can configure the following aspects:

#### **Font Loading Configuration**

The Figlet fonts are loaded from jsDelivr CDN with the following configuration:

```javascript
// assets/js/app.js (Line 252)
const response = await fetch(
  `https://cdn.jsdelivr.net/npm/figlet@1.8.0/fonts/${encodeURIComponent(font)}.flf`
);
```

To use a different CDN or local font server, modify the fetch URL.

#### **Google Fonts Configuration**

The application uses JetBrains Mono from Google Fonts. To change the font:

```html
<!-- index.html (Line 9) -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### **Default Application State**

Configure default values in `assets/js/app.js`:

```javascript
const state = {
    lang: 'en',              // Default language
    activeFont: 'ANSI Shadow', // Default font
    activeAlign: 'center',   // Default alignment: 'left' | 'center' | 'right'
    debounceId: null,        // Debounce timer ID
    loadedFonts: new Set()   // Font cache
};
```

#### **Debounce Delay**

Adjust input debounce timing (in milliseconds):

```javascript
// assets/js/app.js (Line 316)
state.debounceId = window.setTimeout(generateArt, 600); // Change 600 to desired ms
```

Lower values = more responsive but higher CPU usage
Higher values = less responsive but better performance

### UI Customization

#### **Modifying Fonts List**

Edit the fonts array in `assets/js/app.js` (Lines 3-72):

```javascript
const fonts = [
    { id: 'Font Name', hint: 'Display Hint' },
    // Add or remove fonts here
];
```

#### **Color Scheme**

All colors are defined as CSS custom properties in `assets/css/styles.css`:

```css
:root {
    --color-primary: #0969da;
    --color-success: #1a7f37;
    --color-danger: #d1242f;
    --color-text: #24292f;
    /* ... more colors ... */
}
```

Modify these values to customize the appearance.

#### **Typography**

The application uses JetBrains Mono monospace font. To change:

```css
/* assets/css/styles.css */
body {
    font-family: 'Your Font Name', monospace;
}
```

### Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome/Chromium | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 11+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE 11 | - | ❌ Not supported |

> [!NOTE]
> The application requires ES6 module support and the Clipboard API. Older browsers will not function correctly.

### Performance Tuning

#### **Font Loading Performance**

The application caches loaded fonts to avoid redundant requests:

```javascript
// assets/js/app.js (Lines 247-259)
async function ensureFontLoaded(font) {
    if (state.loadedFonts.has(font)) {
        return; // Font already cached
    }
    // Fetch and cache new font
}
```

#### **Memory Optimization**

For applications serving many concurrent users:
1. Enable HTTP caching headers on static assets
2. Use a CDN for global distribution
3. Consider implementing font preloading for popular fonts
4. Monitor browser memory usage for long sessions

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for complete details.

### What You Can Do

✅ Use commercially
✅ Modify the source code
✅ Distribute the software
✅ Use privately

### What You Must Do

📋 Include a copy of the license
📋 Document significant changes to the code

### What You Cannot Do

❌ Hold the authors liable for any issues
❌ Use the author's trademarks without permission

For more information, visit the [Apache License 2.0 Official Page](https://www.apache.org/licenses/LICENSE-2.0).

## Support the Project

[![Patreon](https://img.shields.io/badge/Patreon-OstinFCT-f96854?style=flat-square&logo=patreon)](https://www.patreon.com/OstinFCT)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-fctostin-29abe0?style=flat-square&logo=ko-fi)](https://ko-fi.com/fctostin)
[![Boosty](https://img.shields.io/badge/Boosty-Support-f15f2c?style=flat-square)](https://boosty.to/ostinfct)
[![YouTube](https://img.shields.io/badge/YouTube-FCT--Ostin-red?style=flat-square&logo=youtube)](https://www.youtube.com/@FCT-Ostin)
[![Telegram](https://img.shields.io/badge/Telegram-FCTostin-2ca5e0?style=flat-square&logo=telegram)](https://t.me/FCTostin)

If you find this tool useful, consider leaving a star on GitHub or supporting the author directly.

---

**Built with ❤️ by [readme-SVG](https://github.com/readme-SVG)**

**Last Updated**: 2024 | **Repository**: [ascii-text-generator](https://github.com/readme-SVG/ascii-text-generator)
