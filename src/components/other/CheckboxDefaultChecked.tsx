import CodeSnippets from "../CodeSnippets";

const CheckboxDefaultChecked = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">
          React Checkbox Default Checked
        </h1>
        <p className="text-xl mb-4 w-[80%]">
          Setting a default checked state for a checkbox in React involves
          specifying whether the checkbox should be checked or unchecked when
          the component initially renders. This can be achieved by setting the
          default state value or using the `defaultChecked` attribute.
        </p>
        <p className="text-lg font-bold mb-2">Setting Default Checked State:</p>
        <CodeSnippets
          codeString={` const [isChecked, setIsChecked] = useState(true);`}
          showLineNumbers={false}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of how to set a default checked state for a
            checkbox in React.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function CheckboxDefaultCheckedComponent() {
  const [isChecked, setIsChecked] = useState(true); // Default checked state

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
      <p>{isChecked ? "Checked" : "Unchecked"}</p>
    </div>
  );
}

export default CheckboxDefaultCheckedComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxDefaultChecked;
