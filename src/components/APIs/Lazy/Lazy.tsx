import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../../CodeSnippets";
import MarkdownEditor from "./Preview";

const LazyComponent = () => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#282c34]">lazy</h1>
      <p className="text-xl mb-4 w-[80%]">
        <span className="text-red-500"> lazy </span> lets you defer loading
        component’s code until it is rendered for the first time.
      </p>

      <CodeSnippets
        codeString={`const SomeComponent = lazy(load)`}
        showLineNumbers={false}
        className="text-xl"
      />
      <br />
      <h2 className="text-3xl font-bold mb-2 text-[#282c34]">Reference :</h2>
      <h2 className="text-2xl font-bold mb-2 text-[#282c34]">lazy(load) :</h2>

      <div className="mt-5">
        <p className="text-xl mb-2 ">
          Call <span className="text-red-500"> lazy </span> outside your
          components to declare a lazy-loaded React component:
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <CodeSnippets
          codeString={` import { lazy } from 'react';

 const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));`}
          showLineNumbers={false}
        />
        <div className="mt-5">
          <h2 className="text-3xl font-bold mb-2 text-[#282c34]">
            Parameter :
          </h2>
          <p className="text-xl mb-2">
            <strong className="text-red-500"> load: </strong> A function that
            returns a Promise or another thenable (a Promise-like object with a
            then method). React will not call{" "}
            <span className="text-red-500"> load</span> until the first time you
            attempt to render the returned component. After React first calls
            <span className="text-red-500"> load </span>, it will wait for it to
            resolve, and then render the resolved value’s .default as a React
            component. Both the returned Promise and the Promise’s resolved
            value will be cached, so React will not call{" "}
            <span className="text-red-500"> load </span> more than once. If the
            Promise rejects, React will throw the rejection reason for the
            nearest Error Boundary to handle.
          </p>

          <h2 className="text-3xl font-bold mb-2 text-[#282c34]">Return :</h2>
          <p className="text-xl mb-2 ">
            <span className="text-red-500"> lazy </span> lazy returns a React
            component you can render in your tree. While the code for the lazy
            component is still loading, attempting to render it will suspend.
            Use{" "}
            <span className="text-emerald-600 font-semibold">{`<Suspense>`}</span>{" "}
            to display a loading indicator while it’s loading.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-[#282c34]">
          Lazy-loading components with Suspense :
        </h2>
        <h2 className="text-xl font-bold mb-2 text-[#282c34]">
          Usually, you import components with the static import declaration :
        </h2>
        <CodeSnippets
          codeString={`   import MarkdownPreview from './MarkdownPreview.js';`}
          showLineNumbers={false}
        />
        <h2 className="text-xl font-bold mb-2 text-[#282c34] mt-5">
          To defer loading this component’s code until it’s rendered for the
          first time, replace this import with :
        </h2>
        <CodeSnippets
          codeString={`   import { lazy } from 'react';

   const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));`}
          showLineNumbers={false}
        />
        <p className="text-xl mt-5 ">
          This code relies on{" "}
          <span className="text-emerald-600 font-semibold">
            dynamic import()
          </span>
          , which might require support from your bundler or framework. Using
          this pattern requires that the lazy component you’re importing was
          exported as the default export.
        </p>
        <br />
        <p className="text-xl mb-2 ">
          Now that your component’s code loads on demand, you also need to
          specify what should be displayed while it is loading. You can do this
          by wrapping the lazy component or any of its parents into a{" "}
          <span className="text-emerald-600 font-semibold">{`<Suspense>`}</span>{" "}
          boundary:
        </p>
      </div>
      <CodeSnippets
        codeString={`<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense>`}
      />
      <div className="mt-5">
        <p className="text-xl mb-2 ">
          In this example, the code for MarkdownPreview won’t be loaded until
          you attempt to render it. If MarkdownPreview hasn’t loaded yet,
          Loading will be shown in its place. Try ticking the checkbox:
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#282c34] mt-5 font-mono">
          App.js
        </h2>
        <div className="h-96 overflow-y-auto rounded-md">
          <CodeSnippets
            codeString={`import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.js';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');
  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
`}
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-[#282c34] mt-5 font-mono">
          Loading.js
        </h2>

        <CodeSnippets
          codeString={`export default function Loading() {
  return <p><i>Loading...</i></p>;
}`}
        />

        <h2 className="text-2xl font-bold mb-2 text-[#282c34] mt-5 font-mono">
          MarkdownPreview.js
        </h2>

        <CodeSnippets
          codeString={`import { Remarkable } from 'remarkable';

const md = new Remarkable();

export default function MarkdownPreview({ markdown }) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: md.render(markdown)}}
    />
  );
}`}
        />

        <div className="col-span-1 p-2 bg-gray-400 rounded-lg mt-5">
          {!preview ? (
            <div>
              <button
                className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                onClick={() => setPreview(true)}
              >
                Preview of code
              </button>
            </div>
          ) : (
            <div className="relative top-1 flex flex-col gap-3 h-60 p-5">
              <MarkdownEditor />
              <div className="absolute top-1 right-2">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(false)}
                >
                  <IoIosRefresh className="text-xl text-white hover:transition-all hover:duration-1000 hover:rotate-180 " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LazyComponent;
