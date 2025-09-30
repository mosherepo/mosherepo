# Contributing to AI Data Solutions Website

Thank you for your interest in contributing to the AI Data Solutions website! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

## 🚀 Getting Started

### Prerequisites

- Git
- A modern code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js 14+ (optional, for development tools)

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-data-solutions-website.git
   cd ai-data-solutions-website
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/ai-data-solutions-website.git
   ```

4. **Install dependencies (optional)**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   # Or simply open index.html in browser
   ```

## 💻 Development Process

### Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Test thoroughly

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Keep your fork updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## 📝 Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper heading hierarchy (H1 → H6)
- Include alt text for all images
- Use ARIA labels for accessibility
- Keep code indented (2 or 4 spaces, be consistent)

```html
<!-- Good -->
<article class="service-card" role="article">
    <h3 class="service-title">Custom AI Development</h3>
    <p class="service-description">Description here...</p>
</article>

<!-- Bad -->
<div class="service-card">
<h3>Custom AI Development</h3>
<p>Description here...</p>
</div>
```

### CSS

- Use CSS custom properties for theming
- Follow BEM or similar naming convention
- Mobile-first responsive design
- Use meaningful class names
- Group related styles together

```css
/* Good */
.service-card {
    padding: var(--spacing-xl);
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
}

.service-card__title {
    font-size: 1.5rem;
    color: var(--text-primary);
}

/* Bad */
.card {
    padding: 32px;
    background: #fff;
}

.title {
    font-size: 24px;
    color: #000;
}
```

### JavaScript

- Use modern ES6+ syntax
- Write pure functions when possible
- Add comments for complex logic
- Use meaningful variable names
- Handle errors gracefully

```javascript
// Good
class ContactForm {
    constructor(formElement) {
        this.form = formElement;
        this.init();
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        try {
            const formData = new FormData(this.form);
            await this.sendData(formData);
            this.showSuccess();
        } catch (error) {
            this.showError(error.message);
        }
    }
}

// Bad
function submit() {
    var form = document.getElementById('form');
    // ... messy code
}
```

### File Organization

```
ai-data-solutions-website/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── images/                 # Image assets
├── fonts/                  # Custom fonts (if any)
└── docs/                   # Documentation
```

## 📋 Commit Guidelines

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): subject

[optional body]

[optional footer]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no code change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve mobile menu toggle issue"
git commit -m "docs: update deployment guide"
git commit -m "style: improve button hover effects"
git commit -m "perf: optimize image loading"

# Bad commits
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes**
   - All browsers (Chrome, Firefox, Safari, Edge)
   - Multiple screen sizes
   - Accessibility (keyboard navigation, screen readers)

2. **Check code quality**
   ```bash
   npm run validate-html
   # Check for JavaScript errors in console
   ```

3. **Update documentation**
   - Update README if needed
   - Add comments to complex code
   - Update relevant guides

4. **Run performance checks**
   ```bash
   npm run lighthouse
   ```

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] Accessibility tested

## Screenshots (if applicable)
Add screenshots showing the changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Tested across browsers
```

### Review Process

1. Maintainer reviews code
2. Automated checks run (if configured)
3. Feedback provided
4. Updates made if needed
5. Approval and merge

## 🧪 Testing

### Manual Testing Checklist

#### Functionality
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Navigation works (including mobile)
- [ ] All interactive elements respond

#### Responsive Design
- [ ] Mobile (< 576px)
- [ ] Tablet (576px - 968px)
- [ ] Desktop (> 968px)
- [ ] Large screens (> 1920px)

#### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible
- [ ] ARIA labels present

#### Performance
- [ ] Page load < 3 seconds
- [ ] Smooth animations
- [ ] No layout shifts
- [ ] Optimized images

### Tools for Testing

```bash
# Lighthouse audit
npm run lighthouse

# SEO check
npm run seo-check

# Performance check
npm run perf-check

# HTML validation
npm run validate-html

# Check broken links
npm run check-links
```

## 📚 Documentation

### What to Document

1. **New Features**
   - How it works
   - How to use it
   - Any configuration needed

2. **Bug Fixes**
   - What was broken
   - How it was fixed
   - Prevention measures

3. **API Changes**
   - What changed
   - Migration guide
   - Deprecation notices

4. **Setup Instructions**
   - Prerequisites
   - Step-by-step guide
   - Troubleshooting

### Documentation Style

- Use clear, simple language
- Include code examples
- Add screenshots when helpful
- Keep it up to date
- Link to related docs

## 🎨 Design Guidelines

### Colors

Use the defined color variables:
```css
--primary-color: #0066FF
--secondary-color: #00D9FF
--accent-color: #6366F1
```

### Typography

- Headings: Inter font, bold
- Body: Inter font, regular
- Maintain hierarchy (H1 → H6)

### Spacing

Use consistent spacing variables:
```css
--spacing-xs: 0.5rem
--spacing-sm: 0.75rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
```

### Components

- Maintain existing component structure
- Follow established patterns
- Keep components reusable
- Document new components

## 🐛 Reporting Bugs

### Before Reporting

1. Check existing issues
2. Reproduce the bug
3. Gather information:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: Chrome 120
- OS: Windows 11
- Screen size: 1920x1080

## Additional Context
Any other relevant information
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem It Solves
What problem does this address?

## Proposed Solution
How would you implement it?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Any other relevant information
```

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Acknowledged in documentation

## 📞 Getting Help

If you need help:

1. **Check documentation**
   - README.md
   - DEPLOYMENT.md
   - SEO-GUIDE.md

2. **Search existing issues**
   - GitHub Issues

3. **Ask questions**
   - Create a new issue with "question" label
   - Contact maintainers

4. **Join community**
   - Discord server (if available)
   - Discussion forums

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to make this project better! Your time and effort are greatly appreciated.

---

**Happy Contributing!** 🚀

*Last Updated: September 30, 2025*