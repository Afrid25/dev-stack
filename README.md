# Dev Stack

## Project Description

Dev Stack is a responsive website for exploring and building a custom development stack. Users can browse technologies by category, add multiple tools to their stack, remove individual technologies, or clear the entire stack. Toast notifications provide feedback whenever a technology is added or removed.

The project includes a responsive navigation bar, hero section, interactive technology cards, selected-stack sidebar, loading fallback, and responsive footer. It is built with React, TypeScript, Tailwind CSS, React Icons, and React Hot Toast.


### Technology I used 

1. React.js
2. TypeScript
3. TailwindCss
4. DaisyUi
5. React-Toastify (NPM Package)
6. JSON (for technology data)
7. Vite (build tool)


#### 3 Featres about this project 

1. Interactive Technology Selection
   Users can browse technology cards and add multiple technologies to their custom stack.

2. Stack Management
   Users can view selected technologies, remove individual items, or remove all items at once.

3. Responsive User Interface
   The navbar, hero section, technology cards, sidebar, and footer work across mobile, tablet, and desktop screens





### Question answer. 

1. What is JSX, and why is it used in React?
Ans: JSX mean javaScript xml, where we can write both html code and condition. I use in react because it combines UI rendering login and business logic in one place. 

2. Difference between Props and State 
Ans:    Props                |             State 
  1. Data passed into a      | 1. Data manged internally within 
     component.              |               a component.  
                             | 
  2. Immutable               | 2. Mutable 
  3. Configures a child      | 3. Tracks values that change 
                             | over time and trigger re-renders.
     component or passes     | 
     callbacks.              | 


3. What useState does and its usage in this project
The useState hook allows functional components to store and manage local, reactive data. When the state updates via its setter function, React re-renders the component to reflect the new data in the UI.

4. What useEffect does and why it was needed for JSON data
useEffect lets components synchronize with external systems and run side effects (such as fetching data, manipulating the DOM, or setting timers) outside the immediate render phase.

5. Why items in a .map() list need a unique key prop
React uses the key during Virtual DOM reconciliation to track which specific items changed, added, or removed. A unique identifier (like tech.id) prevents unnecessary full-list re-renders and preserves component state.


6. Conditional Rendering and its usage in the project
Conditional rendering displays different UI based on whether a condition is true or false using ternary operators (? :) or logical AND (&&).

In StackSideBar, a ternary operator shows an empty state placeholder when no items are selected, and the list of items when it is not empty:

{selectedStack.length === 0 ? (
    <span>Your stack is empty.</span>
  ) : (
    <ul>
      {selectedStack.map((tech) => (
        <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
      ))}
    </ul>
)}

7. Passing data down and sending updates back up

Parent to Child (Props): The parent passes data down directly as attributes:


<TechnologyCard tech={tech} onToggle={handleToggleStack} />
Child to Parent (Callbacks): The parent passes a function down via props. The child triggers that function on an event, passing data back up to update the parent's state:


<button onClick={() => onToggle(tech)}>Add</button>