import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const InputDefaultValue = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Default value");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Input Default Value</h1>
      <p className="text-xl mb-4 w-[80%]">
        Setting a default value for an input field in React allows you to
        pre-fill the input with an initial value when the component first
        renders. This is useful for forms where you want to provide a starting
        value or placeholder.
      </p>
      <p className="text-lg font-bold mb-2">Setting Default Value:</p>
      <CodeSnippets
        codeString={` const [inputValue, setInputValue] = useState("Default Value");`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of how to set a default value for an input field
          in React.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";
import PreviewBox from './../PreviewBox';

function InputDefaultValueComponent() {
const [inputValue, setInputValue] = useState("Default Value");

const handleChange = (event) => {
 setInputValue(event.target.value);
};

return (
 <div>
   <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter text" />
   <p>Current Value: {inputValue}</p>
 </div>
);
}

export default InputDefaultValueComponent;
`}
        />
        <div className="col-span-1 p-2 bg-gray-400 rounded-lg mt-5">
          {!preview ? (
            <div className="space-x-3 ">
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
                  defaultValue={"Default Value"}
                  onChange={(e) => setValue(e.target.value)}
                  className="p-2 rounded-md hover:shadow-md  outline-none w-48 "
                />
                <p className="text-xl">Current Value: {value}</p>
              </div>
              <div className="absolute top-1 right-2  ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setValue("Default value")}
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

export default InputDefaultValue;
