## ADDED Requirements

### Requirement: Next.js App Router is configured
The system SHALL use Next.js App Router with Server Components for SEO-friendly rendering.

#### Scenario: Create Next.js project
- **WHEN** developer creates new Next.js project
- **THEN** project SHALL use App Router pattern
- **AND** SHALL use Server Components by default
- **AND** SHALL use TypeScript for type safety

#### Scenario: Migrate components to Next.js
- **WHEN** components are migrated from Vite
- **THEN** they SHALL be adapted to Next.js patterns
- **AND** SHALL use Server Components where possible
- **AND** SHALL use Client Components only for interactive elements

### Requirement: Routing is converted from React Router to Next.js
The system SHALL use Next.js file-based routing instead of React Router.

#### Scenario: Convert routing structure
- **WHEN** pages are migrated
- **THEN** they SHALL use Next.js App Router file structure
- **AND** SHALL use app/ directory for pages
- **AND** SHALL use dynamic routes for project details

#### Scenario: Navigation works correctly
- **WHEN** user navigates between pages
- **THEN** navigation SHALL use Next.js Link component
- **AND** SHALL maintain scroll position
- **AND** SHALL preserve query parameters

### Requirement: Build system is migrated from Vite to Next.js
The system SHALL use Next.js build system instead of Vite.

#### Scenario: Build configuration
- **WHEN** project is built
- **THEN** it SHALL use Next.js build command
- **AND** SHALL generate optimized production build
- **AND** SHALL include all necessary optimizations

#### Scenario: Development server
- **WHEN** developer runs development server
- **THEN** it SHALL use Next.js dev server
- **AND** SHALL support hot module replacement
- **AND** SHALL match Vite development experience
