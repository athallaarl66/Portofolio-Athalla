## ADDED Requirements

### Requirement: projectsData uses TypeScript interfaces
The system SHALL use TypeScript interfaces to define the structure of project data.

#### Scenario: Project interface defines structure
- **WHEN** projectsData is defined
- **THEN** it SHALL use TypeScript interfaces
- **AND** SHALL define Project interface with all required fields
- **AND** SHALL provide type safety for all project properties

#### Scenario: Helper functions are typed
- **WHEN** getProject and getAllProjects functions are used
- **THEN** they SHALL have proper TypeScript return types
- **AND** SHALL accept typed parameters
- **AND** SHALL provide type safety at compile time

### Requirement: Inconsistent property naming is fixed
The system SHALL use consistent naming conventions for project data properties.

#### Scenario: githubUrlBe renamed to githubBackendUrl
- **WHEN** project data references backend repository
- **THEN** property SHALL be named githubBackendUrl
- **AND** SHALL NOT use githubUrlBe
- **AND** SHALL maintain consistent naming with githubUrl

### Requirement: Null values are properly handled
The system SHALL handle null values for optional properties like liveUrl.

#### Scenario: Components handle null liveUrl
- **WHEN** project has null liveUrl
- **THEN** components SHALL not render live demo link
- **AND** SHALL not throw errors
- **AND** SHALL gracefully handle missing values

#### Scenario: Helper functions validate input
- **WHEN** getProject is called with invalid id
- **THEN** function SHALL return null or throw appropriate error
- **AND** SHALL not return undefined
- **AND** SHALL provide clear error handling

### Requirement: File extension is updated to TypeScript
The system SHALL use .ts extension for the projects data file.

#### Scenario: projectsData.js renamed to projectsData.ts
- **WHEN** projects data file is converted to TypeScript
- **THEN** file extension SHALL be .ts
- **AND** all imports SHALL be updated to use .ts extension
- **AND** TypeScript compiler SHALL process the file
