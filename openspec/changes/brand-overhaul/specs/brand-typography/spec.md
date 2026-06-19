## ADDED Requirements

### Requirement: Jakarta Sans and Montserrat fonts are imported
The system SHALL import Jakarta Sans and Montserrat fonts from Google Fonts.

#### Scenario: Google Fonts are loaded in index.html
- **WHEN** index.html is loaded
- **THEN** Google Fonts link tag SHALL include Jakarta Sans and Montserrat
- **AND** SHALL use display=swap for performance
- **AND** SHALL include preconnect hints for font domains

### Requirement: Font hierarchy uses Jakarta Sans for headings
The system SHALL use Jakarta Sans font for all heading elements (H1-H4).

#### Scenario: Headings use Jakarta Sans
- **WHEN** H1, H2, H3, or H4 elements are rendered
- **THEN** font-family SHALL be Jakarta Sans
- **AND** SHALL include appropriate fallback fonts

#### Scenario: Heading font weights are appropriate
- **WHEN** headings are displayed
- **THEN** font weights SHALL be 600 (semibold) for H1-H2
- **AND** font weights SHALL be 500 (medium) for H3-H4

### Requirement: Font hierarchy uses Montserrat for body text
The system SHALL use Montserrat font for all body text and paragraph content.

#### Scenario: Body text uses Montserrat
- **WHEN** paragraph or body text elements are rendered
- **THEN** font-family SHALL be Montserrat
- **AND** SHALL include appropriate fallback fonts

#### Scenario: Body font weights are appropriate
- **WHEN** body text is displayed
- **THEN** font weights SHALL be 400 (regular) by default
- **AND** MAY use 300 (light) for subtle text
- **AND** MAY use 500 (medium) for emphasis

### Requirement: Font fallback chain is defined
The system SHALL define a proper font fallback chain to ensure text remains readable if fonts fail to load.

#### Scenario: Fallback fonts are specified
- **WHEN** custom fonts fail to load
- **THEN** system SHALL fallback to system-ui, -apple-system, sans-serif
- **AND** text SHALL remain readable

### Requirement: Font loading does not cause FOUC
The system SHALL use font-display strategies to prevent Flash of Unstyled Content.

#### Scenario: Fonts load with display=swap
- **WHEN** fonts are being loaded
- **THEN** text SHALL be visible immediately with fallback fonts
- **AND** custom fonts SHALL swap in when loaded
