import CodeSnippets from "./../CodeSnippets/index";

import reactApp from "../../assets/react_create_react_app.png";

const CreateReactApp = () => {
  return (
    <div>
      <main className="max-w-4xl mx-auto p-8 ">
        <section id="installation" className="mb-10">
          <p className="text-gray-700 mb-4 text-xl">
            To create a new React project, run the following command:
          </p>
          <CodeSnippets codeString={`npx create-react-app my-react-app`} />
        </section>

        <section id="setup" className="mb-10 text-xl ">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Setup :</h2>
          <p className="text-gray-700 mb-4">
            Navigate to your project directory and start the development server:
          </p>
          <CodeSnippets
            codeString={` cd my-react-app
 npm start`}
          />
          <div className="my-5">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Folder Structure of first react-app :
            </h2>
            <CodeSnippets
              codeString={` my-app
 ├── README.md
 ├── node_modules
 ├── package.json
 ├── .gitignore
 ├── public
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── logo192.png
 │   ├── logo512.png
 │   ├── manifest.json
 │   └── robots.txt
 └── src
 ├── App.css
     ├── App.js
     ├── App.test.js
     ├── index.css
     ├── index.js
     ├── logo.svg
     ├── serviceWorker.js
     └── setupTests.js`}
              showLineNumbers={false}
            />
          </div>

          <div>
            {" "}
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Scripts</h2>
            <p className="text-gray-700">
              Inside the newly created project, you can run some built-in
              commands:
            </p>
            <div className="text-xl">
              <span className="text-red-500">npm start</span> or{" "}
              <span className="text-red-500">yarn start</span>
            </div>
          </div>
          <p className="text-gray-700 my-4">
            Your React application should now be running on{" "}
            <strong>http://localhost:3000</strong>.
          </p>
          <p className="text-gray-700 my-4">
            <strong>Preview of our firest react app :</strong>
          </p>
          <div className="max-w-4xl border-none overflow-hidden">
            <img
              src={reactApp}
              alt="cretae-react-app"
              className="rounded-md "
            />
          </div>
        </section>

        <section id="build">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Building for Production
          </h2>
          <p className="text-gray-700 mb-4 text-xl">
            To create a production-ready build of your application, run:
          </p>
          <CodeSnippets
            codeString={`   # Run this to use npm
    npm run build
    # Or run this to use yarn
    yarn build`}
            showLineNumbers={false}
          />
          <p className="text-gray-700 text-xl">
            This command creates a <strong>build/</strong> directory with a
            production build of your app.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CreateReactApp;
