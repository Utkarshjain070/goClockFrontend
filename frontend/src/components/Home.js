import {React, useState} from 'react'
import Nav from './Nav.js'
import {Link} from "react-router-dom"

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      fetch("https://goclock.onrender.com/login",{
        method: "post",
        crossDomain: true,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            email,
            password
        })
      }).then((res)=>res.json().then((data)=>{
        console.log(res)
        if(data.status==="ok"){
            alert("Login Successful");
             console.log(data.status, data.data.loginUser);
             window.localStorage.setItem('token', data.data);
        if(data.data.loginUser.userType==="manufacturer"){
            window.location.href="/MLandingPage"
        }
        else if(data.data.loginUser.userType==="transporter"){
            window.location.href="/TLandingPage"
        }
            }
            else{
           alert(data.error);
            }
      }))

      setEmail("")
      setPassword("")
      
    }
    
  return (
    <div>
      <Nav/>
<div>
<div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          </div>
          <div>
          <Link
            to="/Registration"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Don't have an account? Sign up
          </Link>
          </div>
      
      </form>
    </div>
</div>

    </div>
  )
}

export default Home
