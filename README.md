# AgentSearch Workshop @ SIGIR 2026

Official website for the AgentSearch Workshop: The First Workshop on Indexing, Retrieval, and Ranking of AI Agents at SIGIR 2026 in Melbourne, Australia.

🌐 **Live Site:** [https://agent-search.github.io/agentsearch-sigir26/](https://agent-search.github.io/agentsearch-sigir26/)

## 📋 Overview

This is a single-page website built with pure HTML, CSS, and vanilla JavaScript. It requires no build tools or external dependencies (except for optional Google Fonts) and is designed to be deployed directly on GitHub Pages.

### Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with smooth scrolling
- ✅ Scrollspy (highlights active section in navigation)
- ✅ Mobile hamburger menu
- ✅ Back-to-top button
- ✅ Accessible (ARIA labels, semantic HTML, keyboard navigation)
- ✅ SEO optimized (meta tags, Open Graph)
- ✅ Fast loading (no heavy dependencies)

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/agentsearch-sigir26.git
   cd agentsearch-sigir26
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/agentsearch-sigir26/`

4. **Wait a few minutes** for GitHub to build and deploy your site

### Local Development

To test the site locally, you can use any simple HTTP server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js**
```bash
npx serve
```

**Option 3: VS Code**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then open your browser to `http://localhost:8000` (or the port shown in your terminal).

## 📁 Project Structure

```
agentsearch-sigir26/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (CSS variables, responsive design)
│   ├── js/
│   │   └── main.js         # JavaScript (navigation, scrollspy, mobile menu)
│   └── img/                # Images folder (add your images here)
│       └── .gitkeep        # Placeholder
├── README.md               # This file
└── LICENSE                 # License file
```

## ✏️ How to Edit Content

### Update Workshop Details

Open `index.html` and edit the content directly. Here are the key sections:

#### 1. Hero Section (Home)
```html
<!-- Find this section around line 70 -->
<h1 class="hero-title">AgentSearch</h1>
<h2 class="hero-subtitle">The First Workshop on...</h2>
<p class="hero-conference">SIGIR 2026 · Melbourne | Naarm, Australia · July 2026</p>
```

#### 2. About Section
```html
<!-- Find around line 88 -->
<section id="about" class="section">
    <p>Your about text here...</p>
</section>
```

#### 3. Important Dates
```html
<!-- Find around line 271 -->
<ul class="dates-list">
    <li><strong>Paper Submission Deadline:</strong> April 15, 2026 (AoE)</li>
    <!-- Update dates as needed -->
</ul>
```

#### 4. Add/Remove Speakers
```html
<!-- Find around line 216 -->
<div class="speaker-card">
    <h3>Speaker Name</h3>
    <p class="speaker-affiliation">University Name</p>
    <p class="speaker-bio">Bio text...</p>
</div>
```

#### 5. Add/Remove Organizers
```html
<!-- Find around line 361 -->
<div class="organizer-card">
    <h3>Organizer Name</h3>
    <p class="organizer-affiliation">Affiliation</p>
    <p class="organizer-bio">Bio text...</p>
</div>
```

### Update Links

**Submission Links**
```html
<!-- Update the submission URL around line 283 -->
<a href="https://easychair.org/conferences/?conf=agentsearch2026" 
   class="btn btn-primary">Submit Your Paper</a>
```

**Challenge Links**
```html
<!-- Update the challenge URL around line 346 -->
<a href="https://github.com/agentsearch/challenge-2026" 
   class="btn btn-primary">Join the Challenge</a>
```

**Contact Email**
```html
<!-- Update around line 435 -->
<a href="mailto:agentsearch-workshop@googlegroups.com">
    agentsearch-workshop@googlegroups.com
</a>
```

### Change Colors and Styling

All visual design is controlled by CSS variables in `assets/css/style.css`:

```css
/* Find around line 5 */
:root {
    /* Change the primary color (buttons, links, accents) */
    --color-primary: #2563eb;
    
    /* Change text colors */
    --color-text: #1e293b;
    --color-text-light: #64748b;
    
    /* Change background colors */
    --color-background: #ffffff;
    --color-background-gray: #f8fafc;
    
    /* Adjust spacing */
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
}
```

### Add Images

1. Add your images to the `assets/img/` folder
2. Reference them in the HTML:

```html
<!-- Add a logo in the navigation -->
<div class="nav-brand">
    <img src="assets/img/logo.png" alt="AgentSearch Logo" height="40">
    <a href="#home">AgentSearch</a>
</div>

<!-- Add speaker photos -->
<div class="speaker-card">
    <img src="assets/img/speakers/mark-sanderson.jpg" 
         alt="Mark Sanderson" 
         class="speaker-photo">
    <h3>Mark Sanderson</h3>
    ...
</div>
```

### Update Meta Tags for SEO

```html
<!-- Find around line 6 in index.html -->
<meta name="description" content="Your updated description">
<meta property="og:url" content="https://YOUR-USERNAME.github.io/agentsearch-sigir26/">
<meta property="og:image" content="https://YOUR-USERNAME.github.io/agentsearch-sigir26/assets/img/logo.png">
```

## 🎨 Customization Tips

### Change Font

Replace the Google Fonts link in `index.html`:

```html
<!-- Around line 23 -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Update the CSS variable:
```css
:root {
    --font-family: 'Roboto', sans-serif;
}
```

### Adjust Navigation Height

Update both CSS and JavaScript:

```css
/* In style.css around line 27 */
--nav-height: 70px;
```

```javascript
/* In main.js around line 10 */
const NAV_HEIGHT = 70;
```

### Add More Sections

1. Add the HTML section:
```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <div class="section-content">
            <p>Your content here...</p>
        </div>
    </div>
</section>
```

2. Add navigation link:
```html
<!-- In the nav menu -->
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

The scrollspy will automatically detect and highlight the new section!

## 🔧 Troubleshooting

### Images Not Showing
- Ensure images are in the `assets/img/` folder
- Check that file paths are correct (case-sensitive)
- Verify images are pushed to GitHub

### Smooth Scrolling Not Working
- Check that section IDs match navigation hrefs exactly
- Ensure JavaScript is loading (check browser console)

### Mobile Menu Not Working
- Verify `main.js` is loading correctly
- Check browser console for JavaScript errors

### GitHub Pages Not Updating
- Wait 5-10 minutes after pushing changes
- Clear your browser cache
- Check GitHub Actions tab for build status

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a workshop website, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

For questions about the workshop content, contact: agentsearch-workshop@googlegroups.com

For technical issues with the website, open an issue on GitHub.

---

**Last Updated:** February 14, 2026

Built with ❤️ for SIGIR 2026
Official website for the AgentSearch Workshop at SIGIR 2026: Indexing, Retrieval, and Ranking of AI Agents.
