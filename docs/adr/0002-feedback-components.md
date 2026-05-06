# ADR-0002: Feedback Components

## Status

Accepted

## Context

Applications need consistent feedback for inline messages, temporary notifications, loading work, empty results, and recoverable errors. Without package-level wrappers, each screen would compose MUI primitives differently and drift in spacing, severity, and wording patterns.

## Decision

Add the feedback component group to `@jason-ui/ui`:

- `Alert`
- `Toast`
- `LoadingSpinner`
- `ProgressBar`
- `Skeleton`
- `EmptyState`
- `ErrorState`

Storybook stories for these components live under the `Feedback/*` group. The roadmap also documents the Storybook grouping taxonomy so package navigation stays aligned with the build order.

## Consequences

### Positive

- Inline, toast, loading, empty, and error states now have shared defaults.
- Dashboard and WMS screens can use consistent empty/error panels without rebuilding layout.
- Storybook remains organized by component purpose.

### Negative

- `Toast` is intentionally minimal and does not yet include a global toast manager or queue.

### Neutral

- The feedback wrappers still pass through MUI props for screen-specific behavior.

## References

- `packages/ui/src/components/Feedback/Alert`
- `packages/ui/src/components/Feedback/Toast`
- `packages/ui/src/components/Feedback/EmptyState`
- `packages/ui/src/components/Feedback/ErrorState`
