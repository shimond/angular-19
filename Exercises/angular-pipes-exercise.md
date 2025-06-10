# Angular Pipes – Custom Pipe Exercises

## Exercise A: Minutes to Hours Pipe

Create a custom pipe that receives a number of minutes and returns it formatted as hours and minutes.

**Example:**
```html
{{ minutes | toMinHours }}
```

- Input: `156`
- Output: `2 hours and 36 minutes`

---

## Exercise B: Calculate Age Pipe

Create a custom pipe that receives a birthdate and returns the age in full years.

**Example:**
```html
{{ birthdate | age }}
```

- Input: `1/1/1983` (assuming current year is 2025)
- Output: `42`


[View Solution](../src/app/exercises/pipes-exercise)