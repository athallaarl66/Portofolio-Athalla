## ADDED Requirements

### Requirement: Dynamic metadata is generated per page
The system SHALL generate dynamic metadata (title, description, Open Graph tags) for each page.

#### Scenario: Homepage metadata
- **WHEN** homepage is rendered
- **THEN** title SHALL include "Athalla Arli Abhinaya - Fullstack Developer"
- **AND** description SHALL include personal branding keywords
- **AND** Open Graph tags SHALL be set for social preview

#### Scenario: Project page metadata
- **WHEN** project detail page is rendered
- **THEN** title SHALL include project name
- **AND** description SHALL include project description
- **AND** Open Graph image SHALL use project thumbnail

#### Scenario: About page metadata
- **WHEN** about page is rendered
- **THEN** title SHALL include "About - Athalla Arli Abhinaya"
- **AND** description SHALL include education and experience summary
- **AND** structured data SHALL include Person schema

### Requirement: Open Graph tags are configured
The system SHALL include Open Graph tags for social media preview.

#### Scenario: Social media preview
- **WHEN** URL is shared on social media
- **THEN** Open Graph tags SHALL provide preview
- **AND** SHALL include og:title, og:description, og:image
- **AND** SHALL use appropriate image dimensions

#### Scenario: Twitter Card tags
- **WHEN** URL is shared on Twitter
- **THEN** Twitter Card tags SHALL provide preview
- **AND** SHALL use summary card type
- **AND** SHALL include twitter:title, twitter:description, twitter:image
