import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const CheckboxEvent = () => {
  const [preview, setPreview] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React Checkbox Event</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">checkbox</span> event handler
          is used to capture the state of a checkbox, whether it is checked or
          unchecked. It’s commonly used in forms where a user can select
          multiple options.
        </p>
        <p className="text-lg font-bold mb-2">Handling Checkbox State:</p>
        <CodeSnippets
          codeString={`<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of using the{" "}
            <span className="text-red-500">onChange</span> event to update the
            state based on the checkbox's checked status.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>{isChecked ? "Checked" : "Unchecked"}</p>
    </div>
  );
}

export default CheckboxComponent;
`}
          />
          <div className="col-span-1 p-2 bg-gray-400 rounded-lg my-5 ">
            {!preview ? (
              <div>
                <div className="space-x-3 ">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setPreview(true)}
                  >
                    Preview of code
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative top-1 min-h-48">
                <label className="flex gap-3">
                  <input
                    type="radio"
                    value="option1"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  Option 1
                </label>

                <p>{isChecked ? "Checked" : "Unchecked"}</p>

                <div className="absolute top-1 right-2">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => {}}
                  >
                    <IoIosRefresh className="text-xl text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxEvent;
