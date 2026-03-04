// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  event({
    action: 'click',
    category: 'External Link',
    label: url,
  });
};

// Track downloads
export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};
