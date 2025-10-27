# Deploy Your Task Manager Online

Three options to get your app online (all free):

## Option 1: Vercel (Recommended - Fastest)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts and your app will be live in 30 seconds
4. Your URL: `https://your-app-name.vercel.app`

## Option 2: Netlify (Simplest)

1. Visit [netlify.com](https://netlify.com) and sign up
2. Drag and drop this entire folder into Netlify's dashboard
3. Your app is live instantly
4. Your URL: `https://random-name-123.netlify.app`

## Option 3: GitHub Pages (Free with GitHub)

```bash
# Create a GitHub repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/task-manager.git
git push -u origin main

# Then go to GitHub repo settings → Pages → Enable
# Your URL: https://YOUR-USERNAME.github.io/task-manager
```

## Option 4: Surge.sh (Quick command line)

```bash
# Install Surge
npm i -g surge

# Deploy
surge
# Follow prompts, your app will be live at: https://your-app-name.surge.sh
```

## Recommendation

**Use Vercel** - it's the fastest and most reliable:
- Free forever
- Automatic HTTPS
- Global CDN
- No credit card required
- Takes 30 seconds to deploy

