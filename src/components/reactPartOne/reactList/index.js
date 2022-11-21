import React from "react";
import reactList from "../../../assets/images/reactList/reactList.PNG";
import reactListTwo from "../../../assets/images/reactList/reactList2.PNG";
import reactListThree from "../../../assets/images/reactList/reactList3.PNG";
import reactListFour from "../../../assets/images/reactList/reactList4.PNG";
import reactListFive from "../../../assets/images/reactList/reactList5.PNG";
import reactListSix from "../../../assets/images/reactList/reactList6.PNG";
import reactListSeven from "../../../assets/images/reactList/reactList7.PNG";
import RenderImageText from "../../reusableComponents/RenderImageText";

function ReactList() {
  return (
    <>
      <h1>Lists in React</h1>
      <div className="content-section">
        <p>
          So far we’ve rendered a few primitive variables in JSX; next we’ll
          render a list of items. We’ll experiment with sample data at first,
          then we’ll apply that to fetch data from a remote API. First, let’s
          define the array as a variable. As before, we can define a variable
          outside or inside the component. The following defines it outside:
        </p>

        <p dir="ltr" style={{ textAlign: "justify" }}>
          &nbsp;
        </p>

        <RenderImageText
          img={reactList}
          text="I used a ... here as a placeholder, to keep my code snippet small
          (without App component implementation details) and focused on the
          essential parts (the list variable outside of the App component). I
          will use the ... throughout the rest of this learning experience as
          placeholder for code blocks that I have established previous
          exercises. If you get lost, you can always verify your code using the
          CodeSandbox links I provide at the end of most sections"
        />

        <p>
          Each item in the list has a title, a url, an author, an identifier
          (objectID), points – which indicate the popularity of an item – and a
          count of comments. Next, we’ll render the list within our JSX
          dynamically
        </p>

        <p dir="ltr" style={{ textAlign: "justify" }}>
          &nbsp;
        </p>

        <RenderImageText
          img={reactListTwo}
          text="You can use the built-in JavaScript map method for arrays³⁷ to iterate
          over each item of the list and return a new version of each:"
        />

        <RenderImageText
          img={reactListThree}
          text="We won’t map from one JavaScript data type to another in our case.
          Instead, we return a JSX fragment that renders each item of the list:"
        />

        <RenderImageText
          img={reactListFour}
          text="Actually, one of my first React “Aha” moments was using barebones
          JavaScript to map a list of JavaScript objects to HTML elements
          without any other HTML templating syntax. It’s just JavaScript in
          HTML."
        />

        <p>
          React will display each item now, but you can still improve your code
          so React handles advanced dynamic lists more gracefully. By assigning
          a key attribute to each list item’s element, React can identify
          modified items if the list changes (e.g. re-ordering). Fortunately,
          our list items come with an identifier:
        </p>

        <RenderImageText
          img={reactListFive}
          text="We avoid using the index of the item in the array to make sure the key attribute is a stable identifier. If the list changes its order, for example, React will not be able to identify the items properly:"
        />

        <RenderImageText
          img={reactListSix}
          text="So far, only the title is displayed for each item. Let’s experiment with displaying more of the item’s
          properties:"
        />

        <RenderImageText
          img={reactListSeven}
          text="The map function is inlined concisely in your JSX. Within the map function, we have access to
          each item and its properties. The url property of each item is used as dynamic href attribute for the anchor tag. Not only can JavaScript in JSX be used to display items, but also to assign HTML
          attributes dynamically."
        />

        <h2>Exercises</h2>
        <ul>
          <li>
            Read more about why React’s key attribute is needed (0, 1, 2).
            Don’t worry if you don’t understand the implementation yet, just
            focus on what problem it causes for dynamic lists.
          </li>
          <li>
            Recap the standard built-in array methods – especially map,
            filter, and reduce – which are available in native JavaScript.
          </li>
          <li>What happens if your return null instead of the JSX?</li>
          <li>
            {" "}
            Extend the list with some more items to make the example more
            realistic.
          </li>
          <li> Practice using different JavaScript expressions in JSX.</li>
        </ul>
      </div>
    </>
  );
}

export default ReactList;
