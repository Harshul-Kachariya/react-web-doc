import { useEffect, useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const UseEffect = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    !stop &&
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
  });

  return (
    <div className="flex justify-center items-start ">
      <div className=" p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-[#282c34]">
          React useEffect Hook
        </h1>
        <p className="text-xl text-gray-600 mb-4 w-[80%]">
          The React <span className="text-red-500">useEffect</span> Hook allows
          you to perform side effects in your function components. Some examples
          of side effects are: fetching data, directly updating the DOM, and
          timers.
        </p>
        <p className="text-3xl text-[#282c34] font-bold mb-2">
          Import useEffect :
        </p>
        <CodeSnippets
          codeString={` import { useEffect } from "react"`}
          showLineNumbers={false}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-3xl text-[#282c34] font-bold mb-2">Example:</h2>
          <p className="mb-2 text-xl text-gray-600">
            At the top of your component,{" "}
            <span className="text-red-500">import</span> the
            <span className="text-red-500"> useEffect</span> Hook.
          </p>
          <p className="mb-2 text-xl text-gray-600">
            Then, call the Hook inside your component function with an
            <span className="text-red-500">effect</span> function as an
            argument. <br /> Example with the without dependency
          </p>
          <div className="grid grid-cols-2 h-full">
            <div className="col-span-1">
              <CodeSnippets
                codeString={`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <h1>I've rendered {count} times!</h1>;
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
                  <div className="flex flex-col gap-2">
                    <strong className="text-2xl ">{`I've rendered ${count} times!`}</strong>
                    <button
                      className=" bg-[#282c34] p-2 w-72
                  rounded-md hover:shadow-md text-white"
                      onClick={() => setStop(!stop)}
                    >
                      {!stop ? "Stop" : "Start"}
                    </button>
                  </div>
                  <div className="absolute top-1 right-2   ">
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount(0)}
                    >
                      <IoIosRefresh className="text-xl text-white " />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="my-4 text-xl text-gray-600">
            Example with the with dependency
          </p>
          <div className="grid grid-cols-2 h-full">
            <div className="col-span-1">
              <CodeSnippets
                codeString={`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
`}
              />
            </div>
            <div className="col-span-1 p-2 bg-gray-400 rounded-lg ">
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
                  <div className="flex flex-col gap-2">
                    <strong className="text-2xl ">{`I've rendered ${count2} times!`}</strong>
                    <button
                      className="bg-[#282c34] flex justify-center items-center p-2 rounded-md hover:shadow-md text-white w-20"
                      onClick={() => setCount2((p) => p + 1)}
                    >
                      <FaPlus className="text-xl text-white " />
                    </button>
                  </div>
                  <div className="absolute top-1 right-2   ">
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount2(0)}
                    >
                      <IoIosRefresh className="text-xl text-white " />
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

export default UseEffect;
