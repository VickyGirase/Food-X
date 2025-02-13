import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    
    const [emailId, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/login", { emailId, password },
                { withCredentials: true }
            );
            return navigate("/body");
        } catch (error) {
            console.log("Error during authentication:", error);
        }
    };

  return (
    <div className="h-screen flex justify-center flex-col">
       <div className="flex justify-center">
       <a href="#" className="block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
               <div>
                   <div className="px-10">
                       <div className="text-3xl font-extrabold">
                           Login
                       </div>
                   </div>
                      <div className="pt-2">
                      <p className="block mb-2 text-sm text-black font-semibold pt-4">EmailID</p>
                          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" label="EmailId" placeholder="Vicky@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                          <p className="block mb-2 text-sm text-black font-semibold pt-4">Password</p>
                       <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" label="Password" type={"password"} placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
                           <button type="submit" onClick={handleSubmit} className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login</button>
                           <p>Don't Have an Account</p>
                           <button type="submit" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => navigate("/")} >Sign up</button>
       
                   </div>
               </div>
           </a>
       </div>
       </div>
     )
}

export default Login