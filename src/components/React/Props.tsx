import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";

const Props = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setvalue] = useState<string>("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#282c34]">React Props</h1>

      <p className="flex flex-col gap-2 text-xl mb-4">
        <span> Props are arguments passed into React components.</span>
        <span>Props are passed to components via HTML attributes.</span>
        <span>
          React Props are like function arguments in JavaScript and attributes
          in HTML.
        </span>
      </p>

      <CodeSnippets
        codeString={`function Car(props) {
    return <h2>Hi, I am a {props.brands} car!</h2>;
  }
  
  export default Car;`}
      />

      <div className="flex flex-col gap-3 mt-5">
        <p className="text-xl font-bold mb-2 text-[#282c34]">
          Arrow function Class Component :
        </p>
        <p className="text-xl mb-4 ">
          Here is the same example as above, but created using a Arrow Function
          component instead.
        </p>

        <CodeSnippets
          codeString={`import Car from "./Components/Car";
    function MyComp() {
    return <Car brands="BMW" />;
  }
  
  export default MyComp;`}
        />

        <div className="col-span-1 p-2 bg-gray-400 rounded-lg ">
          {!preview ? (
            <div>
              <div className="space-x-3 ">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                  className="p-2 rounded-md hover:shadow-md outline-none"
                />
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            </div>
          ) : (
            <div className="relative top-1 min-h-16">
              <p className="text-xl">Hi, I am a {value} car!</p>
              <div className="absolute top-1 right-2   ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => {
                    setvalue("");
                    setPreview(false);
                  }}
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

export default Props;