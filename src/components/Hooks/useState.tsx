import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";

const UseState = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((p) => p + 1);
  };

  return (
    <div className="flex justify-center items-start ">
      <div className=" p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-[#282c34]">
          React useState Hook
        </h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useState</span> Hook allows
          us to track state in a function component. State generally refers to
          data or properties that need to be tracking in an application.
        </p>
        <p className="text-xl mb-2 text-[#282c34]">Import useState :</p>
        <CodeSnippets
          codeString={` import {useState} from "react`}
          showLineNumbers={false}
        />
        <div className="mt-5">
          <p className="text-xl mb-2 ">
            The <span className="text-red-500">set</span> function returned by{" "}
            <span className="text-red-500">useState</span> lets you update the
            state to a different value and trigger a re-render. You can pass the
            next state directly, or a function that calculates it from the
            previous state.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-[#282c34]">Example:</h2>
          <p className="mb-2 text-lg">
            At the top of your component,{" "}
            <span className="text-red-500">import</span> the
            <span className="text-red-500"> useState</span> Hook.
          </p>
          <div className="grid grid-cols-2 h-full">
            <div className={`col-span-1 w-full`}>
              <CodeSnippets
                codeString={`import { useState } from 'react';
                
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      You pressed me {count} times
      </button>
  );
}
      `}
              />
            </div>
            <div className="col-span-1 p-2 bg-gray-400 rounded-lg ">
              {!preview ? (
                <div>
                  <span className="text-xl ">
                    Enter any number to you want to start
                  </span>
                  <div className="space-x-3 mt-4">
                    <input
                      type="tel"
                      onChange={(e) => setCount(Number(e.target.value))}
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
                <div className="relative top-1">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={handleClick}
                  >
                    You pressed me {count} times
                  </button>
                  <div className="absolute top-1 right-2   ">
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount(0)}
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
    </div>
  );
};

export default UseState;
//  className="bg-white text-lg p-4 border-l-4 border-black rounded-lg w-[80%]"
