# Performance Testing Guide

## Quick Start Testing

After implementing all performance optimizations, follow these steps to verify improvements:

### 1. Run the Development Server
```bash
npm run dev
```

### 2. Test in Browser DevTools

#### Chrome DevTools (Recommended)
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Network** tab
3. Reload the page
4. Check:
   - ✅ Images loading as WebP/AVIF
   - ✅ Video doesn't load immediately
   - ✅ Map loads only when scrolled to
   - ✅ Total page size reduced

#### Performance Tab
1. Open **Performance** tab in DevTools
2. Click Record
3. Scroll through the page
4. Stop recording
5. Check:
   - ✅ 60 FPS during animations
   - ✅ No long tasks blocking the main thread
   - ✅ Smooth scrolling

### 3. Lighthouse Audit

1. Open DevTools > **Lighthouse** tab
2. Select:
   - ✅ Performance
   - ✅ Desktop or Mobile
3. Click "Analyze page load"
4. Expected scores:
   - **Performance: 85-95+**
   - **Accessibility: 95+**
   - **Best Practices: 90+**

### 4. Visual Checks

#### Hero Section
- ✅ Video should not load immediately (check Network tab)
- ✅ Page should be interactive before video starts
- ✅ Fallback gradient visible while video loads

#### Project Showcase Cards
- ✅ Images should lazy load (only load when in viewport)
- ✅ Check Network tab - images load as you scroll
- ✅ Animations should be smooth (no jank)

#### Featured Showcase (Mood Board)
- ✅ Images load progressively
- ✅ Hover animation should be smooth
- ✅ Cards animate smoothly into position

#### Map Section
- ✅ Scroll to map section
- ✅ Map should load with 300ms delay
- ✅ No geocoding API calls (coordinates are cached)
- ✅ Loading skeleton appears first

### 5. Mobile Testing

Test on real mobile device or Chrome DevTools mobile emulation:
```
1. Open DevTools
2. Toggle device toolbar (Cmd+Shift+M)
3. Select a mobile device (iPhone 12, Pixel 5, etc.)
4. Test scrolling and interactions
```

Check:
- ✅ Smooth scrolling
- ✅ Fast image loading
- ✅ Animations don't lag
- ✅ Video doesn't autoplay on mobile data

### 6. Network Throttling Test

Simulate slow connection:
```
1. DevTools > Network tab
2. Change throttling to "Slow 3G" or "Fast 3G"
3. Reload page
```

Check:
- ✅ Page loads within reasonable time
- ✅ Lazy loading works correctly
- ✅ Content is prioritized correctly

### 7. Compare Before/After

#### Key Metrics to Compare:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Page Load Time | 3-5s | 1-2s | 50-60% |
| Initial Bundle Size | 2-3 MB | 800KB-1.2MB | 60% |
| Time to Interactive | 4-6s | 2-3s | 40-50% |
| Lighthouse Score | 50-60 | 85-95 | 40-50% |

### 8. Production Build Test

For best results, test the production build:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Production builds are significantly faster than development mode.

### 9. External Tools

#### PageSpeed Insights
1. Go to https://pagespeed.web.dev/
2. Enter your deployed URL
3. Check both Mobile and Desktop scores

#### WebPageTest
1. Go to https://www.webpagetest.org/
2. Enter your URL
3. Select location and device
4. Review waterfall chart and metrics

## Common Issues & Solutions

### Issue: Images still loading as PNG/JPEG
**Solution**: Check `next.config.js` has image formats configured

### Issue: Video loads immediately
**Solution**: Verify `preload="metadata"` is set and delay timer is working

### Issue: Map loads on page load
**Solution**: Check `shouldLoadMap` state and `isVisible` trigger

### Issue: Animations are jerky
**Solution**: Verify `will-change` property is applied and GPU acceleration is active

## Browser Support Verification

Test on:
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## Success Criteria

Your optimizations are successful if:
1. ✅ Lighthouse Performance score > 85
2. ✅ All images load as WebP/AVIF
3. ✅ Video lazy loads after initial page load
4. ✅ Map lazy loads when scrolled to
5. ✅ Animations run at 60 FPS
6. ✅ Page is interactive within 2 seconds
7. ✅ No console errors
8. ✅ Smooth scrolling on all devices

## Monitoring

After deployment, monitor:
- Core Web Vitals in Google Search Console
- Real User Monitoring (RUM) data
- PageSpeed Insights scores
- User feedback on performance

---

Happy Testing! 🚀

