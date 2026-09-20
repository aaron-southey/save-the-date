# Aaron & Charlotte — Save the Date

Cinematic single-page Next.js wedding invitation experience.

## Development

```bash
npm install
npm run dev
```

## Replaceable image placeholders

Place final images in `/public/images` and keep/update these paths in `lib/wedding.ts`:

- `/images/couple-hero.svg`
- `/images/story-placeholder.svg`
- `/images/venue-placeholder.svg`
- `/images/gallery-1.svg`
- `/images/gallery-2.svg`
- `/images/gallery-3.svg`
- `/images/gallery-4.svg`
- `/images/og-placeholder.svg`

## Central config

Update all wedding content in `lib/wedding.ts`.

## Calendar download

The **Add to calendar** button generates a client-side `.ics` file via `lib/calendar.ts`.
