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


With Ivy, we get
```
comp2 changed1
comp3 changes?
```
