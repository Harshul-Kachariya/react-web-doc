import CodeSnippets from "../CodeSnippets";

const webWorker = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React Web Workers</h1>
        <p className="text-xl mb-4 w-[80%]">
          Web Workers in React allow you to run scripts in background threads,
          separate from the main execution thread. This enables you to perform
          resource-intensive computations without blocking the user interface.
        </p>
        <p className="text-lg font-bold mb-2">Using Web Workers:</p>
        <CodeSnippets
          codeString={` const worker = new Worker('worker.js');`}
          showLineNumbers={false}
        />

        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Here’s an example of how to create and use a Web Worker in a React
            application to perform a computation in the background.
          </p>
          <CodeSnippets
            codeString={`// worker.js
self.onmessage = function (e) {
  const result = e.data * 2; // Example computation
  self.postMessage(result);
};

// main component
import { useEffect, useState } from "react";

function WebWorkerComponent() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.js', import.meta.url));

    worker.postMessage(10); // Send data to worker

    worker.onmessage = function (e) {
      setResult(e.data); // Receive data from worker
    };

    return () => {
      worker.terminate(); // Clean up the worker when component unmounts
    };
  }, []);

  return (
    <div>
      <p>Result from Web Worker: {result}</p>
    </div>
  );
}

export default WebWorkerComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default webWorker;
