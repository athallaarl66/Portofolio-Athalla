## Why

The current portfolio design feels "AI-generated" with generic color palette (purple/teal/sage), no custom fonts, and template-like copywriting. This lacks personal identity and authenticity. The goal is to establish a unique brand identity with a cohesive green-focused color palette, professional typography (Jakarta Sans + Montserrat), and authentic human-written copywriting that reflects the developer's actual personality and experience.

## What Changes

- **Color palette overhaul**: Replace current palette (#281C59, #4E8D9C, #85C79A, #EDF7BD) with new green-focused palette (#091413, #285A48, #408A71, #B0E4CC) across all CSS variables, components, and BackgroundAurora
- **Font integration**: Add Jakarta Sans and Montserrat fonts from Google Fonts, setup font-family CSS variables, and apply appropriate font pairings (headings vs body text)
- **Copywriting rewrite**: Replace all AI-sloppy copywriting with authentic, personal language across HeroSection, ContactContainer, AboutSection, SkillsSection, and project descriptions
- **Remove AI patterns**: Remove section-label-dot (pulsing dot), emojis (🎓💼), and repetitive radial gradients that contribute to the generic AI feel
- **Update all inline styles**: Migrate hardcoded color values in components to use new CSS variables

## Capabilities

### New Capabilities

- `brand-color-system`: Centralized color palette management with CSS variables for consistent theming
- `brand-typography`: Font integration and typography system with Jakarta Sans + Montserrat
- `authentic-copywriting`: Human-written, personality-driven copywriting across all sections

### Modified Capabilities

None (no existing spec-level behavior changes)

## Impact

- **Affected code**: All components (HeroSection, ContactContainer, AboutSection, SkillsSection, ProjectSection, ProjectGallery, ProjectDetail), index.css, BackgroundAurora component
- **Dependencies**: Add Google Fonts import for Jakarta Sans and Montserrat
- **Breaking changes**: None - this is a visual/content overhaul, not API changes
- **Systems**: No backend or API changes, purely frontend visual and content updates
