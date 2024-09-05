const CodePreview = ({ children, className }: any) => {
  return (
    <div className={`col-span-1 p-2 bg-gray-400 rounded-lg ${className!}`}>
      {children}
    </div>
  );
};

export default CodePreview;
