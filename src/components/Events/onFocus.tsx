import CodeSnippets from "../CodeSnippets";

const OnFocusEvent = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React onFocus Event</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">onFocus</span> event handler
          is triggered when an element gains focus, such as when a user clicks
          into an input field. It can be used to highlight elements, show
          additional information, or handle other actions when an element
          becomes active.
        </p>
        <p className="text-lg font-bold mb-2">Using onFocus:</p>
        <CodeSnippets
          codeString={`<input type="text" onFocus={handleFocus} />`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Here’s an example of using the{" "}
            <span className="text-red-500">onFocus</span> event to change the
            style of an input field when it gains focus.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function FocusHighlightComponent() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter text"
        className={isFocused ? "border-blue-500" : "border-gray-300"}
      />
    </div>
  );
}

export default FocusHighlightComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default OnFocusEvent;
