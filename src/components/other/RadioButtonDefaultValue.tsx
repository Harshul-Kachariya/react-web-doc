import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const RadioButtonDefaultValue = () => {
  const [preview, setPreview] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState("option1");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        React Radio Button Default Value
      </h1>
      <p className="text-xl mb-4 ">
        Setting a default value for radio buttons in React involves specifying
        which radio button should be selected when the component initially
        renders. This is done by setting the default state value or using the
        `checked` attribute.
      </p>
      <p className="text-lg font-bold mb-2">Setting Default Value:</p>
      <CodeSnippets
        codeString={` const [selectedValue, setSelectedValue] = useState("option1");`}
        showLineNumbers={false}
      />

      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of how to set a default value for a group of radio
          buttons in React.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function RadioButtonDefaultValueComponent() {
const [selectedValue, setSelectedValue] = useState("option1");

const handleChange = (event) => {
 setSelectedValue(event.target.value);
};

return (
 <div>
   <label>
     <input type="radio" value="option1" checked={selectedValue === "option1"} onChange={handleChange} />
     Option 1
   </label>
   <br />
   <label>
     <input type="radio" value="option2" checked={selectedValue === "option2"} onChange={handleChange} />
     Option 2
   </label>
   <br />
   <p>Selected Value: {selectedValue}</p>
 </div>
);
}

export default RadioButtonDefaultValueComponent;
`}
        />
        <div className="col-span-1 p-2 bg-gray-400 rounded-lg mt-5">
          {!preview ? (
            <div>
              <div className="space-x-3 mt-4">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            </div>
          ) : (
            <div className="relative top-1">
              <div className="flex gap-2 ">
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
              </div>
              <p className="text-xl">
                Selected Value: <strong> {selectedValue}</strong>
              </p>
              <div className="absolute top-1 right-2   ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setSelectedValue("option1")}
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

export default RadioButtonDefaultValue;
