# Angular Exercises – RxJS

## Exercise A: Exam System with RxJS

Build an exam system using extensive RxJS usage.

### 🧩 Question Model:
- `id`
- `questionText`
- `correctAnswer`
- `options: string[]`
- `userAnswer?`

### 🧪 Requirements:
- Use a Service to manage the questions list
- The Service should expose Observables:
  - All questions
  - Count of unanswered questions
  - Count of correct answers
  - Count of incorrect answers
  - Final score

- Only the Service can update question statuses
- Each status change must trigger a new immutable object emission
- Use `AsyncPipe` wherever possible
- Utilize `Subject`, `BehaviorSubject`, etc. appropriately

---

## Exercise B: Color Guessing Game

Build a game where the system generates a random RGB color and the user tries to guess it.

### 🎮 Functionality:
- User inputs Red, Green, Blue (0-255)
- System shows the color from those values
- If user input matches the system’s color → show `Success!!!`

### 🔧 Service API:
- `getRed(): Observable<number>`
- `getGreen(): Observable<number>`
- `getBlue(): Observable<number>`
- `setRed(value: number): void`
- `setGreen(value: number): void`
- `setBlue(value: number): void`
- `getComputerColor(): Observable<[number, number, number]>`
- `randomizeColor(): void`

### 💡 Tip:
Use `combineLatest` and `AsyncPipe` to drive the UI.


[View Solution](../src/app/exercises/rxjs-exercises)