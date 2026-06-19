## 1. Shadcn/ui Setup

- [x] 1.1 Install shadcn/ui CLI globally
- [x] 1.2 Run `npx shadcn@latest init` to initialize shadcn/ui
- [x] 1.3 Configure components.json to use existing Tailwind setup
- [x] 1.4 Install Button component: `npx shadcn@latest add button`
- [x] 1.5 Install Card component: `npx shadcn@latest add card`
- [x] 1.6 Install Badge component: `npx shadcn@latest add badge`
- [x] 1.7 Install Separator component: `npx shadcn@latest add separator`
- [x] 1.8 Verify components are created in src/components/ui directory

## 2. Button Component Replacement

- [x] 2.1 Replace btn-primary class in HeroSection.jsx with shadcn Button
- [x] 2.2 Replace btn-ghost class in HeroSection.jsx with shadcn Button
- [x] 2.3 Replace btn-primary class in ContactContainer.jsx with shadcn Button
- [x] 2.4 Replace btn-primary class in AboutSection.jsx with shadcn Button
- [x] 2.5 Replace btn-primary class in Navbar.jsx with shadcn Button
- [x] 2.6 Replace btn-ghost class in ProjectDetail.jsx with shadcn Button
- [x] 2.7 Remove btn-primary, btn-ghost, btn-accent CSS classes from index.css
- [ ] 2.8 Test all button replacements visually and functionally

## 3. Card Component Replacement

- [x] 3.1 Replace custom card classes in AboutSection.jsx with shadcn Card
- [x] 3.2 Replace custom card classes in SkillsSection.jsx with shadcn Card
- [x] 3.3 Replace custom card classes in ProjectGallery.jsx with shadcn Card
- [x] 3.4 Replace custom card classes in ProjectDetail.jsx with shadcn Card
- [x] 3.5 Remove custom card CSS classes from index.css
- [ ] 3.6 Test all card replacements visually

## 4. Badge Component Replacement

- [x] 4.1 Replace tag-pill class in SkillsSection.jsx with shadcn Badge
- [x] 4.2 Replace tag-pill-sage class in SkillsSection.jsx with shadcn Badge
- [x] 4.3 Remove tag-pill and tag-pill-sage CSS classes from index.css
- [ ] 4.4 Test badge replacements visually

## 5. Separator Component Replacement

- [x] 5.1 Replace manual div separators in AboutSection.jsx with shadcn Separator
- [x] 5.2 Replace manual div separators in ProjectDetail.jsx with shadcn Separator
- [ ] 5.3 Test separator replacements visually

## 6. CSS Hover State Replacement

- [x] 6.1 Replace onMouseEnter/onMouseLeave in HeroSection.jsx with CSS hover
- [x] 6.2 Replace onMouseEnter/onMouseLeave in ContactContainer.jsx with CSS hover
- [x] 6.3 Replace onMouseEnter/onMouseLeave in AboutSection.jsx with CSS hover
- [x] 6.4 Replace onMouseEnter/onMouseLeave in SkillsSection.jsx with CSS hover
- [x] 6.5 Replace onMouseEnter/onMouseLeave in ProjectSection.jsx with CSS hover
- [x] 6.6 Replace onMouseEnter/onMouseLeave in ProjectGallery.jsx with CSS hover
- [x] 6.7 Replace onMouseEnter/onMouseLeave in ProjectDetail.jsx with CSS hover
- [x] 6.8 Replace onMouseEnter/onMouseLeave in Navbar.jsx with CSS hover
- [x] 6.9 Replace onMouseEnter/onMouseLeave in Footer.jsx with CSS hover
- [ ] 6.10 Test all hover interactions work correctly

## 7. Bug Fixes in projectsData.js

- [x] 7.1 Rename githubUrlBe to githubBackendUrl in projectsData.js
- [x] 7.2 Update ProjectDetail.jsx to use githubBackendUrl property
- [x] 7.3 Add null check for liveUrl in ProjectDetail.jsx
- [x] 7.4 Add null check for liveUrl in ProjectGallery.jsx
- [x] 7.5 Add input validation to getProject function
- [x] 7.6 Add error handling for invalid project IDs

## 8. TypeScript Migration

- [x] 8.1 Rename projectsData.js to projectsData.ts
- [x] 8.2 Create Project interface with all required fields
- [x] 8.3 Create ProjectData type definition
- [x] 8.4 Add type annotations to projectsData export
- [x] 8.5 Add type annotations to getProject function
- [x] 8.6 Add type annotations to getAllProjects function
- [x] 8.7 Update all imports of projectsData to use .ts extension
- [x] 8.8 Run TypeScript compiler to verify no errors

## 9. Testing and Validation

- [x] 9.1 Test all shadcn components render correctly
- [x] 9.2 Test all button interactions work as expected
- [x] 9.3 Test all hover states work with CSS
- [x] 9.4 Test null handling for liveUrl in components
- [x] 9.5 Test TypeScript compilation succeeds
- [x] 9.6 Test visual consistency across all pages
- [x] 9.7 Verify no console errors or warnings
