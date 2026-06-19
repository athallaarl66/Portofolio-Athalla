## Context

Current portfolio uses a generic purple/teal/sage color palette (#281C59, #4E8D9C, #85C79A, #EDF7BD) that feels AI-generated. No custom fonts are imported - using system defaults. Copywriting across all sections uses template-like phrases ("Let's build something remarkable", "Engineering with purpose", etc.) and AI patterns (section-label-dot, emojis, repetitive radial gradients). The goal is to establish a unique brand identity with a cohesive green-focused palette, professional typography, and authentic copywriting.

## Goals / Non-Goals

**Goals:**
- Replace entire color palette with new green-focused palette (#091413, #285A48, #408A71, #B0E4CC)
- Integrate Jakarta Sans and Montserrat fonts with proper hierarchy
- Rewrite all copywriting to be authentic and personality-driven
- Remove AI patterns (section-label-dot, emojis, repetitive radial gradients)
- Ensure consistent color usage across all components via CSS variables

**Non-Goals:**
- No backend or API changes
- No new features or functionality
- No layout structure changes (keeping existing component structure)
- No new dependencies beyond Google Fonts

## Decisions

**Color Palette Mapping:**
- `--background`: #08080f → #091413 (dark green/black)
- `--deep` (#281C59): → #091413 (primary background)
- `--teal` (#4E8D9C): → #285A48 (primary interactive)
- `--sage` (#85C79A): → #408A71 (secondary/highlight)
- `--pale` (#EDF7BD): → #B0E4CC (accent/bright text)
- RGB versions updated accordingly for rgba() usage

*Why this mapping?* Maintains semantic meaning (background → primary → secondary → accent) while shifting to the requested green palette. Preserves existing CSS variable structure for minimal component changes.

**Font Strategy:**
- Jakarta Sans for headings (H1-H4) - modern, geometric, good for large display text
- Montserrat for body text - humanist, highly readable at smaller sizes
- Font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Fallback: system-ui, -apple-system, sans-serif

*Why this pairing?* Jakarta Sans provides contemporary feel for headings while Montserrat ensures excellent readability for body content. This is a common professional pairing.

**Copywriting Approach:**
- Remove generic phrases and replace with specific, personal language
- Remove emojis (🎓💼) and replace with Lucide icons or remove entirely
- Remove section-label-dot (pulsing dot) pattern
- Reduce repetitive radial gradients to 1-2 strategic uses instead of every section
- Write from first-person perspective with actual voice and personality

*Why this approach?* Generic AI copy lacks authenticity. Personal, specific language builds trust and connection with visitors.

**Implementation Order:**
1. Update CSS variables in index.css (foundation)
2. Add Google Fonts import to index.html
3. Setup font-family CSS variables
4. Update BackgroundAurora colorStops
5. Update all component inline styles to use new CSS variables
6. Rewrite copywriting in each component
7. Remove AI patterns (dots, emojis, excess gradients)

*Why this order?* CSS changes first establish the foundation, then component updates, then content changes. This ensures visual consistency before copywriting work.

## Risks / Trade-offs

**Risk:** Color palette change may affect contrast and accessibility
**Mitigation:** Test contrast ratios for all text/background combinations, especially the new lighter accent (#B0E4CC) on dark backgrounds

**Risk:** Font loading may cause FOUC (Flash of Unstyled Content)
**Mitigation:** Use Google Fonts with proper `display=swap` and preconnect hints

**Risk:** Copywriting rewrite may lose some information or clarity
**Mitigation:** Review all rewritten content against original to ensure no key information is lost

**Trade-off:** Removing all radial gradients may reduce visual interest
**Mitigation:** Keep 1-2 strategic gradient uses (e.g., HeroSection) for depth while removing repetitive usage

## Migration Plan

1. Update index.css CSS variables
2. Add Google Fonts to index.html with preconnect
3. Update font-family in body and headings
4. Update BackgroundAurora colorStops in Home.jsx
5. Update all components with inline color styles (HeroSection, ContactContainer, AboutSection, SkillsSection, ProjectSection, ProjectGallery, ProjectDetail)
6. Rewrite copywriting in each component
7. Remove section-label-dot CSS class and usage
8. Remove emojis from AboutSection
9. Reduce radial gradients to strategic uses only
10. Test visual consistency across all pages

**Rollback strategy:** Git commit after each major step allows easy rollback if issues arise.

## Open Questions

- Should Jakarta Sans be used for all headings or only H1-H2? (Currently planning all headings)
- Should any radial gradients be kept, or remove all? (Currently planning to keep 1-2 strategic uses)
- Font loading strategy: should we use `display=swap` or `display=optional`? (Currently planning `display=swap`)
