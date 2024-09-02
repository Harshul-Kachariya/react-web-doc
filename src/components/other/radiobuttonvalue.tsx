import CodeSnippets from "../CodeSnippets";

const RadioButtonValue = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React Radio Button Value</h1>
        <p className="text-xl mb-4 w-[80%]">
          Handling radio button values in React involves capturing the selected
          value from a group of radio buttons. This is commonly used in forms
          where a user needs to select one option from a set of mutually
          exclusive choices.
        </p>
        <p className="text-lg font-bold mb-2">Managing Radio Button Values:</p>
        <CodeSnippets
          codeString={`const [selectedValue, setSelectedValue] = useState("");`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Here’s an example of how to manage the selected value from a group
            of radio buttons and update the state accordingly.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function RadioButtonValueComponent() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default RadioButtonValueComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonValue;
