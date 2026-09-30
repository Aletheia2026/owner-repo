# Publishing handoff (Claude Desktop + Claude in Chrome)

This work was built in a cloud session with no access to WordPress or the Voice Pack's Canva file. Everything is ready to publish; these steps are for the Desktop session with Chrome connected.

## 0. Confirm slugs (2 minutes)

Hover **Our Work** on the live site and check the URLs of these pages. `src/lib/routes.mjs` assumes the ones below. Only Youth Workshops is confirmed (from the Workshop Catalogue).

- `/our-work/voice-packs/`
- `/our-work/digital-health-education/`, `/our-work/multilingual-resources/`, `/our-work/empower-packs/`
- `/our-work/self-advocacy-journal-health-navigator/`
- `/our-work/youth-decision-making/youth-consultation/`, `…/youth-roundtables/`
- `/our-work/youth-research/`, `/our-work/youth-research/youth-research-journal/`
- `/our-work/youth-executive-council/`, `/our-work/aletheia-voices/`

If any differ, it's quicker to find-and-replace the wrong path inside the `deliverables/wordpress/*.html` files than to rebuild.

## 1. Upload the PDFs and social images

Media → Add New: upload the five files in `deliverables/pdf/` and six in `deliverables/social/`. Keep the filenames. The pages link to `/wp-content/uploads/2026/10/<filename>`; if WordPress puts them in a different month folder, find-and-replace `/wp-content/uploads/2026/10/` in the HTML files.

## 2. Create the five new pages

For each, create the page (Pages → Add New), set the **parent** so the URL nests correctly, choose the full-width / Elementor Canvas-style template the other program pages use, open in Elementor, add one **HTML** widget, and paste the whole file.

| Title | Parent | Slug | Paste |
|---|---|---|---|
| Heard. Understood. Me. | Voice Packs | `heard-understood-me` | `voice-pack-current-edition-heard-understood-me.html` |
| Voice Pack Archive | Voice Packs | `archive` | `voice-pack-archive-landing.html` |
| Know Your Body | Voice Pack Archive | `know-your-body` | `voice-pack-archive-01-know-your-body.html` |
| Find the Words | Voice Pack Archive | `find-the-words` | `voice-pack-archive-02-find-the-words.html` |
| Use Your Voice | Voice Pack Archive | `use-your-voice` | `voice-pack-archive-03-use-your-voice.html` |
| From Voice to Change | Voice Pack Archive | `from-voice-to-change` | `voice-pack-archive-04-from-voice-to-change.html` |

The pages carry their own H1, so hide the theme's page-title banner on these (Qi page settings → Title area off) to avoid two titles.

SEO: for each page, copy the title, description and social image from `deliverables/seo.json` into the SEO plugin fields if one is installed (otherwise WordPress uses the page title).

## 3. Update the Voice Packs page (current edition becomes the focus)

1. At the **top**, under the page banner, add an HTML widget with `voice-packs-page-section-1-current-edition.html`.
2. **Towards the end**, before the closing banner, add an HTML widget with `voice-packs-page-section-2-archive-teaser.html`.
3. Update the existing info-pack text/buttons so any "April 2026 edition" link points to `/our-work/voice-packs/heard-understood-me/` and the new PDF.

## 4. Menu

Appearance → Menus: under **Our Work → Voice Packs**, add *Heard. Understood. Me.* and *Voice Pack Archive* as third-level items (they use the right-opening sub-menus fixed earlier). Edition pages don't need menu items; they're linked from the archive.

## 5. Canva

Open the Voice Pack design (canva.link/72keyv94alp0nx0) in Chrome and replace the text page by page from `canva/April-2026-Voice-Pack-Canva-Copy.md` (65 pages; pages marked NEW are duplicates of the nearest similar page). Then export a PDF and, if you prefer the Canva design as the download, replace `Aletheia-Voice-Pack-April-2026-Heard-Understood-Me.pdf` with it (same filename). The Canva connector in the cloud session was refused access to this design, so it's probably owned by a different Canva account from the one connected to Claude.

## 6. Verify live

Clear the site cache, then check each new URL on desktop and phone: the contents sidebar stays in view while scrolling, the red progress bar moves, the PDF buttons open, and the menu shows the new items. Run a quick search for any leftover "PCOS" in the old Voice Packs page copy (the current name is PMOS).

---

## Narrative QA: the five editions side by side

| Question | Answer |
|---|---|
| Is Edition 01 already good? | Yes. Accurate labelled anatomy, puberty ranges, the cycle, products and TSS, eight myth/fact pairs, and three-tier "when to check in" guidance. Good health education on its own. |
| Is 01 → 02 substantive? | Yes. 02 adds the whole *language* layer: baseline, five describing questions, pain words, body map, a pain scale scored by what it stops you doing, mood words, a tracker, booking and opening scripts. |
| Does 03 add real navigation? | Yes. Dismissal named and explained (bias, diagnostic delay), appointment flow, four conversation scripts, a care map, "where to start" table, an after-appointment decision tree, referrals and second opinions, the seven Charter rights, consent, confidentiality at 14 and 15, complaints, and identity-specific care. |
| Does 04 add collective and system thinking? | Yes. Pattern and systems lens with Australian evidence, issue → barrier → action, lived experience as expertise, a safe-sharing checklist, where young voices count (school, services, hospitals, councils, governments), writing to decision-makers, and a participation ladder with tokenism named. |
| Is there an obvious trajectory? | Yes. Questions, frameworks (3 → 4 → 5 → 6 steps), accent colours (blue → ochre → green → plum → Aletheia red) and graphics (diagrams → speech → maps → networks → loop) all move together. Maya's single story runs through all four. |
| Does 04 lead naturally into today's Aletheia? | Yes. Its "where this went next" points to Consultation, Roundtables, the Council and Research, and its pager leads to the current edition. |
| Does 04 compete with the current edition? | No. 04 presents its tools side by side, recognises systems, and cites evidence in general terms. The current edition has the only integrated model (the loop, with every tool tagged by stage), "start where you are" entry points, the six-line symptom story, 17 dismissal cards each with a next move, the precise inquiry figures, the new PMOS naming, a full support directory, and Aletheia's own participation pathways. |
| Does the current edition synthesise the earlier ones? | Yes. Body words (01), describing and tracking (02), navigation, scripts and rights (03), and me-to-we plus safe storytelling (04) are all inside it, joined by the loop. |
| Still Aletheia in look and voice? | Yes. Cream/ink/red, Fraunces + DM Sans, plain Australian English, "you can say" lines, and no invented statistics, partners or dates. Archive editions are labelled Archive Edition 01–04 with no dates; scenarios are marked fictional. |

## Things to know

- **Anonymous blog stories.** You mentioned using real anonymous stories from an Aletheia blog. The blog wasn't reachable from the cloud session and no copy was found in Drive, so no real quotes were used; every scenario is labelled fictional. If you point to the post, they can be added as pull quotes (with the authors' original consent terms respected).
- **History wording.** The archive says each edition "has been re-edited and re-set for this archive", which is accurate for what was done. It doesn't give dates or claim when each edition was first published.
