# ⚡ Quick Deploy Checklist for Vercel

## 📋 **Pre-Deployment (Do This First!)**

### **1. Gather Your Credentials**

- [ ] EmailJS Service ID: `service_xxxxx`
- [ ] EmailJS Template ID: `template_xxxxx`
- [ ] EmailJS Public Key: `user_xxxxx`
- [ ] Contact Email: `velsiksha@gmail.com`

### **2. Prepare Your Repository**

```bash
# Initialize Git (if not done)
git init
git add .
git commit -m "Ready for Vercel deployment"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/velsiksha-next.git
git branch -M main
git push -u origin main
```

---

## 🚀 **Deploy to Vercel (5 Minutes)**

### **Option A: Via Vercel Dashboard**

1. **Go to [vercel.com](https://vercel.com)**

   - Login with GitHub account

2. **Click "Add New Project"**

3. **Import Your Repository**

   - Select `velsiksha-next` from your repositories
   - Click "Import"

4. **Configure Build Settings**

   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` ✓
   - Output Directory: `.next` ✓

5. **Add Environment Variables** ⚠️ **IMPORTANT!**

   Click "Environment Variables" and add:

   ```
   Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
   Value: service_xxxxx

   Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   Value: template_xxxxx

   Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   Value: user_xxxxx

   Name: NEXT_PUBLIC_CONTACT_EMAIL
   Value: velsiksha@gmail.com
   ```

6. **Click "Deploy"**
   - Wait 2-3 minutes
   - Your site is LIVE! 🎉

---

### **Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd velsiksha-next
vercel

# Follow prompts, then add env variables
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
vercel env add NEXT_PUBLIC_CONTACT_EMAIL production

# Deploy to production
vercel --prod
```

---

## ✅ **Post-Deployment Tests**

### **Test 1: Visit Your Site**

```
https://velsiksha-next.vercel.app
```

- [ ] Homepage loads
- [ ] All sections visible
- [ ] Images load properly

### **Test 2: WhatsApp Enrollment**

- [ ] Click "Enroll Now" button
- [ ] Opens WhatsApp
- [ ] Message is pre-filled

### **Test 3: Contact Form**

- [ ] Fill out form
- [ ] Submit enquiry
- [ ] Check email at `velsiksha@gmail.com`
- [ ] Received email? ✅

### **Test 4: Mobile View**

- [ ] Open on phone
- [ ] Navigation works
- [ ] Buttons are tappable
- [ ] Text is readable

### **Test 5: Performance**

- [ ] Go to https://pagespeed.web.dev
- [ ] Enter your Vercel URL
- [ ] Score should be 90+

---

## 🎯 **Common Issues & Fixes**

### ❌ **Build Failed**

**Fix:** Test locally first

```bash
npm run build
```

Fix any errors before deploying again.

### ❌ **Contact Form Not Working**

**Fix:**

- Check environment variables in Vercel
- Verify EmailJS credentials
- Redeploy after adding variables

### ❌ **Images Not Loading**

**Fix:**

- Ensure logo is at `/public/images/logo.jpeg`
- Check file path is lowercase
- Verify image format (.jpg or .png)

### ❌ **WhatsApp Button Not Opening**

**Fix:**

- Check phone number format: `916369259646`
- Ensure proper URL encoding in href

---

## 📊 **Vercel Settings to Configure**

### **Project Settings → Domains**

- Default domain: `velsiksha-next.vercel.app`
- Add custom domain (optional): `velsiksha.com`

### **Project Settings → Git**

- Auto-deploy on push: ✅ Enabled
- Production branch: `main`

### **Project Settings → Analytics**

- Enable Web Analytics: ✅ Recommended

### **Project Settings → Environment Variables**

- All 4 variables added: ✅
- Added to Production: ✅
- Added to Preview: ✅
- Added to Development: ✅

---

## 🔧 **Your Configuration Files**

### ✅ **Already Created:**

1. **`vercel.json`** - Vercel configuration

   - Build settings
   - Caching headers
   - Region settings (Singapore)

2. **`next.config.ts`** - Next.js optimization

   - Image optimization
   - Production settings

3. **`.env.local.example`** - Environment template

   - Shows required variables
   - Instructions included

4. **`.gitignore`** - Git ignore rules
   - Excludes sensitive files
   - Vercel-ready

---

## 📱 **Share Your Live Site**

Once deployed, your website will be at:

```
https://velsiksha-next.vercel.app
```

**Share this link with parents!**

Also works with WhatsApp:

```
Check out VelSiksha Tuition Centre!
https://velsiksha-next.vercel.app
```

---

## 🎊 **Success Checklist**

After deployment, verify:

- ✅ Site loads without errors
- ✅ All pages work
- ✅ Contact form sends emails
- ✅ WhatsApp buttons function
- ✅ Mobile responsive
- ✅ Images load correctly
- ✅ No console errors
- ✅ Fast loading speed
- ✅ Lighthouse score 90+

---

## 💡 **Pro Tips**

### **Update Your Site:**

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys! ✨
```

### **Custom Domain (Optional):**

1. Buy domain from GoDaddy/Namecheap
2. Add to Vercel (Settings → Domains)
3. Update DNS records
4. SSL auto-generated (free!)

### **Monitor Performance:**

- Check Vercel dashboard
- View analytics
- Monitor bandwidth usage

---

## 🆘 **Need Help?**

### **Vercel Support:**

- [Documentation](https://vercel.com/docs)
- [Community Discord](https://discord.gg/vercel)
- [Twitter Support](https://twitter.com/vercel)

### **EmailJS Support:**

- [Docs](https://www.emailjs.com/docs/)
- [Status](https://status.emailjs.com/)

---

## 📞 **Quick Reference Commands**

```bash
# Test build locally
npm run build

# Start dev server
npm run dev

# Deploy preview
vercel

# Deploy production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

## 🎉 **You're Ready to Deploy!**

Follow the steps above and your VelSiksha website will be live in minutes!

**Estimated Time:** 5 minutes  
**Difficulty:** Easy  
**Cost:** FREE (Vercel Hobby Plan)

---

**Good luck! 🚀**
