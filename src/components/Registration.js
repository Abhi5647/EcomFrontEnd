import React ,{useEffect,useState}from 'react';
import '../css/register.css';
import axios from 'axios';
export const Registration = () => {
  const [registerData, SetRegisterData] = useState({
    name:"",
    phone:"",
    email:"",
    password:""
  });
  const handleInput=(e)=>{
      e.preventDefault();
      const name=e.target.name;
      const value=e.target.value;
      SetRegisterData({...registerData,[name]:value})
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(registerData);
    axios.post('http://localhost:5000/register', { ...registerData })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/" //This line of code will redirect you once the submission is succeed
      })
  }
  return (
    <div>
         <form id="formID" onSubmit = { handleSubmit }>
            <div className="container">
              <div></div>
            <div><br />
            <h1>Register Here</h1><br /><br />
            <p>Please fill in the details to create an account with us.</p><br />
            <div className='Regis'><label className='label' for="email"><b>Name : </b></label>
            <input className='inputArea' onChange={handleInput} type="text" name="name" id=""  /></div>
            <div className='Regis'><label className='label' for="phone"><b>Phone : </b></label>
            <input className='inputArea' type="tel" onChange={handleInput} name="phone" id="" /></div>
            <div className='Regis'><label className='label' for="email"><b>Email  : </b></label>
            <input className='inputArea' type="email" onChange={handleInput} name="email" id="" /></div>
            <div className='Regis'><label className='label' for="pwd"><b>Password : </b></label>
            <input className='inputArea' type="password" onChange={handleInput} name="password" id="" /></div>
            <div className='Regis'><label className='label' for="confirm"><b>Confirm Password : </b></label>
            <input className='inputArea' type="password"  name="confirm" id="" /></div>
            <br />
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p><br />
            <button type="submit"  class="registerbtn"><strong>Register</strong></button>
            </div> 
            
            <div></div>
            </div>
         </form>
    </div>
    
  )
}
