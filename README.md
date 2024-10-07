## CS0320 Fall 2024 Mock Gear Up 🍁

**In this repo, you will find:**

- TODO 1: add more options to the dropdown in `SelectInput.tsx`
- TODO 2: in `SelectInput.tsx`, add a submit button
- TODO 3: make a CSS change
- TODO 4: display the dropdown text as a text element in the main display area **(After Topic 3 slides):**

  - 1. In `Select.tsx`, set up a react `useState` hook to manage all output history and adding new history

    - pass in the variable part to the `<SelectHistory />` component (for output history) as props
    - pass in the variable and function to the `<SelectInput />` component (for output history) as props

  - 2. In `SelectInput.tsx`, set up a prop for this component to recieve the `useState` hook variable and function from `Select.tsx` for setting up and updating history (Hint: use the `SelectInputProps` interface). Then, add a function to handle action for when we click the submit button.

    - Hint: use this code below to grab the current piece of text in the dropdown and save it as a string in `selecText`
      ```
      const selectElement = document.getElementById(
          "dropdown"
        ) as HTMLSelectElement | null;
        const selectText = selectElement?.options[selectElement.selectedIndex]?.text;
      ```

  - 3. In `SelectHistory.tsx`, add to the JSX to display all history entries as text (Hint: use `.map()`)

- TODO 5: In `App.spec.ts`, complete the rest of the playwright tests!
