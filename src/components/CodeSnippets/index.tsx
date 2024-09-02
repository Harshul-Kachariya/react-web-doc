import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({ codeString }: any) => {
  return (
    <SyntaxHighlighter className="rounded" language="jsx" style={atomOneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippets;
