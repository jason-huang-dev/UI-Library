# ADR-0003: Overlay Components

## Status

Accepted

## Context

Product workflows need consistent overlays for editing records, confirming destructive actions, showing side-panel details, exposing contextual metadata, and listing row actions. MUI provides the primitives, but app screens should not repeatedly compose title, description, action, anchoring, and close behavior differently.

## Decision

Add the overlay component group to `@jason-ui/ui`:

- `Dialog`
- `ConfirmDialog`
- `Drawer`
- `Popover`
- `Tooltip`
- `Menu`
- `ActionMenu`

Storybook stories for these components live under the `Overlay/*` group. `Dialog` and `Drawer` own shared title/description/action layout. `ConfirmDialog` builds on `Dialog` for primary and destructive confirmations. `Menu` accepts item definitions, while `ActionMenu` owns its trigger and anchor state for common row-action usage.

## Consequences

### Positive

- Create/edit dialogs and drawers get consistent structure.
- Destructive confirmations have a reusable, intent-aware wrapper.
- Table and dashboard row actions can use one standard `ActionMenu` API.

### Negative

- `ActionMenu` is intentionally simple and does not yet support nested menu groups.
- `ConfirmDialog` does not include async promise handling beyond a `loading` prop.

### Neutral

- Consumers can still pass through MUI props for advanced overlay behavior.

## References

- `packages/ui/src/components/Overlay/Dialog`
- `packages/ui/src/components/Overlay/ConfirmDialog`
- `packages/ui/src/components/Overlay/ActionMenu`
