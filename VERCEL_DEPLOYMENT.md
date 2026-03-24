# 🚀 Vercel Deployment Guide - VelSiksha Tuition Centre

## ✅ **Pre-Deployment Checklist**

Before deploying to Vercel, make sure you have:

- [x] EmailJS account configured
- [x] Service ID, Template ID, and Public Key
- [x] Logo image in `/public/images/logo.jpeg`
- [x] All code changes committed to Git repository

---

## 🎯 **Quick Deploy Steps**

### **Method 1: Deploy via Vercel Dashboard (Easiest)**

#### **Step 1: Push to GitHub**

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - VelSiksha website"

# Create repo on GitHub, then push
git remote add origin https://github.com/YOUR_USERNAME/velsiksha-next.git
git branch -M main
git push -u origin main
```

#### **Step 2: Connect to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (use GitHub login for easiest integration)
3. Click **"Add New Project"**
4. Select **"Import Git Repository"**
5. Choose your `velsiksha-next` repository
6. Click **"Import"**

#### **Step 3: Configure Environment Variables**

In Vercel dashboard, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_CONTACT_EMAIL=velsiksha@gmail.com
```

#### **Step 4: Deploy!**

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build
3. Your site is LIVE! 🎉

---

### **Method 2: Deploy via Vercel CLI**

#### **Install Vercel CLI**

```bash
npm install -g vercel
```

#### **Login to Vercel**

```bash
vercel login
```

#### **Deploy**

```bash
cd velsiksha-next
vercel
```

Follow the prompts:

- Set up and deploy? **Y**
- Which scope? **Choose your account**
- Link to existing project? **N** (first time)
- Project name? **velsiksha-next**
- Directory? **./** (current)
- Override settings? **N**

#### **Add Environment Variables**

After first deploy, set environment variables:

```bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
vercel env add NEXT_PUBLIC_CONTACT_EMAIL production
```

#### **Deploy to Production**

```bash
vercel --prod
```

---

## ⚙️ **Configuration Files Created**

### **1. `vercel.json`**

- Configures build and deploy settings
- Sets optimal region (Singapore - closest to Chennai)
- Adds caching headers for performance
- Defines environment variables structure

### **2. `next.config.ts`**

- Image optimization for faster loading
- Production optimizations
- Vercel-specific configurations

---

## 🔧 **Environment Variables Setup**

### **Get Your EmailJS Credentials:**

1. **Login to EmailJS** → [emailjs.com](https://emailjs.com)

2. **Get Service ID:**

   - Dashboard → Email Services
   - Copy your Service ID (e.g., `service_g99l583`)

3. **Get Template ID:**

   - Dashboard → Email Templates
   - Copy your Template ID (e.g., `template_xhko0hf`)

4. **Get Public Key:**
   - Dashboard → Account → API Keys
   - Copy your Public Key (e.g., `L1rAdYRaYzX3i_1J2`)

### **Add to Vercel:**

Go to **Project Settings → Environment Variables**:

| Variable Name                     | Value                 | Environment                      |
| --------------------------------- | --------------------- | -------------------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | `service_xxxxx`       | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_xxxxx`      | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | `user_xxxxx`          | Production, Preview, Development |
| `NEXT_PUBLIC_CONTACT_EMAIL`       | `velsiksha@gmail.com` | Production, Preview, Development |

---

## 📸 **Image Optimization**

### **Add Your Logo:**

Place your logo at: `/public/images/logo.jpeg`

Recommended specs:

- Format: JPEG or PNG
- Size: 200x200px (or similar aspect ratio)
- File size: < 100KB for fast loading

### **Update Tutor Image:**

Place tutor photo at: `/public/images/tutor.jpg`

---

## 🎨 **Custom Domain (Optional)**

### **Add Custom Domain in Vercel:**

1. Go to **Project Settings → Domains**
2. Add your domain (e.g., `velsiksha.com`)
3. Follow DNS configuration instructions
4. SSL certificate auto-generated (free!)

### **DNS Records:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🚀 **Performance Optimizations**

### **Automatic with Vercel:**

- ✅ Global CDN (Edge Network)
- ✅ Automatic HTTPS
- ✅ Gzip/Brotli compression
- ✅ Image optimization (WebP, AVIF)
- ✅ Smart CDN caching
- ✅ Instant rollbacks

### **Manual Optimizations Applied:**

- ✅ Responsive images with Next.js Image
- ✅ Code splitting by route
- ✅ Tree shaking unused code
- ✅ Minified CSS/JS
- ✅ Optimized font loading

---

## 📊 **Post-Deployment Testing**

### **1. Test Contact Form**

```
1. Open your deployed site
2. Fill contact form
3. Submit enquiry
4. Check velsiksha@gmail.com inbox
```

### **2. Test WhatsApp Buttons**

```
1. Click "Enroll Now" button
2. Should open WhatsApp
3. Message should be pre-filled
```

### **3. Test Mobile Responsiveness**

```
1. Open on phone
2. Test all sections
3. Verify buttons are tappable
4. Check text readability
```

### **4. Performance Check**

```
1. Go to pagespeed.web.dev
2. Enter your Vercel URL
3. Should score 90+ on mobile
```

---

## 🔍 **Troubleshooting**

### **Build Fails:**

```bash
# Test build locally first
npm run build

# If errors, fix them before deploying
```

### **Environment Variables Not Working:**

- Redeploy after adding variables
- Check variable names match exactly
- Ensure added to correct environment (Production)

### **EmailJS Not Sending:**

- Verify credentials in Vercel env vars
- Check EmailJS dashboard for errors
- Test with sample email first

### **Images Not Loading:**

- Ensure images in `/public/images/` folder
- Check file paths are lowercase
- Verify file extensions (.jpg, .png)

---

## 📈 **Vercel Analytics (Optional)**

### **Enable Vercel Analytics:**

1. Go to **Project Settings → Analytics**
2. Enable **Web Analytics**
3. Accept privacy policy

Track:

- Page views
- Visitor locations
- Device types
- Traffic sources

---

## 🔄 **Continuous Deployment**

Once connected to GitHub:

### **Auto-Deploy on Push:**

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Vercel automatically deploys to preview
# Merge to main = auto-deploy to production
```

### **Deployment Flow:**

```
Push to branch → Preview URL created → Test →
Merge to main → Production deployment
```

---

## 🎯 **Vercel Dashboard Features**

### **Monitor Your Site:**

- **Overview** - Recent deployments, analytics
- **Activity** - Deployment history
- **Analytics** - Traffic and performance
- **Settings** - Environment variables, domains
- **Usage** - Bandwidth and function usage

### **Free Tier Includes:**

- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Real-time logs

---

## 📱 **Share Your Live Site**

Once deployed, share these links:

**Main Website:**

```
https://velsiksha-next.vercel.app
```

**Mobile Version:**
Same URL - fully responsive!

**WhatsApp Quick Link:**

```
https://wa.me/916369259646?text=Hello%20Madhumitha%20R%2C%20I'm%20interested%20in%20enrolling%20my%20child%20in%20VelSiksha%20Tuition%20Centre.%20Please%20provide%20more%20details.
```

---

## 🎉 **Success Indicators**

Your deployment is successful when:

- ✅ Site loads without errors
- ✅ All navigation works
- ✅ Contact form sends emails
- ✅ WhatsApp buttons open correctly
- ✅ Mobile view is perfect
- ✅ Images load properly
- ✅ No console errors
- ✅ Lighthouse score 90+

---

## 🆘 **Need Help?**

### **Vercel Documentation:**

- [Next.js Deployment](https://vercel.com/docs/deployments/nextjs)
- [Environment Variables](https://vercel.com/docs/environment-variables)
- [Custom Domains](https://vercel.com/docs/custom-domains)

### **EmailJS Support:**

- [Documentation](https://www.emailjs.com/docs/)
- [Status Page](https://status.emailjs.com/)

---

## 📞 **Quick Reference**

### **Useful Commands:**

```bash
# Local development
npm run dev

# Build test
npm run build

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

## 🎊 **You're Ready!**

Your VelSiksha Tuition Centre website is optimized and ready for Vercel deployment!

**Next Steps:**

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!
5. Share your live link! 🚀

**Estimated deployment time:** 3-5 minutes  
**First build time:** ~2 minutes  
**Subsequent builds:** ~30 seconds

---

**Good luck with your deployment!** 🎓✨
