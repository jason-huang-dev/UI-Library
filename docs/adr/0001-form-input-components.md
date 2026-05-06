# ADR-0001: Form Input Components

## Status

Accepted

## Context

The UI package needs a consistent form layer after the foundation components. Product screens need repeated handling for labels, helper text, validation errors, disabled states, search fields, dates, quantities, and dashboard/WMS filters.

MUI already provides robust low-level input primitives, but app code should not repeatedly assemble the same label, error, spacing, and accessibility patterns by hand.

## Decision

Add the first form component set to `@jason-ui/ui`:

- `FormField`
- `TextField`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Textarea`
- `SearchInput`
- `DatePicker`
- `DateRangePicker`
- `NumberInput`

These components wrap MUI controls and keep package-level defaults for sizing, full-width layout, validation styling, helper text, and accessibility attributes. `FormField` owns the shared label/helper/error pattern for controls that need composition.

`DatePicker` and `DateRangePicker` use native date inputs for now. This avoids adding a date-picker dependency before the package has a stronger requirement for calendars, localization, custom parsing, or range popovers.

## Consequences

### Positive

- Product screens get consistent form behavior without duplicating MUI wiring.
- Storybook now documents the core form states expected in dashboards and WMS workflows.
- The package stays small because date inputs do not introduce a new picker dependency yet.

### Negative

- Native date inputs have browser-specific UI and limited range-selection ergonomics.
- Advanced behaviors such as masked input, timezone handling, and calendar popovers will need a future decision.

### Neutral

- Consumers can still pass through MUI props for lower-level control.
- `FormField` is available for composition, while simple components can still use their own `label` and `helperText` props.

## References

- `packages/ui/src/components/FormField`
- `packages/ui/src/components/TextField`
- `packages/ui/src/components/DatePicker`
