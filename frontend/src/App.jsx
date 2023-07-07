import { useState } from "react";
import Login from "./login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Welcome to Meal Master</h1>
      <Login />
      <div></div>
    </>
  );
}

export default App;
