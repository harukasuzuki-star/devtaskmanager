# GitHub Setup Steps

## Create Repository on GitHub

1. Visit: https://github.com/new
2. Repository name: `dev-task-manager`
3. Description: "Simple task manager with localStorage"
4. Public
5. Do NOT check "Add README" or "Add .gitignore"
6. Click "Create repository"

## Then Run These Commands

```bash
git push -u origin main
```

## After Pushing, Deploy to Netlify

1. Go to https://netlify.com
2. Sign up (free)
3. Click "Add new site" → "Import from Git"
4. Connect GitHub
5. Select `harukasuzuki-star/dev-task-manager`
6. Click "Deploy"
7. Your app is live!

Your URL will be: `https://dev-task-manager-XXXX.netlify.app`

## Alternative: Deploy via Surge (No GitHub needed)

If you want to skip GitHub, just run:

```bash
surge
```

Follow the prompts, and you'll get a live URL like: `https://your-app-name.surge.sh`

