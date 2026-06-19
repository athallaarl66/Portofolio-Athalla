## ADDED Requirements

### Requirement: Shadcn/ui is installed and configured
The system SHALL have shadcn/ui CLI installed and properly configured with the existing Tailwind setup.

#### Scenario: Initialize shadcn/ui
- **WHEN** developer runs `npx shadcn@latest init`
- **THEN** components.json configuration file SHALL be created
- **AND** configuration SHALL use existing Tailwind CSS setup
- **AND** components directory SHALL be created at src/components/ui

#### Scenario: Install required components
- **WHEN** developer runs shadcn add command for Button, Card, Badge, Separator
- **THEN** component files SHALL be created in src/components/ui
- **AND** dependencies SHALL be added to package.json
- **AND** components SHALL be ready for import and use

### Requirement: Custom button classes are replaced with shadcn Button
The system SHALL replace btn-primary, btn-ghost, btn-accent CSS classes with shadcn Button component.

#### Scenario: btn-primary replaced with Button
- **WHEN** btn-primary class is used
- **THEN** it SHALL be replaced with Button component
- **AND** SHALL use variant="default" with custom gradient styling
- **AND** SHALL maintain same visual appearance as original

#### Scenario: btn-ghost replaced with Button
- **WHEN** btn-ghost class is used
- **THEN** it SHALL be replaced with Button component
- **AND** SHALL use variant="ghost"
- **AND** SHALL maintain same visual appearance as original

#### Scenario: btn-accent replaced with Button
- **WHEN** btn-accent class is used
- **THEN** it SHALL be replaced with Button component
- **AND** SHALL use variant="default" with sage background
- **AND** SHALL maintain same visual appearance as original

### Requirement: Custom card classes are replaced with shadcn Card
The system SHALL replace custom card CSS classes with shadcn Card component structure.

#### Scenario: Custom cards replaced with Card
- **WHEN** custom card classes are used
- **THEN** they SHALL be replaced with Card, CardHeader, CardContent components
- **AND** SHALL maintain same visual appearance as original
- **AND** SHALL use proper semantic structure

### Requirement: Custom badge classes are replaced with shadcn Badge
The system SHALL replace tag-pill and tag-pill-sage CSS classes with shadcn Badge component.

#### Scenario: tag-pill replaced with Badge
- **WHEN** tag-pill class is used
- **THEN** it SHALL be replaced with Badge component
- **AND** SHALL use variant="outline" or custom styling
- **AND** SHALL maintain same visual appearance as original

#### Scenario: tag-pill-sage replaced with Badge
- **WHEN** tag-pill-sage class is used
- **THEN** it SHALL be replaced with Badge component
- **AND** SHALL use sage color scheme
- **AND** SHALL maintain same visual appearance as original

### Requirement: Manual separators are replaced with shadcn Separator
The system SHALL replace manual `<div className="h-px" />` separators with shadcn Separator component.

#### Scenario: Manual div separators replaced with Separator
- **WHEN** manual div separator is used
- **THEN** it SHALL be replaced with Separator component
- **AND** SHALL maintain same visual appearance as original
