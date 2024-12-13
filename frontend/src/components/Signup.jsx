import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-800">
      <h1 className="text-2xl font-bold text-center text-white">Signup</h1>
      <form action="">
        <div>
            <label className="label p-2">
              <span className="font-medium text-gray-500">Name</span>
            </label>
            <input 
            className="w-full input input-bordered h-10"
            type='text' placeholder="type your name" />

            <label className="label p-2">
              <span className="font-medium text-gray-500">Username</span>
            </label>
            <input 
            className="w-full input input-bordered h-10"
            type='text' placeholder="username" />

            <label className="label p-2">
            <span className="font-medium text-gray-500">Password</span>
            </label>
            <input 
            className="w-full input input-bordered h-10"
            type='password' placeholder="type your password" />

            <label className="label p-2">
              <span className="font-medium text-gray-500">Confirm Password</span>
            </label>
            <input 
            className="w-full input input-bordered h-10"
            type='password' placeholder="confirm password" />
        </div>
        <div className="flex items-center my-5">
          <div className=" flex items-center">
            <p>Male</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
          </div>
          <div className="flex items-center">
            <p>Female</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
          </div>
       
       
        </div>
        <Link to ='/login' className="text-blue-800">
          Already have an account?
        </Link>
      </form>
    </div>
    </div>
  )
}

export default Signup