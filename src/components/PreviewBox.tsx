const PreviewBox = ({ children }: any) => {
  return (
    <div className="border rounded-lg p-4 mt-4 bg-gray-600 shadow-lg">
      <h3 className="text-lg font-bold mb-2">Preview:</h3>
      <div>{children}</div>
    </div>
  );
};

export default PreviewBox;
