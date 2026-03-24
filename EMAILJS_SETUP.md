# 📧 EmailJS Setup Guide for VelSiksha Contact Form

This guide will help you configure the contact form to send emails directly to **velsiksha@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Create an account using your email or Google account

## Step 2: Add Email Service (Gmail)

1. After logging in, click **"Add New Service"**
2. Select **Gmail** as the service provider
3. Connect your Gmail account (`velsiksha@gmail.com`)
4. Click **"Create Service"**
5. **Copy the Service ID** (e.g., `service_gmail` or `service_abc123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** section
2. Click **"Create New Template"**
3. In the template editor, set up the following:

### Template Content:

```
Subject: New Enquiry from {{from_name}} - Class {{student_class}}

To: VelSiksha Tuition Centre
From: {{from_name}}
Phone: {{phone_number}}
Class: {{student_class}}
Subject Details: {{subject_details}}

Message:
{{message}}

---
This enquiry was submitted from the VelSiksha website contact form.
```

4. Click **"Save"**
5. **Copy the Template ID** (e.g., `template_contact` or `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **"Account"** (click your name in top right)
2. Click **"API Keys"** in the left menu
3. **Copy your Public Key** (e.g., `user_abc123xyz`)

## Step 5: Update the Code

Open the file: `components/Contact.tsx`

Find these lines (around line 43-46):

```typescript
const serviceID = "service_your_service_id";
const templateID = "template_your_template_id";
const publicKey = "your_public_key";
```

Replace with YOUR actual keys:

```typescript
const serviceID = "service_gmail"; // Your actual Service ID
const templateID = "template_contact"; // Your actual Template ID
const publicKey = "user_abc123xyz"; // Your actual Public Key
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Go to the contact form on your website
3. Fill out the form and submit
4. Check if the email arrives at `velsiksha@gmail.com`

## ✅ What You'll Get

- ✨ **Instant Email Delivery** - Emails sent directly to your inbox
- 📱 **Professional Format** - Clean, organized email layout
- 🔄 **Automatic Fallback** - Opens mail client if EmailJS fails
- ✅ **Success Messages** - Clear feedback for users
- 🛡️ **Error Handling** - Graceful error management

## 📝 Important Notes

1. **Free Tier Limits:**

   - 200 emails per month (FREE)
   - Perfect for small tuition centre needs

2. **Template Variables:**

   - `{{from_name}}` - Student's name
   - `{{student_class}}` - Class selection
   - `{{phone_number}}` - Contact number
   - `{{subject_details}}` - Subjects interested in
   - `{{message}}` - Custom message

3. **Security:**
   - Your API keys are client-side but safe for static sites
   - EmailJS handles secure transmission to Gmail

## 🔧 Troubleshooting

### Email not sending?

- ✅ Check if Service ID is correct
- ✅ Verify Template ID matches exactly
- ✅ Ensure Public Key is copied correctly
- ✅ Check browser console for errors

### Getting errors?

- ✅ Make sure Gmail service is connected
- ✅ Verify template variables match exactly
- ✅ Check if EmailJS account is active

## 🎯 Alternative: Use Environment Variables (Recommended for Production)

For better security, create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

Then update Contact.tsx:

```typescript
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
```

## 📞 Need Help?

EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**After setup, all contact form submissions will be sent directly to velsiksha@gmail.com!** ✉️
