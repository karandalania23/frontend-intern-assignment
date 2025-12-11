# Frontend Developer Intern Assignment

Hi! This is my submission for the Frontend Developer Intern assignment. I've built an interactive quiz application based on the provided Figma design, focusing on smooth animations, clean code structure, and accessibility.

## Live Demo
**[https://frontend-intern-assignment-flax.vercel.app]**

---

## Screenshots and Demo

| **Desktop View** | **Final Score** |
| :---: | :---: |
| <img width="1465" height="847" alt="Screenshot 2025-12-11 at 10 56 39 PM" src="https://github.com/user-attachments/assets/ff67b2b3-2163-41be-bd86-10bc154109f7" /> | <img width="1465" height="847" alt="Screenshot 2025-12-11 at 10 56 59 PM" src="https://github.com/user-attachments/assets/7c13870f-a6b1-4bd4-92d3-5c83052c916e" /> |


| **Demo** |
| :---: |
| https://github.com/user-attachments/assets/a5c72b24-e3f0-4aad-b379-c16ae2f24302 |

---

## Tech Stack

I chose this stack to balance performance with developer experience, matching the assignment requirements:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
* **Animations:** [Framer Motion](https://www.framer.com/motion/) for complex transitions
* **Icons:** [Lucide React](https://lucide.dev/)

---

## Key Features & Implementation Details

### 1. Pixel-Perfect Design
I spent time ensuring the implementation matches the Figma file exactly.

### 2. Smooth Animations
To make the app feel alive, I added:

### 3. Modular Code Structure
I didn't want to dump everything into one file. The app is broken down into logical components:
* `ProgressBar.tsx`: Handles the segmented progress at the top.
* `QuestionCard.tsx`: manages the question text and options.
* `ResultScreen.tsx`: Handles the logic for the final score display.
* `DecorativePaw.tsx`: Encapsulates the paw/bubble logic so the main code stays clean.

### 4. Accessibility (WCAG 2.1)
I made sure the app isn't just visual, but usable for everyone.

---

## How to Run Locally

If you want to test the code on your own machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/karandalania23/frontend-intern-assignment
    cd frontend-intern-assignment
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Go to `http://localhost:3000` to see the app.

---

## Design Decisions & Trade-offs

* **State Management:** Since this is a small, single-flow app, I used React's local `useState` instead of a global store like Redux or Context. It keeps the complexity low.
* **CSS vs. Tailwind:** I used Tailwind because it allowed me to rapidly prototype the layout. For the specific "Glass" border effect, I combined Tailwind utility classes with specific opacity values to match the Figma layers.
* **Responsiveness:** The requirements focused on Desktop, but I added Flexbox wrapping and padding adjustments so it doesn't break on mobile screens.

---

## Time Spent

* **Planning & Setup:** 30 mins
* **Core Development:** 2 hours
* **Styling & Polish:** 1.5 hours
* **Documentation:** 30 mins
* **Total:** ~4.5 hours

---

## Resume and Cover Letter

| **Resume** | **Cover Letter** |
| :---: | :---: |
| [Karan_Resume.pdf](https://github.com/user-attachments/files/24108861/Karan_Resume.pdf) | [cover letter.pdf](https://github.com/user-attachments/files/24108871/cover.letter.pdf) |

***

Thanks for checking out my work!
