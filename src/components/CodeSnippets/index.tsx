import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({ codeString, showLineNumbers = true }: any) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      className="rounded-lg bg-gray-800"
      showLineNumbers={showLineNumbers}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippets;
