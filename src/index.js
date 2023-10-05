import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const UserContext = createContext()

function Component1() {
  const [user, setUser] = useState('Logesh')
  return <>
    <h1>Hello {user}</h1>  
    <UserContext.Provider value={user} >
      <Component2 />
    </UserContext.Provider>
  </>
}

function Component2() {
  return <>
  <h1>Component 2</h1>
  <Component3 />
  </>
}

function Component3() {
  const user = useContext(UserContext)
  return <>
    <h1>Component 3</h1>
    <h1>Hello again {user}</h1>
    <Component4/>
  </>
}

function Component4() {
  return <>
  <h1>Component 4</h1>
  <Component5/>
  </>
}

function Component5() {
 const user = useContext(UserContext)
  return <>
  <h1>Component 5</h1>
  <h1>Hello again {user}</h1>
  </>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
