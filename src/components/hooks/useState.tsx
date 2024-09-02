import CodeSnippets from "../CodeSnippets";

const UseState = () => {
  return (
    <div className="flex justify-center items-start ">
      <div className=" p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useState Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useState</span> Hook allows
          us to track state in a function component. State generally refers to
          data or properties that need to be tracking in an application.
        </p>
        <p className="text-lg font-bold mb-2">Import useState :</p>
        <CodeSnippets codeString={`import {useState} from "react"`} />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            At the top of your component,{" "}
            <span className="text-red-500">import</span> the
            <span className="text-red-500"> useState</span> Hook.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
`}
          />
        </div>
      </div>
    </div>
  );
};

export default UseState;
//  className="bg-white text-lg p-4 border-l-4 border-black rounded-lg w-[80%]"
