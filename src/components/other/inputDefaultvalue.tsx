import CodeSnippets from "../CodeSnippets";
import PreviewBox from "../PreviewBox";

const InputDefaultValue = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React Input Default Value</h1>
        <p className="text-xl mb-4 w-[80%]">
          Setting a default value for an input field in React allows you to
          pre-fill the input with an initial value when the component first
          renders. This is useful for forms where you want to provide a starting
          value or placeholder.
        </p>
        <p className="text-lg font-bold mb-2">Setting Default Value:</p>
        <CodeSnippets
          codeString={`const [inputValue, setInputValue] = useState("Default Value");`}
        />
        <PreviewBox>
          <input
            type="text"
            defaultValue="Default Value"
            placeholder="Enter text"
          />
        </PreviewBox>
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
        </div>
      </div>
    </div>
  );
};

export default InputDefaultValue;
