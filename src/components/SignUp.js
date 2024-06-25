import axios from 'axios';
import React,{useState} from 'react'

export const SignUp = () => {
  const [name,setName]=useState("");
  const [psswd,setPsswd]=useState("");
  const [phn,setPhn]=useState("");
  const [email,setEmail]=useState("");

  const handlesubmit=()=>{
    axios
      .post("http://localhost:3001/users",{name,psswd,phn,email})
      .then(()=>{
        alert("Data saved successfully");
        setName("");
        setPsswd("");
        setPhn("");
        setEmail("");
      })
      .catch((e)=>(console.log(`error:${e}`)))
  }

  return (
    <div>
      <center>
      <form>
      NAME:
      <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br></br> <br></br>
      password:
      <input type='text' value={psswd} onChange={(e)=>{setPsswd(e.target.value)}} /> <br></br> <br></br>
      PHONE NO:
      <input type='text' value={phn}  onChange={(e)=>{setPhn(e.target.value)}} />   <br></br> <br></br>
      EMAIL:
      <input type='text' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />  <br></br> <br></br>

      <button onClick={handlesubmit}>SIGN UP</button>

      </form>
      </center>
    </div>
  )
}
export default SignUp
