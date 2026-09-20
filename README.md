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
- `/images/spark-placeholder.svg`
- `/images/og-placeholder.svg`

## Central config

Update all wedding content in `lib/wedding.ts`.

- Story wording is under `wedding.story`
- Dog section content is under `wedding.dog` (Spark)

## Calendar download

The **Add to calendar** button generates a client-side `.ics` file via `lib/calendar.ts`.

- Leave both `start` and `end` empty in `lib/wedding.ts` for an all-day event.
- Provide **both** `start` and `end` (HH:mm) for a timed event.

## Invite personalisation via query params

You can personalise the invitation for singles or couples:

- Single: `/?name=Alex`
- Couple: `/?name1=Alex&name2=Jordan`

Supported single keys: `to`, `name`, `guest`, `invitee`, `person`  
Supported pair keys: `name1/name2`, `guest1/guest2`, `first/second`
