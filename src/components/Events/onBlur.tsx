import CodeSnippets from "../CodeSnippets";

const OnBlurEvent = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React onBlur Event</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">onBlur</span> event handler
          is triggered when an element loses focus. It is commonly used in form
          validation to check if the input is valid once the user moves away
          from the input field.
        </p>
        <p className="text-lg font-bold mb-2">Using onBlur:</p>
        <CodeSnippets
          codeString={`<input type="text" onBlur={handleBlur} />`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Here’s an example of using the{" "}
            <span className="text-red-500">onBlur</span> event to validate an
            input field when the user moves out of it.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function InputValidationComponent() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!inputValue) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Enter text"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default InputValidationComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBlurEvent;
