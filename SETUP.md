# VelSiksha Tuition Centre - Next.js Application

A modern, enhanced Next.js application for VelSiksha Tuition Centre with improved UI/UX components and email functionality.

## Features

✅ **Modern React Components** - Built with Next.js 16+ and React 19
✅ **Enhanced UI/UX** - Beautiful animations using Framer Motion
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Email Integration** - Contact form sends emails to velsiksha@gmail.com
✅ **Smooth Animations** - Scroll-triggered animations
✅ **Interactive Components** - Modern icons from Lucide React
✅ **WhatsApp Integration** - Floating WhatsApp button for quick contact

## Tech Stack

- **Framework:** Next.js 16.2.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email:** EmailJS (with mailto fallback)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

The project is already set up in the `velsiksha-next` directory. Navigate to it:

```bash
cd velsiksha-next
```

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Email Configuration

The contact form currently uses a **mailto** fallback that opens the user's default email client and sends to:

- **Primary:** velsiksha@gmail.com
- **Backup:** madhu.ramesh2905@gmail.com

### To Enable Full Email Functionality with EmailJS:

1. **Sign up for EmailJS** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an Email Service:**

   - Connect your Gmail account
   - Get your Service ID

3. **Create an Email Template:**

   - Template should include: name, class, phone, subject, message
   - Set recipient to velsiksha@gmail.com
   - Get your Template ID

4. **Get Your Public Key:**

   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Contact.tsx:**
   Replace the handleSubmit function with actual EmailJS implementation:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");

  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: formData.name,
        class: formData.class,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY"
    );

    setStatus("success");
    setFormData({ name: "", class: "", phone: "", subject: "", message: "" });
  } catch (error) {
    console.error("Failed to send email:", error);
    setStatus("error");
  } finally {
    setTimeout(() => setStatus("idle"), 5000);
  }
};
```

## Project Structure

```
velsiksha-next/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Tutor.tsx            # Tutor introduction
│   ├── Courses.tsx          # Courses offered
│   ├── FeaturesAndTimings.tsx  # Features & schedule
│   ├── Testimonials.tsx     # Student reviews
│   ├── CTA.tsx              # Call-to-action
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   └── WhatsAppFloat.tsx    # WhatsApp floating button
└── public/                  # Static assets
```

## Sections Included

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Eye-catching introduction with animations
3. **About** - Mission and approach
4. **Tutor** - Meet Madhumitha R
5. **Courses** - Classes 6-10 and 11-12 subjects
6. **Features & Timings** - Key features and class schedule (6-9 PM)
7. **Testimonials** - Student feedback
8. **CTA** - Enrollment call-to-action
9. **Contact** - Contact info and enquiry form
10. **Footer** - Copyright and branding
11. **WhatsApp Float** - Quick contact button

## Color Scheme

- **Primary Blue:** #1A5F7A (Trust, professionalism)
- **Secondary Blue:** #227C9D (Accent)
- **Light Blue:** #E9F4F7 (Background)
- **Primary Green:** #37A05E (Growth, success)
- **Light Green:** #E8F7ED (Soft backgrounds)

## Fonts

- **Body:** Inter (Google Fonts)
- **Headings:** Outfit (Google Fonts)

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

## Contact Information

- **Phone:** +91 6369259646
- **Email:** velsiksha@gmail.com
- **Address:** No: 5/1, Sakthi Nagar, 4th Street, Choolaimedu, Chennai – 600094

## License

© 2026 VelSiksha Tuition Centre. All Rights Reserved.

---

**Managed by Madhumitha R**
