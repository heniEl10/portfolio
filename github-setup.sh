#!/bin/bash

echo "🚀 Hani El Khalfi Portfolio - GitHub Setup Script"
echo "=================================================="
echo ""

# Check if repository exists locally
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository!"
    exit 1
fi

echo "✅ Git repository found"
echo ""

echo "📋 Next steps to push to GitHub:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Repository name: hani-el-khalfi-portfolio"
echo "3. Description: Personal portfolio website - Full-Stack Developer & Data Scientist"
echo "4. Make it Public"
echo "5. DO NOT initialize with README, .gitignore, or license (we already have them)"
echo "6. Click 'Create repository'"
echo ""
echo "7. After creating the repository, run these commands:"
echo ""
echo "   git remote add origin https://github.com/heniEl10/hani-el-khalfi-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "📁 Repository contents:"
echo "- ✅ Complete Next.js portfolio with TypeScript"
echo "- ✅ Your profile picture and CV"
echo "- ✅ All project links and content"
echo "- ✅ SEO optimized and responsive design"
echo "- ✅ Ready for Vercel deployment"
echo ""
echo "🌐 After pushing to GitHub, you can deploy to Vercel:"
echo "1. Go to https://vercel.com"
echo "2. Import your GitHub repository"
echo "3. Deploy automatically"
echo ""
echo "📊 Repository stats:"
git log --oneline | wc -l | xargs echo "Commits:"
git ls-files | wc -l | xargs echo "Files:"
du -sh . | cut -f1 | xargs echo "Size:"
