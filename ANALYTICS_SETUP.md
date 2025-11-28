# Analytics Setup Guide

## Step 6 – Measurement & Conversion Tracking

This document outlines the analytics goals and event tracking setup for measuring the effectiveness of your portfolio site updates.

## Key Conversion Events to Track

### 1. Primary CTA: "Schedule a Conversation" Clicks
Track all instances where users click the primary call-to-action button.

**Event Name:** `schedule_conversation_click`

**Where it appears:**
- Hero section (NewHero.tsx)
- Final CTA section (SimplifiedCTA.tsx)
- VITO Case Study section (VITOCaseStudySection.tsx)

**Properties to track:**
- `button_location`: 'hero' | 'cta_section' | 'vito_case_study'
- `timestamp`: Date/time of click
- `page_url`: Current page URL

### 2. Secondary CTA: "View Case Studies" Clicks
Track when users navigate to case study content.

**Event Name:** `view_case_studies_click`

**Where it appears:**
- Hero section (NewHero.tsx)
- Final CTA section (SimplifiedCTA.tsx)

**Properties to track:**
- `button_location`: 'hero' | 'cta_section'
- `timestamp`: Date/time of click
- `destination`: Target case study or section

### 3. Additional Engagement Events

#### External Link Clicks
**Event Name:** `external_link_click`
- RuggedRed.com visit
- LinkedIn profile
- GitHub profile

#### Section Scroll Depth
**Event Name:** `scroll_depth`
Track how far users scroll through key sections:
- `section_name`: 'hero' | 'about' | 'projects' | 'testimonials' | 'cta'
- `percentage`: 25% | 50% | 75% | 100%

#### Video Testimonial Engagement
**Event Name:** `testimonial_video_interaction`
- `action`: 'play' | 'pause' | 'complete'
- `video_title`: Name of the testimonial
- `duration_watched`: Seconds watched

## Implementation Options

### Option 1: Google Analytics 4 (GA4)

```javascript
// Example GA4 event tracking
gtag('event', 'schedule_conversation_click', {
  'button_location': 'hero',
  'timestamp': new Date().toISOString(),
  'page_url': window.location.href
});
```

### Option 2: Plausible Analytics (Privacy-Friendly)

```javascript
// Example Plausible event tracking
plausible('Schedule Conversation Click', {
  props: {
    location: 'hero',
    page: window.location.pathname
  }
});
```

### Option 3: Custom Event Layer

Create a centralized analytics utility:

```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Send to your analytics provider
  if (typeof window !== 'undefined') {
    // GA4 example
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
    
    // Plausible example
    if (window.plausible) {
      window.plausible(eventName, { props: properties });
    }
    
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, properties);
    }
  }
};
```

## Implementation Checklist

- [ ] Choose analytics platform (GA4, Plausible, or custom)
- [ ] Add tracking script to `app/layout.tsx`
- [ ] Create analytics utility function
- [ ] Add tracking to "Schedule a Conversation" buttons
- [ ] Add tracking to "View Case Studies" buttons
- [ ] Set up conversion goals in analytics dashboard
- [ ] Test events in development
- [ ] Verify events in production
- [ ] Set up weekly/monthly reports
- [ ] Create baseline metrics for comparison

## Success Metrics to Monitor

### Primary Metrics
- **Conversion Rate:** (Schedule Conversation clicks / Total visitors) × 100
- **Engagement Rate:** (View Case Studies clicks / Total visitors) × 100
- **Time on Site:** Average session duration
- **Bounce Rate:** Percentage leaving after one page

### Secondary Metrics
- **Scroll Depth:** Percentage reaching CTA section
- **Video Engagement:** Testimonial video play rate
- **Mobile vs Desktop:** Conversion rate comparison
- **Traffic Sources:** Which channels drive conversions

## Weekly Report Template

```
Week of [DATE]
==================

Primary CTA Clicks:
- Hero: X clicks
- CTA Section: Y clicks
- Case Study: Z clicks
- Total: X+Y+Z clicks
- Conversion Rate: (Total/Visitors) × 100%

Secondary CTA Clicks:
- Total: X clicks
- Engagement Rate: (X/Visitors) × 100%

Top Performing Section:
- [Section with highest engagement]

Areas for Improvement:
- [Sections with low engagement]

Next Week Goals:
- [Specific optimization targets]
```

## A/B Testing Opportunities

Once baseline metrics are established, consider testing:
1. **CTA Copy:** "Schedule a Conversation" vs. "Book a Call" vs. "Let's Talk"
2. **Button Placement:** Above fold vs. below key content
3. **Value Proposition:** Different headline variations
4. **Testimonial Position:** Text quote above or below video grid
5. **Color Schemes:** CTA button colors and contrast

## Privacy Considerations

- Respect user privacy and comply with GDPR/CCPA
- Add cookie consent banner if required
- Don't track personally identifiable information
- Provide opt-out mechanism
- Keep data retention policies reasonable

---

**Next Steps:**
1. Choose your analytics platform
2. Set up tracking code
3. Implement event tracking
4. Monitor for 2-4 weeks to establish baseline
5. Begin iterative improvements based on data




