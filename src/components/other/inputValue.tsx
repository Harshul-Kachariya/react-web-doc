import CodeSnippets from "../CodeSnippets";

const InputValue = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React Input Value</h1>
        <p className="text-xl mb-4 w-[80%]">
          Managing the value of an input field in React involves controlling and
          updating the input’s value through state. This allows you to capture
          user input and use it within your application, typically in forms or
          interactive components.
        </p>
        <p className="text-lg font-bold mb-2">Handling Input Value:</p>
        <CodeSnippets
          codeString={` const [inputValue, setInputValue] = useState("");`}
          showLineNumbers={false}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of how to manage the value of an input field in
            React, including capturing user input and updating the state.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function InputValueComponent() {
  const [inputValue, setInputValue] = useState(""); // Initial input value

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default InputValueComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputValue;
