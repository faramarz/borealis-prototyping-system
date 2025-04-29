# Changelog

## [Unreleased]

### Added
- Storybook configuration for UI components
- Webpack configuration for workspace package resolution
- TypeScript path mappings for UI components
- UI component package with tsup build configuration
- Initial set of UI components (Button, Checkbox, Label, etc.)

### Changed
- Updated package.json dependencies for Storybook and UI components
- Configured monorepo workspace settings

### Fixed
- Resolved module resolution issues in Storybook
- Fixed UI component import paths
- Added proper build step for UI package

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the UI package:
   ```bash
   cd packages/ui && pnpm build
   ```
4. Start Storybook:
   ```bash
   cd apps/web && pnpm storybook
   ```

## Implementation Notes

### Project Structure
- UI components are in `packages/ui`
- Storybook stories are in `apps/web/src/stories/UI`
- Component documentation in Storybook

### Key Configuration Files
1. Webpack Config (`apps/web/.storybook/webpack.config.ts`)
   - Added alias for `@workspace/ui` package
   - Configured path resolution for workspace packages

2. TypeScript Config (`apps/web/tsconfig.json`)
   - Added path mappings for UI components
   - Configured module resolution

3. UI Package (`packages/ui`)
   - Built with tsup
   - Exports components through `src/index.ts`
   - Includes TypeScript configuration

### Common Issues and Solutions
1. Module Resolution
   - Problem: Storybook couldn't resolve `@workspace/ui`
   - Solution: Added webpack alias and TypeScript path mapping

2. Build Requirements
   - Problem: UI components weren't available
   - Solution: Must build UI package before running Storybook
   - Command: `cd packages/ui && pnpm build` 