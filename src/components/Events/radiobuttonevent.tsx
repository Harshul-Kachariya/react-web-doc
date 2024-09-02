import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const RadioButtonEvent = () => {
  const [preview, setPreview] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React RadioButton Event</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">radio button</span> event
          handler is used to capture the selection of a radio button. It allows
          you to determine which option a user has selected, commonly in forms
          where a user needs to choose one option from a set.
        </p>
        <p className="text-lg font-bold mb-2">
          Handling Radio Button Selection:
        </p>
        <CodeSnippets
          codeString={`<input type="radio" value="option1" onChange={handleChange} /> Option 1`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of using the{" "}
            <span className="text-red-500">onChange</span> event to update the
            state based on the selected radio button.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function RadioButtonComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default RadioButtonComponent;
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
                    checked={selectedOption === "option1"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Option 1
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Option 2
                </label>

                <p>
                  Selected Option: <strong> {selectedOption}</strong>
                </p>
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

export default RadioButtonEvent;
