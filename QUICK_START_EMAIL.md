# ⚡ Quick Start - Contact Form Email Setup

## 🎯 Goal

Set up your contact form to send emails directly to **velsiksha@gmail.com** in under 5 minutes!

---

## 📋 Step-by-Step Setup (Choose ONE method)

### **Method 1: Direct Code Update (Easiest - 2 minutes)**

1. Open `components/Contact.tsx`
2. Find lines 43-46 (in the `handleSubmit` function)
3. Replace with your EmailJS credentials:

```typescript
const serviceID = "service_gmail"; // Your EmailJS Service ID
const templateID = "template_contact"; // Your EmailJS Template ID
const publicKey = "user_abc123xyz"; // Your EmailJS Public Key
```

✅ **Done!** Emails will now be sent to velsiksha@gmail.com

---

### **Method 2: Environment Variables (Recommended for Production - 5 minutes)**

#### Step 1: Create `.env.local` file

In the root folder of `velsiksha-next`, create a file named `.env.local`:

```
velsiksha-next/
├── .env.local          ← Create this file here
├── components/
├── app/
└── package.json
```

#### Step 2: Add Your EmailJS Keys

Paste this into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz
NEXT_PUBLIC_CONTACT_EMAIL=velsiksha@gmail.com
```

Replace the values with your actual EmailJS credentials.

✅ **Done!** The form will automatically use these settings.

---

## 🔑 How to Get EmailJS Credentials

### 1️⃣ Sign Up (1 minute)

- Go to [EmailJS.com](https://www.emailjs.com/)
- Click **"Sign Up Free"**
- Use Google or email to create account

### 2️⃣ Add Gmail Service (1 minute)

- Click **"Add New Service"**
- Select **Gmail**
- Connect `velsiksha@gmail.com` account
- Copy the **Service ID** (e.g., `service_gmail`)

### 3️⃣ Create Email Template (2 minutes)

- Click **"Email Templates"** → **"Create New Template"**
- Use this template:

```
Subject: New Enquiry from {{from_name}}

From: {{from_name}}
Phone: {{phone_number}}
Class: {{student_class}}
Subject: {{subject_details}}

Message:
{{message}}

---
Sent from VelSiksha website
```

- Click **"Save"**
- Copy the **Template ID** (e.g., `template_contact`)

### 4️⃣ Get Public Key (30 seconds)

- Click your name → **"Account"**
- Go to **"API Keys"** tab
- Copy your **Public Key**

---

## ✅ Testing

1. Start your dev server:

   ```bash
   npm run dev
   ```

2. Go to your website's contact form

3. Fill out and submit the form

4. Check `velsiksha@gmail.com` inbox - you should receive the enquiry!

---

## 🔄 What Happens When Someone Submits?

1. User fills out contact form
2. Clicks "Submit Enquiry"
3. Email is sent via EmailJS to `velsiksha@gmail.com`
4. User sees "Sent Successfully!" message
5. You receive a professionally formatted email ✨

### Sample Email You'll Receive:

```
Subject: New Enquiry from Rajesh Kumar - Class 10

To: VelSiksha Tuition Centre
From: Rajesh Kumar
Phone: 9876543210
Class: 10
Subject Details: Mathematics, Science

Message:
My child needs help with algebra and physics concepts.
Please provide more information about the classes.

---
This enquiry was submitted from the VelSiksha website contact form.
```

---

## 🛠️ Troubleshooting

### ❌ "EmailJS not configured" error

**Solution:** Make sure your `.env.local` file exists and has the correct keys

### ❌ Emails not arriving

**Solution:**

- Check spam folder
- Verify Gmail service is connected in EmailJS dashboard
- Ensure template variables match exactly

### ❌ Form shows error

**Solution:** Check browser console (F12) for detailed error messages

---

## 📊 EmailJS Free Plan Limits

- ✅ **200 emails/month** (FREE)
- ✅ Perfect for tuition centre needs
- ✅ No credit card required

Typical usage: ~50 enquiries/month = Well within free limit!

---

## 🎉 Success Checklist

- [ ] EmailJS account created
- [ ] Gmail service added
- [ ] Email template created
- [ ] API keys copied
- [ ] `.env.local` file created OR code updated
- [ ] Test email sent successfully
- [ ] Email received at `velsiksha@gmail.com`

---

## 📞 Need Help?

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Support:** support@emailjs.com

---

**Your contact form is now ready to send enquiries directly to your inbox!** 🎊
