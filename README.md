# 🏠 American Dream Realty - Real Estate Landing Page

A conversion-optimized, mobile-first real estate website built with Next.js 15, designed to capture leads for buyers and sellers.

## ✨ Features

- **🇺🇸 American-Themed Design** - Patriotic color scheme (red, white, blue) with star patterns
- **📱 Mobile-First Responsive** - Perfect on all devices from phones to desktops
- **📝 Dual Lead Capture Forms** - Separate forms for buyers and sellers
- **🎯 Strategic CTAs** - "Book a Showing" and "Free Home Valuation" buttons
- **⭐ Social Proof** - Testimonials, stats, recent sales, and trust badges
- **⚡ Fast Performance** - Built on Next.js 15 with App Router
- **🎨 Modern UI** - Tailwind CSS for beautiful, consistent styling

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Production Build

```bash
npm run build
npm start
```

## 📧 Email Integration Setup

The site currently logs form submissions to the console. To receive leads via email, integrate with an email service:

### Option 1: Resend (Recommended - Free tier available)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `npm install resend`
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   YOUR_EMAIL=your-email@example.com
   ```
5. Update `app/api/submit-lead/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function:
await resend.emails.send({
  from: 'leads@yourdomain.com',
  to: process.env.YOUR_EMAIL!,
  subject: `New ${type === 'buyer' ? 'Buyer' : 'Seller'} Lead: ${name}`,
  html: `
    <h2>New ${type === 'buyer' ? 'Buyer' : 'Seller'} Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    ${type === 'buyer' ? `
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Location:</strong> ${data.location}</p>
    ` : `
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
    `}
    <p><strong>Message:</strong> ${data.message}</p>
  `
});
```

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Install: `npm install @sendgrid/mail`
3. Follow similar setup as above

### Option 3: AWS SES

1. Set up AWS SES
2. Install: `npm install @aws-sdk/client-ses`
3. Configure with AWS credentials

## 🎨 Customization

### Update Contact Information

Edit `components/Footer.tsx`:
- Phone number
- Email address
- Physical address

### Update Company Name

Update in:
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Modify Stats & Testimonials

Edit `components/SocialProof.tsx`:
- Update stats (sales volume, clients served, etc.)
- Replace testimonials with real customer reviews
- Update recent sales data

### Change Colors

The site uses Tailwind's default blue and red colors. To customize:
- Edit color classes in component files
- Or extend Tailwind config in `tailwind.config.ts`

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── submit-lead/
│   │       └── route.ts          # API endpoint for form submissions
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── components/
│   ├── CallToAction.tsx          # CTA section
│   ├── Features.tsx              # Features grid
│   ├── Footer.tsx                # Footer with contact info
│   ├── Hero.tsx                  # Hero section with main CTAs
│   ├── LeadForms.tsx             # Buyer/Seller forms
│   └── SocialProof.tsx           # Testimonials & stats
└── public/                       # Static assets
```

## 🎯 Conversion Optimization Features

✅ **Above-the-fold CTAs** - Two primary actions visible immediately  
✅ **Multiple conversion points** - Forms, buttons, phone numbers throughout  
✅ **Social proof** - Stats, testimonials, recent sales build trust  
✅ **Clear value propositions** - Benefits highlighted in features section  
✅ **Low friction forms** - Required fields only, easy to complete  
✅ **Mobile optimized** - Thumb-friendly buttons, easy navigation  
✅ **Fast loading** - Next.js optimization for speed  
✅ **Professional design** - Builds credibility and trust  

## 📱 Mobile Responsiveness

- **Hero**: Stacked layout on mobile, optimized text sizes
- **Forms**: Full-width on mobile, side-by-side on desktop
- **Stats**: 2-column grid on mobile, 4-column on desktop
- **Testimonials**: Stacked on mobile, 3-column on desktop
- **Footer**: Stacked on mobile, multi-column on desktop

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

- **Netlify**: Works great with Next.js
- **AWS Amplify**: Full AWS integration
- **DigitalOcean App Platform**: Simple deployment

## 📝 TODO: Before Going Live

- [ ] Add your real contact information in Footer
- [ ] Set up email integration for lead capture
- [ ] Replace placeholder content with your real data
- [ ] Add Google Analytics or tracking
- [ ] Set up custom domain
- [ ] Test forms on multiple devices
- [ ] Add real property images (optional)
- [ ] Configure SEO metadata
- [ ] Add privacy policy & terms of service pages

## 🤝 Support

Need help? Contact us or open an issue!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
