# Mohs Wound Care

Plain-language wound care instructions for patients after Mohs surgery, with a cited source for every medical
statement. Live at [mohswoundcare.com](https://mohswoundcare.com).

Written for older adults: large type, a text-size control, high contrast, single-click navigation, printable pages,
and a reading level around 6th grade.

## Pages

| Path | Content |
| --- | --- |
| `/` | Choose your wound type, warning signs |
| `/first-48-hours` | First bandage, bleeding, medicines, swelling |
| `/stitches`, `/tape-strips`, `/staples`, `/skin-graft`, `/open-wound` | Daily care by closure type |
| `/warning-signs` | Call 911 / call surgeon today / normal, infection |
| `/pain` | Acetaminophen and ibuprofen dosing and safety |
| `/scars-and-sun` | Scar changes, sun protection, skin checks |
| `/daily-life` | Activity, showering, sleep, smoking, eating |
| `/resources` | Patient links from medical societies and agencies |
| `/about` | Author, sourcing policy, privacy, contact |

Old hash links (`/#/steri-strips`) and old paths (`/steri-strips`) redirect to the new pages.

## How citations work

- Every source lives in `src/content/sources.js` (id, citation, URL).
- In a page, `<Cite id="smack-1996" />` or `<Cite id={['a', 'b']} />` adds a numbered link.
- Numbers follow the order of first use on each page, and the page's source list is built from them.
- An unknown id throws, so a bad citation fails the tests and the page render.
- The shared warning lists are in `src/components/WhenToCall.js`.
- Update `LAST_REVIEWED` in `src/content/site.js` after each content review.

## Commands

```sh
npm install
npm start          # dev server on http://localhost:3000
npm test           # renders every page, checks every citation and redirect
npm run build      # production build in build/
npm run deploy     # builds and publishes build/ to the gh-pages branch
```

`public/CNAME` keeps the custom domain. `public/404.html` sends deep links back to the app on GitHub Pages.
