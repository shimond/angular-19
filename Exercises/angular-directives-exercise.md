# Angular Directives – Custom Directive Exercises

## Exercise A: `HideAfter` Directive

Create a directive called `HideAfter` that hides the element after 5 seconds when clicked.

**Usage Example:**
```html
<div [hideAfter]="5000">
  Click me and I’ll disappear in 5 seconds
</div>
```

---

## Exercise B: `ScrollIntoView` Directive

Create a directive that ensures the element scrolls into view when the page loads.

**Usage Example:**
```html
<div scrollIntoView>
  I’ll scroll into view on page load
</div>
```

- Use the built-in JavaScript function `scrollIntoView`.
