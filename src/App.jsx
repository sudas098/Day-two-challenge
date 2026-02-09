import { useState, useEffect, useRef } from "react";

export default function App() {

  const [ name, setName ] = useState("");
  const [ status, setStatus ] = useState("idel");
  const submiteCounter = useRef(0);
  const inputRef = useRef(null);

  useEffect (() => {

    inputRef.current?.focus();
  }, []) ;


 const handelSubmite = async (e) => {

   e.preventDefault(); 
   setStatus("loading");

   submiteCounter.current += 1;

    await new Promise((res) => setTimeout(res, 1000));

     setStatus("Success");
     setName("");
 };


 return(

  <>

  <h2>Submite count: {submiteCounter.current}</h2>

  <form onSubmit={handelSubmite}>

    <input
      ref={inputRef} 
      type="text"
      placeholder="Enter Your Name"
      value={ name }
      onChange={(e) => setName(e.target.value)}

    />

    <button disabled = { status === "loading"}>{ status === "loading" ? "Submiting" : "Submite"}</button>

    { status === "Success" && <p>Submitted successfully</p>}
  </form>
  
  
  </>
 )
}