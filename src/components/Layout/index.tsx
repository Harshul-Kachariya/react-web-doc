const MainLayout = ({ children, className }: any) => {
  return (
    <div>
      <main className={`max-w-4xl mx-auto p-8 ${className}`}>{children}</main>
    </div>
  );
};

export default MainLayout;
