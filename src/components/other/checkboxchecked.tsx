import CodeSnippets from "../CodeSnippets";

const CheckboxChecked = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">
          React Checkbox Checked State
        </h1>
        <p className="text-xl mb-4 w-[80%]">
          Managing the `checked` state of a checkbox in React allows you to
          control whether the checkbox is selected or not. This can be useful
          for tracking user selections and for controlling the state of forms.
        </p>
        <p className="text-lg font-bold mb-2">
          Handling Checkbox Checked State:
        </p>
        <CodeSnippets
          codeString={` const [isChecked, setIsChecked] = useState(false);`}
          showLineNumbers={false}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of how to manage the `checked` state of a
            checkbox in React.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function CheckboxCheckedComponent() {
  const [isChecked, setIsChecked] = useState(false); // Initial unchecked state

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Check me
      </label>
      <p>{isChecked ? "Checkbox is checked" : "Checkbox is unchecked"}</p>
    </div>
  );
}

export default CheckboxCheckedComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxChecked;
