# Summary Exercise – Using services

## Exercise Overview

You are required to implement an **exam system**.

The system should allow a user to answer several questions and calculate a **score** based on their responses.

### 🖼️ UI Requirements

The screen should include:
- A list of questions
- A selected question view
- A score display

#### Question List:
- Highlight the currently selected question
- Indicate questions that were **answered correctly**
- Indicate questions that were **answered incorrectly**

### 🧩 Question Model

Each question should include the following fields:
- `id` – unique identifier
- `questionText` – the text of the question
- `correctAnswer` – the correct answer value
- `options` – an array of possible answers (`string[]`)
- `userAnswer?` – the user's selected answer (initially empty)

### 📌 Technical Requirements

- The list of questions must be fetched from a **Service**
- Any business logic not related to UI should be implemented in a **Service**
- The application should consist of **at least 3 Angular components**

### 💡 Tips
- Structure your services with separation of concerns
- Use Angular's `@Injectable` to manage logic
- Use `@Input`/`@Output` for component communication if needed

### 🧩 Question Model

```ts
export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
}

### Json example
```json
[
  {
    "id": 1,
    "questionText": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "correctAnswer": "Paris"
  },
  {
    "id": 2,
    "questionText": "Which language is primarily used for web development?",
    "options": ["Python", "C#", "JavaScript", "Go"],
    "correctAnswer": "JavaScript"
  },
  {
    "id": 3,
    "questionText": "What is 7 x 8?",
    "options": ["54", "56", "58", "60"],
    "correctAnswer": "56"
  },
  {
    "id": 4,
    "questionText": "What planet is known as the Red Planet?",
    "options": ["Earth", "Venus", "Mars", "Jupiter"],
    "correctAnswer": "Mars"
  },
  {
    "id": 5,
    "questionText": "Who wrote 'Romeo and Juliet'?",
    "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    "correctAnswer": "William Shakespeare"
  }
]
```

![ChatGPT Image May 29, 2025, 01_39_03 AM](https://github.com/user-attachments/assets/a328f564-6696-4461-ba32-a50f05d3c692)



