## ADDED Requirements

### Requirement: Color palette uses green-focused scheme
The system SHALL use a green-focused color palette with four main colors: #091413 (dark green/black), #285A48 (dark green), #408A71 (medium green), and #B0E4CC (light mint).

#### Scenario: CSS variables define new palette
- **WHEN** index.css is loaded
- **THEN** CSS variables --deep, --teal, --sage, and --pale SHALL contain the new color values
- **AND** RGB versions --deep-rgb, --teal-rgb, --sage-rgb, --pale-rgb SHALL contain the corresponding RGB values

#### Scenario: Background color uses new palette
- **WHEN** body background is rendered
- **THEN** --background variable SHALL use #091413
- **AND** surface colors SHALL use shades of the new palette

### Requirement: All components use CSS variables for colors
The system SHALL use CSS variables for all color references instead of hardcoded hex values.

#### Scenario: Component inline styles use CSS variables
- **WHEN** components reference colors in inline styles
- **THEN** they SHALL use var(--variable-name) syntax
- **AND** SHALL NOT use hardcoded hex values like #281C59 or #4E8D9C

#### Scenario: BackgroundAurora uses new color stops
- **WHEN** BackgroundAurora component renders
- **THEN** colorStops prop SHALL use colors from the new palette
- **AND** SHALL be configurable via props

### Requirement: Color semantic mapping is preserved
The system SHALL maintain the semantic meaning of color variables (background → primary → secondary → accent) while using new values.

#### Scenario: Primary interactive color uses new teal
- **WHEN** interactive elements (buttons, links) need primary color
- **THEN** they SHALL use var(--teal) which maps to #285A48
- **AND** hover states SHALL use appropriate shades

#### Scenario: Accent color uses new pale
- **WHEN** accent elements (highlights, bright text) need accent color
- **THEN** they SHALL use var(--pale) which maps to #B0E4CC
- **AND** SHALL maintain sufficient contrast against dark backgrounds
