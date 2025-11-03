# Video Assets

## Adding Your Hero Video

To add your hero background video:

1. **Place your video file** in this directory (`public/videos/`)
2. **Name it** `hero-video.mp4` (or update the filename in `app/page.tsx`)
3. **Recommended specs:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or higher
   - Duration: 10-30 seconds (will loop)
   - File size: Keep under 10MB for optimal loading
   - Aspect ratio: 16:9

## Video Optimization Tips

For best performance:
- Use a compressed MP4 format
- Consider using a service like HandBrake to optimize
- Keep the bitrate reasonable (3-5 Mbps is usually fine)

## Fallback

If no video is added, the hero section will show a beautiful gradient background instead.

## Project Videos

Place your architectural project videos here as well:
- `project1.mp4`
- `project2.mp4`
- etc.

Update the video URLs in `/lib/data.ts` to match your filenames.

