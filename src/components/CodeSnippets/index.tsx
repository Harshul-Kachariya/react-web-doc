import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({ codeString }: any) => {
  return (
    <SyntaxHighlighter language="jsx" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippets;
