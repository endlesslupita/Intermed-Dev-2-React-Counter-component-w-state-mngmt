# Intermed-Dev-2: React Counter Component with State Management

---

## Assignment: Create a Counter Component with State Management

### Overview

Develop a simple React application that demonstrates the understanding of state management, asynchronous state updates, and the concept of state as a snapshot.

> **Note:** While this assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite.

---

## Objective

- Implement state management using the `useState` Hook
- Understand the "Snapshot" concept and how React batches multiple updates

---

## Assignment Instructions

### 1. Setup Your React Environment

To initialize this project as a standalone instance:

```bash
npm create vite@latest portfolio-app -- --template react
cd portfolio-app
npm install
npm run dev
```

> **Vite Note:** Vite uses Hot Module Replacement (HMR) via WebSockets (WS). Ensure your file is named `Counter.jsx`.

---

### 2. Implementing the Counter Component

Create a new file: `src/Counter.jsx`

**Counter Component** — Create a functional component that displays a count and four buttons:

| Button | Behavior |
|---|---|
| **Increment** | Increases the count by 1 |
| **Increment After Delay** | Increases the count by 1 after a 2-second delay using `setTimeout` |
| **Increment Twice** | Attempts to increment the count by 2 immediately — demonstrates batching and how React treats multiple state updates |
| **Correct Increment Twice** | Correctly increments the count by 2 using a state updater function: `setCount(prevCount => prevCount + 1)` |

---

### 3. Testing and Experimentation

- Test each functionality
- Pay special attention to the behavior of **"Increment Twice"** vs **"Correct Increment Twice"**
- Experiment with changing the state in quick succession and observe how React batches updates

---

### 4. Integration & UI

- **UI Responsibility:** You are responsible for the CSS integration as you see fit for a standalone app
- **App Integration:** You have the option to import this into `App.jsx` to begin packaging these assignments into one master app

---

## Relevant Study Material & Exercises

- [W3Schools: React useState Hook](https://www.w3schools.com/react/react_usestate.asp)
- [W3Schools: React Component States](https://www.w3schools.com/react/react_state.asp)
- [W3Schools: JS Timeout Functions](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [W3Schools: React ES6 Functions](https://www.w3schools.com/react/react_es6_arrow.asp)

---

## Assignment Submission

### GitHub Repository

- Push your program to a new GitHub repository
- Ensure the repository is **public**
- Include all source code files and a `README.md` describing the project and how to run it

### Demonstration

Provide a video demonstrating your program in action. The demonstration should include:

- Show the program's functionality
- Present test cases demonstrating you are passing them (at least **3 normal** test cases and at least **3 edge** test cases)

### Submission

- Submit the link to your GitHub repository
- Include a link to your video demonstration (YouTube — public or unlisted)
