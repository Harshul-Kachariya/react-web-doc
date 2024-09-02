import { useCallback, useState } from "react";
import { IoIosCopy } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({ codeString, showLineNumbers = true }: any) => {
  const [copied, setCopied] = useState(false);
  const copyCodeToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(codeString).then(
      () => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
        console.log("Code copied successfully!");
      },
      (err) => {
        setCopied(false);
        console.error("Failed to copy code: ", err);
      }
    );
  }, [codeString]);

  return (
    <div className="relative">
      <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        className="rounded-lg bg-gray-800"
        showLineNumbers={showLineNumbers}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="absolute top-1 right-2">
        <button
          className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
          onClick={copyCodeToClipboard}
        >
          {copied ? (
            <IoCheckmarkDone className="text-xl text-white" />
          ) : (
            <IoIosCopy className="text-xl bg-black text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeSnippets;
