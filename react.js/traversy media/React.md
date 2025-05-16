# React

## React 19
adding a compiler which will convert react code into regular JS
- doubling the performance
- It will work similar way framework like spelt
React 18 and 19 are same

## What Is React?
- React is a JS libray/ framework for building user interface. It was created by Facebook
- Websites/UIs are looked at in terms of components.
- React is currently the most popular out of the major front-end frameworks.

## Component 
- Resuable piece of code that can be use to build elemnts on the page.
- Allows us to break down complex UIs, which makes them easier to maintain and scale.
- Components can get props passed in and can hold thier own state.

now are day we using function based component not  based
props => basically arguments /attributes and can hould there state/data

## State (data that expected to change )
State represents the data that a component manages internally
- This could be form input data, fetched data,Ui-related data like if a modek is open/close.
- THere is also gloabal state, which relates to the apps as a whole and not a single component.

- to define state we use hook(useState hook)
- it will return a array with 2 element current ste value and function to update the value 

## Hooks(use react component without writing class)
Allows us to use state and other React features within funcctional components
- **useState
- **useEffect
- UseRef
- useReducer
useCallback,useMemo,useContext will be phased out in React 19


## JSX(JavsScript Syntax Extension)(outpit like html)
An HTML-like syntax within JavaSvript(components)


## SPA,SSR, & SSG
- Single Page App: Load a single HTML file and JavaScript loads the entire UI includes routes
- Server-Side Rendered: Server sends fully renderd page to client.You can fetch data and load it as well
- Static site Generation: React Geneerates static HTML files at build time. Thse are very fast.


## Vite

Vite is a super fast frontend toolkit that can used for all kind of js project including react
- it buld on top of ESBuilder, which is a very fast js builder
- fast development server with hot reload
- installed with npm create vite@latest

Create-react-app not recommentded it slower

## Create a project
`npm create vite@latest react-creash-2025`

select react 

`cd react-creash-2025`

change the port in cite config
```js
 server:{
    port:3000,
  }
```

`npm install`
or
`npm install vite@^6.3.1 --save-dev`

`npm run dev`

## install talwin css
`npm install tailwindcss @tailwindcss/vite`
`npm install @material-tailwind/react` -->differnt
Every react component will return Jsx
We can only return a single elements
JSX express mus have one aparent elemnt

Here is the content formatted properly as a `.md` (Markdown) file:

````md
# Setting Up Tailwind CSS with Vite

## 01. Install Tailwind CSS

Install `tailwindcss` and `@tailwindcss/vite` via npm:

```bash
npm install tailwindcss @tailwindcss/vite
````

---

## 02. Configure the Vite Plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

**vite.config.ts**

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

---

## 03. Import Tailwind CSS

Add an `@import` to your CSS file that imports Tailwind CSS.

**styles.css**

```css
@import "tailwindcss";
```

---

## 04. Start Your Build Process

Run your build process:

```bash
npm run dev
```

---

## 05. Start Using Tailwind in Your HTML

Ensure your compiled CSS is included in the `<head>`, then use Tailwind’s utility classes.

**index.html**

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


## install react component
`npm i react-icons`

## fragment
```
<>
</>
```

## inline style
``<p style = {{color: 'red'}}>``

## JSX
```
  const n1 = "Ashish";
  const names = ["ashish", "sonu", "aman", "diksha"];
  return (
    <>
      <div className="text-5xl">APP</div>
      <p>Going to display names</p>
      1. {n1}
      <ul>
        {
        names.map((name) => (
          <li>{name}</li>
        ))
        }
      </ul>
```

shortcut `rafce`

## Example of props
```js
    <Hero title="Test Ashish tilte" subtitle="This is the subtitle"/>  // components

import React from 'react'

const Hero = (props) => {
    return (   <>
            <h1 className="mb-4  dark:text-white">{props.title}</h1>
            <p className="mb-8 dark:text-gray-400">{props.subtitle}</p>
    </> )
}

export default Hero
```
desctrure
```js
    <Hero title="Test Ashish tilte" subtitle="This is the subtitle"/>  // components

import React from 'react'

const Hero = ({title, subtitle}) => {
    return (   <>
            <h1 className="mb-4  dark:text-white">{title}</h1>
            <p className="mb-8 dark:text-gray-400">{subtitle}</p>
    </> )
}

export default Hero
```

default peops/args

```js
    <Hero title="Test Ashish tilte" subtitle="This is the subtitle"/>  // components

import React from 'react'

const Hero = ({title = "ashish", subtitle = "sub title"}) => {
    return (   <>
            <h1 className="mb-4  dark:text-white">{title}</h1>
            <p className="mb-8 dark:text-gray-400">{subtitle}</p>
    </> )
}

export default Hero
```

## Dynamic bg
```js

const Card = ({ children,bg="bg-gray-100"}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}
 
    </div>
  )
}

export default Card
```

## useState
it return state, and resuld varable should a function to change that state

```js

const [showFullDescription, setShowFullDescription] = useState(false); // inside parameter we have default value

let description = job.description;

if(!showFullDescription){
  description = description.substring(0,90) + '...';
}

```

code to show buttion more or less
```js
{ showFullDescription ? 'Less' : 'More' }
```

call a function onClick 

```js
<button onClick="{() => setFullDescription(preState) => !preState}">
//Geting the previous state and sating up the opposite to the orevious state.
</button>


```

## React Router
we install react-router
`npm i react-router-dom`

React router is the offical router for react

Home page router
```js
const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
);

function App() {

 return (<RouterProvider router={router}/> )
}

```

RouterProvider:
is provide the router

```js

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HoemPage from "./pages/HoemPage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HoemPage/>} />)
);

function App() {

 return (<RouterProvider router={router}/> )
}

export default App

```

layout
```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);
```

Each layout goining through Outlet

Replace a tag with link tag
import { Link } from 'react-router-dom';

<Link to="/"></Link>


## page not found
```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      --<Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
```

## Json server 
It is a mock api 
let us setuo as backend

### save file
db.json / db.json5

{
  "post":[{"id":2}]
}

### How to install json-serve
`npm i -D json-server`
it is dev dependecy

how to run this rest api
--
npx json-server db.json

add in pacjage.json
  "scripts": {
    "server": "json-server --watch src/jobs.json5 --port 5050"
  },
   

    const jobListings = isHome ? jobs.slice(0, 3): jobs;

## useEffect()
takes a function and a depency array

useEffect(() => {},{name}); 
every time name is change this use effect is run

first paramater we have function we can do fetching also


```js
    useEffect(() => {
        const fetchJobs = async () => {

        }
        fetchJobs();
    }, []);
```


    install react spiners 
    npm i react-spinners 


    // create a proxy
    we do that in package.json
```js
    // https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  server:{
    port: 3000,
    proxy:{
      "/api":{
        target:"http://localhost:5050",
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  },
})

```

Render while feaching we can do that it is recommended


## UseParams
for geting pquerry paramerter value

```js
import JobListing from '../components/JobListing'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  const {id} = useParams();
  const [job,setJob] = useState(null);
  const [loading, setLoading] = useState(true)
  
   useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                console.log(data)
                setJob(data);
            } catch (error) {
                console.log("error fctching data", error)
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);


  return ( loading ? <Spinner /> :
    <section className='bg-blue-50 px-4 py-6'>{job.title}</section>
  )
}

export default JobPage
```

## React router data loaders
export data from this component so we can use it elsewheere

import { useParams, useLoaderData } from 'react-router-dom'

// import Spinner from '../components/Spinner'
```js
const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
    return (
    <section className='bg-blue-50 px-4 py-6'>{job.title}</section> )
};
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export { JobPage as default, jobLoader };
```

## useNavigate 
for redirect perpose after submiting the form


## success message
`npm i react-toastify`
import these libray 
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

in continer we can put anywhere
it is absolute

import {toast} from'react=toastify';
    toast.success("Job delete sucessfully");


The line you're referring to:

```js
import JobPage, { jobLoader } from "./pages/JobPage";
```

is using **ES6 module syntax** in JavaScript (typically used in React or modern frontend frameworks). Let’s break down what this means and how it works.

---

## 🔍 What This Line Does

This import statement **does two things**:

### 1. `import JobPage`

This **imports the default export** from the file `./pages/JobPage`.

* The file `JobPage.js` (or `JobPage.jsx/ts/tsx`) must have a **default export**, like:

  ```js
  export default function JobPage() {
    // component code
  }
  ```

  OR

  ```js
  const JobPage = () => { /*...*/ };
  export default JobPage;
  ```

* You can name the default import anything, but it's conventional to match the export name.

---

### 2. `{ jobLoader }`

This **imports a named export** called `jobLoader` from the same file.

* The file must contain:

  ```js
  export const jobLoader = () => {
    // some loader logic
  };
  ```

* Named exports **must match the name exactly** in the import statement.

---

## ✅ Equivalent if Written Separately

The same line:

```js
import JobPage, { jobLoader } from "./pages/JobPage";
```

Is equivalent to:

```js
import JobPage from "./pages/JobPage";       // default export
import { jobLoader } from "./pages/JobPage"; // named export
```

---

## 🧠 Summary

| Syntax                        | Meaning                                        |
| ----------------------------- | ---------------------------------------------- |
| `import X from "file"`        | Imports the **default export** from the module |
| `import { Y } from "file"`    | Imports a **named export**                     |
| `import X, { Y } from "file"` | Imports both the default and a named export    |

---

Let me know if you'd like an example in the context of React or a full `JobPage` file setup.



## Create api request
```js
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob)
    });
    return;
  }
```

## Delete Request 
```js
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE' 
    });
    return;
  }
```

## Update
```js
  const updateJob = async(job)=>{
     const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob)
    });
    return;
  }
  
```

pass api route
<Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
<Route path='/jobs/:id' element={<JobPage  deleteJob={deleteJob}/>} loader={jobLoader} />
<Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />


```
function App() {
  const [count, setCount] = useState(10)

  return (
    <>
     
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
 
    </>
  )
}
```

Hello word using route
```js
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<HomePage />} />
    )
  );

  return (
    <RouterProvider router={router} />
  );
}


export default App

```

This is also ok 
```js
import { Routes, Route, BrowserRouter, } from "react-router-dom"
import HomePage from "./pages/HomePage"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

```
hello world program