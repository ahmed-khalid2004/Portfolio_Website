```markdown
# Portfolio Website

A modern, responsive portfolio website featuring user authentication, smooth navigation, and showcasing multiple service offerings for software engineering professionals.

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=github)](https://github.com/ahmed-khalid2004.github.io/Portfolio-Website/)
[![GitHub](https://img.shields.io/badge/github-repo-black?style=for-the-badge&logo=github)](https://github.com/ahmed-khalid2004/Portfolio-Website)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

**🌐 View Live:** [https://ahmed-khalid2004.github.io/Portfolio-Website/](https://ahmed-khalid2004.github.io/Portfolio-Website/)

> **Note:** Replace `yourusername` with your actual GitHub username after deployment.

---

## Project Overview

This portfolio website is a comprehensive web application designed to showcase the skills and services of a software engineering team (Ayman, Ahmed, Rana, and Aya). The site features a complete user authentication system with sign-up and sign-in functionality, a responsive design that adapts to various screen sizes, and multiple sections highlighting different services including web design, development, SEO, content writing, WordPress development, and video editing.

**Key Goals:**
- Provide an engaging online presence for the software engineering team
- Demonstrate technical capabilities through a polished, interactive website
- Offer user registration and authentication using browser localStorage
- Create a responsive, mobile-friendly experience
- Showcase portfolio projects and services with visual appeal

**Use Cases:**
- Personal/team portfolio presentation for potential clients
- Educational demonstration of front-end web development skills
- Template for aspiring web developers learning HTML, CSS, and JavaScript
- Platform for collecting contact information from interested parties

---

## 📸 Screenshots

### Welcome Page
![Welcome Page](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/welcome.png)
*Landing page with sign-up and sign-in options - First point of entry for new visitors*

### Sign Up Page
![Sign Up](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/signup.png)
*User registration form with name, email, phone, faculty selection, and password*

### Sign In Page
![Sign In](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/login.png)
*Secure login interface with validation and "I don't have an account" link*

### Hero Section
![Hero Section](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/hero.png)
*Main landing page with glassmorphism card effect showcasing the team*

### Portfolio Showcase
![Portfolio Page](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/portfolio.png)
*Interactive portfolio showcase with 6 service cards featuring hover effects*

### Services Section
![Services](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/services.png)
*Detailed service descriptions with icons: Web Design, Development, SEO, Content Writing, WordPress, and Video Editing*

### About Section
![About](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/about.png)
*Team introduction with gradient background and detailed service breakdown*

### Contact Form
![Contact](https://raw.githubusercontent.com/ahmed-khalid2004/Portfolio-Website/main/screenshots/contact.png)
*Professional contact form with company details on glassmorphism card*

> **Note:** Add actual screenshots to the `screenshots/` folder after deployment.

---

## 🎬 Live Preview

### Quick Tour

**Authentication Flow:**
```
Welcome Page → Sign Up → Login → Portfolio Dashboard
```

**Key Features Demo:**
1. 🔐 **User Registration** - Create account with name, email, phone, faculty
2. ✅ **Secure Login** - Authenticate with stored credentials
3. 🎨 **Interactive Portfolio** - 6 service cards with hover animations
4. 📱 **Responsive Design** - Hamburger menu for mobile devices
5. 💬 **Contact Form** - Get in touch with glassmorphism design
6. 🔗 **Social Integration** - Direct links to team social profiles

### Try It Yourself

Visit the live demo: [https://ahmed-khalid2004.github.io/Portfolio-Website/](https://ahmed-khalid2004.github.io/Portfolio-Website/)

**Test Credentials** (for demo purposes):
- Username: `demo@example.com`
- Password: `demo123`

> Note: Create your own account to test the full authentication system!

---

## Tech Stack

**Languages:**
- HTML5 - Markup structure
- CSS3 - Styling and animations
- JavaScript (ES6+) - Client-side logic and interactivity

**Libraries & Frameworks:**
- Font Awesome 6.4.2 - Icon library for UI elements
- Google Fonts (Roboto, Poppins) - Typography

**Browser APIs:**
- localStorage API - User data persistence
- DOM API - Dynamic content manipulation

**Tooling:**
- Modern web browsers (Chrome, Firefox, Safari, Edge recommended)
- No build tools or bundlers required (vanilla JavaScript)

**Runtime:**
- Client-side only (no server required)
- Compatible with any static web server or file:// protocol

---

## Architecture

**High-Level Design:**
The application follows a simple multi-page architecture with shared styling and JavaScript components:

```
Browser (Client-Side)
       ↓
HTML Pages (welcome.html → login.html/signup.html → web.html)
       ↓
JavaScript Modules (authentication, navigation, UI interactions)
       ↓
localStorage (persistent user data)
```

**Major Components:**

1. **Authentication System**
   - Welcome page with entry point to sign-up/sign-in
   - Sign-up form collecting user details (name, email, phone, faculty, password)
   - Sign-in form validating credentials against localStorage
   - Client-side validation and user management

2. **Main Portfolio Interface**
   - Responsive navigation bar with hamburger menu
   - Hero section with call-to-action buttons
   - Portfolio showcase with project cards
   - Services section with detailed descriptions
   - About section with team information
   - Contact form with details
   - Footer with social media links

3. **Responsive UI Components**
   - Mobile-responsive navigation
   - Smooth scroll navigation
   - Hover effects and transitions
   - Glassmorphism design elements

**Data Flow:**
1. User visits welcome page
2. Chooses to sign up (creates account stored in localStorage) or sign in
3. On successful authentication, redirected to main portfolio (web.html)
4. User navigates through different sections using smooth scrolling
5. All user data persists in browser localStorage across sessions

---

## Features

**Core Features:**
- ✅ User registration system with form validation
- ✅ User authentication (sign-in/sign-up) using localStorage
- ✅ Fully responsive design for mobile, tablet, and desktop
- ✅ Smooth scroll navigation between sections
- ✅ Interactive hamburger menu for mobile devices
- ✅ Glassmorphism UI effects with backdrop filters
- ✅ Portfolio showcase section with project cards
- ✅ Services section highlighting 6 key offerings
- ✅ Contact form for visitor inquiries
- ✅ Social media integration (Facebook, GitHub, Instagram, LinkedIn)

**Additional Features:**
- Hover animations on buttons, cards, and interactive elements
- Gradient backgrounds for visual appeal
- Font Awesome icons throughout the interface
- Custom styling with modern CSS techniques
- Multiple page variants (portfolio.html and web.html for different layouts)

---

## Setup & How to Run

**Prerequisites:**
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No server installation required (runs as static files)
- Optional: Local web server for testing (Python, Node.js, or VS Code Live Server)

### Installation Steps

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/yourusername/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Verify folder structure:**
   Ensure you have all required files:
   - HTML files: welcome.html, login.html, signup.html, web.html, portfolio.html
   - CSS files: All .css files
   - JavaScript files: All .js files
   - Images folder with required assets

3. **Open the project:**

   **Option A - Direct file opening:**
   ```bash
   # Simply open welcome.html in your browser
   open welcome.html  # macOS
   start welcome.html # Windows
   xdg-open welcome.html # Linux
   ```

   **Option B - Using Python (recommended for testing):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then navigate to: http://localhost:8000/welcome.html
   ```

   **Option C - Using Node.js:**
   ```bash
   npx http-server -p 8000
   
   # Then navigate to: http://localhost:8000/welcome.html
   ```

   **Option D - Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click on welcome.html
   - Select "Open with Live Server"

4. **Navigate the application:**
   - Start at `welcome.html`
   - Click "Sign Up" to create an account
   - After registration, you'll be redirected to login
   - Sign in with your credentials
   - Explore the portfolio sections

**Common Commands:**
```bash
# Clear browser localStorage (if you need to reset user data)
# Open browser console (F12) and run:
localStorage.clear()

# View stored users
localStorage.getItem('users')
```

---

## 🚀 Deployment Guide

### GitHub Pages (Recommended)

1. **Prepare for deployment:**
   ```bash
   # Rename welcome.html to index.html for GitHub Pages
   mv welcome.html index.html
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/Portfolio-Website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings**
   - Click **Pages** in the left sidebar
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

4. **Access your live site:**
   - Wait 2-3 minutes for deployment
   - Visit: `https://yourusername.github.io/Portfolio-Website/`

5. **Optional - Add custom domain:**
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `www.yourportfolio.com`)
   - Configure DNS with your domain provider

### Alternative: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Follow prompts and get your live URL
```

### Alternative: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Get your live URL
```

### Deployment Checklist

After deployment, verify:
- [x] Screenshots added to `/screenshots/` folder
- [x] README updated with screenshot links
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Sign-up/Sign-in functionality works
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] All social media links are correct

---

## Testing

**Manual Testing:**

This project does not include automated tests. Testing should be performed manually:

1. **Authentication Testing:**
   ```
   - Test sign-up with valid data
   - Test sign-up with empty fields (should show validation)
   - Test sign-in with correct credentials
   - Test sign-in with incorrect credentials
   - Test sign-in with empty fields
   ```

2. **Navigation Testing:**
   ```
   - Test hamburger menu on mobile viewports
   - Test smooth scroll to each section
   - Test all navigation links
   ```

3. **Responsiveness Testing:**
   ```
   - Test on mobile (320px - 768px)
   - Test on tablet (768px - 1024px)
   - Test on desktop (1024px+)
   - Verify all elements adapt properly
   ```

4. **Browser Compatibility:**
   ```
   - Test on Chrome, Firefox, Safari, Edge
   - Verify localStorage functionality works
   - Check CSS compatibility (backdrop-filter support)
   ```

**Test Coverage:**
- No automated test coverage available
- Recommended: Add Jest or Mocha for JavaScript unit tests
- Recommended: Add Cypress or Playwright for E2E tests

---

## Folder Structure

```
Portfolio_Website/
├── Images/                       # Image assets
│   ├── website.png              # Hero background image
│   ├── web.jfif                 # Service card images
│   ├── dev.jfif
│   ├── team2.jpg                # About section image
│   └── [other images]
├── Icons/                       # Favicon
│   └── xbox_logo_icon_169692.ico
├── screenshots/                 # Screenshots for README
│   ├── welcome.png
│   ├── portfolio.png
│   ├── services.png
│   └── contact.png
├── index.html                   # Landing page (renamed from welcome.html)
├── welcome.css                  # Welcome page styles
├── login.html                   # Sign-in page
├── signin.css                   # Sign-in page styles
├── signin.js                    # Sign-in logic
├── signup.html                  # Registration page
├── signup.css                   # Sign-up page styles
├── signup.js                    # Registration logic
├── web.html                     # Main portfolio page (primary)
├── web.css                      # Main portfolio styles
├── web.js                       # Main portfolio JavaScript
├── portfolio.html               # Alternate portfolio layout
├── portfolio.css                # Alternate portfolio styles
├── portfolio.js                 # Alternate portfolio JavaScript
├── res.css                      # Responsive styles (shared)
├── .nojekyll                    # Disable Jekyll processing
└── README.md                    # This file
```

**Key Files:**
- `index.html` - Entry point for new visitors (GitHub Pages default)
- `web.html` - Main portfolio interface after authentication
- `signin.js` - Handles user authentication logic
- `signup.js` - Handles user registration and localStorage management
- `res.css` - Contains all responsive media queries
- `web.js` - Smooth scrolling and mobile menu functionality

---

## Configuration & Secrets

**No Server Configuration Required**

This is a purely client-side application with no backend configuration. All data is stored in browser localStorage.

**localStorage Schema:**

```javascript
// Users are stored as JSON array in localStorage under key 'users'
// Example structure:
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "faculty": "Computer Science",
    "password": "plaintext_password"  // ⚠️ Not encrypted!
  }
]
```

**⚠️ Security Notes:**
- Passwords are stored in **plain text** in localStorage
- This is suitable for educational/demo purposes only
- For production, implement proper backend authentication with:
  - Password hashing (bcrypt, argon2)
  - Secure session management
  - HTTPS encryption
  - Token-based authentication (JWT)

**Customization:**

To customize contact information and social links, edit `web.html`:

```html
<!-- Contact Details (around line 400-420) -->
<p class="contact-text">YOUR_EMAIL@gmail.com</p>
<p class="contact-text">YOUR_PHONE_NUMBER</p>

<!-- Social Links (around line 445-465) -->
<a href="YOUR_FACEBOOK_URL" target="_blank">
  <i class="fab fa-facebook-f"></i>
</a>
<a href="YOUR_GITHUB_URL" target="_blank">
  <i class="fab fa-github"></i>
</a>
<a href="YOUR_INSTAGRAM_URL" target="_blank">
  <i class="fab fa-instagram"></i>
</a>
<a href="YOUR_LINKEDIN_URL" target="_blank">
  <i class="fab fa-linkedin-in"></i>
</a>
```

---

## 📊 Browser Support

| Browser | Supported Version | localStorage | Backdrop Filter |
|---------|------------------|--------------|-----------------|
| Chrome  | ✅ 90+          | ✅           | ✅              |
| Firefox | ✅ 88+          | ✅           | ✅              |
| Safari  | ✅ 14+          | ✅           | ✅              |
| Edge    | ✅ 90+          | ✅           | ✅              |
| Opera   | ✅ 76+          | ✅           | ✅              |
| IE 11   | ❌ Not supported | ⚠️ Limited   | ❌              |

---

## Future Improvements

**High Priority:**
- [ ] Implement backend authentication with secure password storage
- [ ] Add form submission handling for contact form (EmailJS, Formspree, or backend API)
- [ ] Integrate actual project data instead of placeholder content
- [ ] Add client-side form validation with better error messages
- [ ] Implement password strength requirements and validation
- [ ] Add email verification for user registration
- [ ] Create actual resume download functionality

**Medium Priority:**
- [ ] Add animations on scroll (AOS library or Intersection Observer)
- [ ] Implement dark mode toggle
- [ ] Add loading spinners and skeleton screens
- [ ] Create blog or news section
- [ ] Add project filtering by category
- [ ] Implement image lazy loading for performance
- [ ] Add SEO meta tags and Open Graph tags
- [ ] Create sitemap.xml for better SEO

**Nice to Have:**
- [ ] Add unit and E2E tests (Jest, Cypress)
- [ ] Integrate analytics (Google Analytics, Plausible)
- [ ] Add multilingual support (i18n)
- [ ] Implement progressive web app (PWA) features
- [ ] Add testimonials/reviews section
- [ ] Create admin dashboard for content management
- [ ] Add chatbot for visitor engagement
- [ ] Implement accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Add CI/CD pipeline for automated deployment

---

## Contribution Guidelines

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/ahmed-khalid2004/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style and formatting
   - Keep HTML semantic and accessible
   - Use consistent CSS naming conventions
   - Comment complex JavaScript logic
   - Test on multiple browsers and devices

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### PR Standards

- Provide a clear description of changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure responsive design is maintained
- Test all authentication flows if modifying auth code
- Keep commits atomic and well-described

### Code Style

- Use meaningful variable and function names
- Indent with 4 spaces (or 2 spaces consistently)
- Use camelCase for JavaScript variables/functions
- Use kebab-case for CSS classes
- Comment non-obvious code sections
- Avoid inline styles in HTML

### Areas for Contribution

- Bug fixes and improvements
- Accessibility enhancements
- Performance optimizations
- Documentation improvements
- New features (discuss in issues first)
- Test coverage

---

## License

**MIT License**

Copyright (c) 2024 Ayman, Ahmed, Rana, Aya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 👥 Team & Contact

**Project Team:** Ayman, Ahmed, Rana, Aya

**Ahmed Khalid** - Lead Developer
- 📧 Email: engahmedkhalid3s@gmail.com
- 🐙 GitHub: [@ahmed-khalid2004](https://github.com/ahmed-khalid2004)
- 💼 LinkedIn: [Ahmed Khalid](https://www.linkedin.com/in/ahmed-k-5b6349259)
- 📸 Instagram: [@ahmed_khalid57](https://www.instagram.com/ahmed_khalid57)
- 👤 Facebook: [Profile](https://www.facebook.com/profile.php?id=100053330989548)

**Contact Information:**
- 📞 Phone: +20 11 1087 1987
- 📍 Location: Shebin ElKom, MNU - Faculty of CS
- 📧 Team Email: OurTeam@gmail.com

---

## 🙏 Acknowledgments

- Font Awesome for comprehensive icon library
- Google Fonts for beautiful typography (Roboto, Poppins)
- Inspiration from modern portfolio design trends
- The web development community for best practices

---

## 📝 Changelog

### Version 1.0.0 (2024)
- ✨ Initial release
- ✅ User authentication system with localStorage
- ✅ Responsive navigation with hamburger menu
- ✅ Six service showcase sections
- ✅ Portfolio project cards
- ✅ Contact form with company details
- ✅ Social media integration
- ✅ Smooth scroll navigation
- ✅ Glassmorphism UI effects

---

<p align="center">
  <strong>Made by Ayman, Ahmed, Rana & Aya</strong>
</p>

<p align="center">
  ⭐ Star this repo if you find it helpful!
</p>

<p align="center">
  <a href="https://ahmed-khalid2004.github.io/Portfolio-Website/">View Live Demo</a> •
  <a href="https://github.com/ahmed-khalid2004/Portfolio-Website/issues">Report Bug</a> •
  <a href="https://github.com/ahmed-khalid2004/Portfolio-Website/issues">Request Feature</a>
</p>

---

**What I looked at:** Analyzed all HTML files (welcome.html, login.html, signup.html, web.html, portfolio.html), CSS files (web.css, signin.css, signup.css, res.css), and JavaScript files (signin.js, signup.js, web.js) to understand the authentication flow, responsive design implementation, navigation structure, and localStorage-based user management system. Integrated comprehensive deployment instructions for GitHub Pages, Netlify, and Vercel with live demo badges and links.
```
