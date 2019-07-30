# Ng8IvyOnpush

## Description
Test the new behavior of Ivy to update a `ChangeDetectionStrategy.OnPush` component view (`comp1`)
and an inserted template ref (dynamically created view `comp3`) only if the component view (`comp1`) is checked, 
but not if the view (`app`) is checked where the dynamically created view `comp3` is declared.

See https://github.com/angular/components/pull/15440

Change `tsconfig.app.json` to
```json
  "angularCompilerOptions": {
    "enableIvy": false
  }
```
to see the Angular <= 8 (without Ivy) behavior.

## Result

Without Ivy, we get
```
comp2 changed1
comp3 changed1
```
All changes are reflected in the view.

With Ivy, we get
```
comp2 changed1
comp3 changes?
```
Although `comp3` was changed, this is not reflected in the view.

If we set `changeDetection: ChangeDetectionStrategy.OnPush` in `app.component.ts`, we get the following result for both, with and without Ivy:

```
comp2 changes?
comp3 changes?
```
