import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const InputValue = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div>
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
        <div className="col-span-1 p-2 bg-gray-400 rounded-lg mt-5">
          {!preview ? (
            <div className="space-x-3 mt-4">
              <button
                className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                onClick={() => setPreview(true)}
              >
                Preview of code
              </button>
            </div>
          ) : (
            <div className="relative top-1">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="p-2 rounded-md hover:shadow-md outline-none w-36 "
                />
                <p className="text-xl">Current Value: {value}</p>
              </div>
              <div className="absolute top-1 right-2   ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setValue("")}
                >
                  <IoIosRefresh className="text-xl text-white hover:transition-all hover:duration-1000 hover:rotate-180 " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputValue;
