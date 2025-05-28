# Angular Forms – Validation Exercise

## Exercise Overview

You are required to build a form that includes the following fields:

- **Name** – Required (text input)
- **Email** – Required (text input)
- **Confirm Email** – Required (text input)
- **Destination Country** – Required (dropdown)
- **Origin Country** – Required (dropdown)
- **Israeli ID Number** – Required (text input)

### ✅ Form Behavior

- The **Submit** button must be **disabled** if the form is invalid

### 🧪 Validation Rules

- **Israeli ID Number** must be validated using the official algorithm  
  → [Algorithm Reference](https://www.upnext.co.il/articles/israeli-id-numer-validation/)
- **Email** and **Confirm Email** must match exactly
- **Destination Country** must be **different** from **Origin Country**

### 💡 Tips

- Use Angular Reactive Forms or Template-driven Forms
- Show user-friendly error messages
- Consider using `FormGroup` and `FormControl` for better validation control
