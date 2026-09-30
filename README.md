# Aletheia Voice Packs: current edition and archive

Source for the Voice Pack pages on thealetheiaproject.org:

| Page | URL | WordPress file |
|---|---|---|
| Current Voice Pack, *Heard. Understood. Me.* (April 2026, revised Sept 2026) | `/our-work/voice-packs/heard-understood-me/` | `deliverables/wordpress/voice-pack-current-edition-heard-understood-me.html` |
| The Voice Pack Archive (landing) | `/our-work/voice-packs/archive/` | `deliverables/wordpress/voice-pack-archive-landing.html` |
| Archive Edition 01 · Know Your Body | `/our-work/voice-packs/archive/know-your-body/` | `…archive-01-know-your-body.html` |
| Archive Edition 02 · Find the Words | `/our-work/voice-packs/archive/find-the-words/` | `…archive-02-find-the-words.html` |
| Archive Edition 03 · Use Your Voice | `/our-work/voice-packs/archive/use-your-voice/` | `…archive-03-use-your-voice.html` |
| Archive Edition 04 · From Voice to Change | `/our-work/voice-packs/archive/from-voice-to-change/` | `…archive-04-from-voice-to-change.html` |
| Voice Packs page, top section (current edition) | existing `/our-work/voice-packs/` | `voice-packs-page-section-1-current-edition.html` |
| Voice Packs page, near-end section (archive) | existing `/our-work/voice-packs/` | `voice-packs-page-section-2-archive-teaser.html` |

Also in `deliverables/`: five A4 PDFs (`pdf/`), six 1200×630 social images (`social/`), and `seo.json` (title, description and social image for every page). The corrected page-by-page copy for the Canva version of the April pack is in `canva/`.

To publish, follow **[HANDOFF.md](HANDOFF.md)**.

## How it's built

The site is WordPress (Qi theme, Elementor), so each page is generated as a self-contained HTML fragment for an Elementor **HTML** widget. All CSS is scoped under `.avp`, so it can't affect the theme, and every graphic is inline SVG, so nothing needs uploading to the media library except the PDFs.

```
src/content/      one file per pack: chapters made of typed blocks (the words live here)
src/lib/          components.mjs (reusable blocks), graphics.mjs (original SVGs), page.mjs, routes.mjs
src/styles/       avp.css: Aletheia tokens + per-edition themes
scripts/          build, check, pdf, screens, canva-copy, release
```

Reusable components include `VoicePackHero`, `EditionBadge`, `PackContents` (sticky contents and progress bar), `SectionIntro`, `VocabularyCard`, `ScenarioCard`, `WordsYouCanUse`, `ConversationScript`, `ActionPathway`, `CareLevels`, `ReflectionPrompt`, `DismissalCard`, `ArchiveAnnotation`, `WhereItWentNext`, `EditionPager` and `ResourceFooter`. To change any wording, edit the pack file in `src/content/`, then run:

```
npm install        # fonts for local previews and PDFs
npm run all        # build → check → pdf → screenshots → canva copy → deliverables/
```

`npm run check` tests heading order, accessible names on every graphic, duplicate IDs, in-page anchors, safe new-tab links and WCAG AA contrast for the colour pairs used, then lists every internal URL. `npm run shots` screenshots every page at 390, 820, 1280 and 1600px and fails on horizontal overflow.

All internal links are in `src/lib/routes.mjs`. If a live slug differs, change it there and rebuild.
