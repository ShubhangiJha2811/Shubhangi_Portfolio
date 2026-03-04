# Analytics Setup Guide

## Google Analytics 4 Setup

Your portfolio is ready for Google Analytics tracking! Follow these steps to complete the setup:

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (gear icon)
4. Create a new property:
   - Property name: "Shubhangi Jha Portfolio"
   - Time zone: Select your timezone
   - Currency: Select your currency

### Step 2: Get Your Measurement ID

1. After creating the property, you'll see a "Measurement ID" (format: G-XXXXXXXXXX)
2. Copy this Measurement ID

### Step 3: Update Your Code

Open `src/utils/analytics.ts` and replace the placeholder:

```typescript
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 4: Deploy Your Site

Once you deploy your portfolio, Google Analytics will automatically start tracking:
- Page views
- Button clicks
- External link clicks
- Form submissions
- Downloads

### What's Already Tracked

The following events are automatically tracked:
- **Page Views**: Every page navigation
- **Button Clicks**: Using `trackButtonClick('button-name')`
- **External Links**: Using `trackExternalLink('url')`
- **Downloads**: Using `trackDownload('filename')`
- **Form Submissions**: Using `trackFormSubmit('form-name')`

### How to Add Custom Tracking

To track custom events in your components:

```typescript
import { trackButtonClick, trackExternalLink } from '../utils/analytics';

// Track button click
<button onClick={() => trackButtonClick('Download Resume')}>
  Download Resume
</button>

// Track external link
<a 
  href="https://github.com/yourprofile" 
  onClick={() => trackExternalLink('https://github.com/yourprofile')}
>
  GitHub
</a>
```

### Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Realtime**: See current visitors
   - **Reports > Engagement**: See page views and events
   - **Reports > User attributes**: See visitor demographics

### Privacy Considerations

- Google Analytics complies with GDPR
- Consider adding a cookie consent banner for EU visitors
- Add a Privacy Policy page to your portfolio

### Alternative Analytics (Optional)

If you prefer privacy-focused analytics, consider:
- **Plausible Analytics**: Simple, privacy-friendly
- **Fathom Analytics**: GDPR compliant
- **Umami**: Self-hosted, open-source

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Measurement ID is correct
3. Ensure your site is deployed (Analytics won't work on localhost in production mode)
4. Wait 24-48 hours for data to appear in Google Analytics
