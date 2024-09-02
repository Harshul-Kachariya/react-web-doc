import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({ codeString }: any) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      className="rounded-lg bg-gray-800"
      showLineNumbers
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippets;
