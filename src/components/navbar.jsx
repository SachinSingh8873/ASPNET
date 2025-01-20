import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex bg-base-100 bg-black bg-opacity-10 p-5 rounded-box">
            <a className="btn btn-ghost bg-blue-500 text-white hover:bg-white-600 hover:text-blue-500 text-xl mr-auto">resources.com</a>
            <input type="text" placeholder="Search" className="input w-auto md:w-auto mr-2" />
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-8">
                    <div className="w-10 rounded-full">
                        <img alt="User Pic" src="..\src\assets\react.svg" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
                    <li><a>Settings</a></li>
                    <li><a href='Login'>Logout</a></li>
                </ul> 
            </div>
    </div>
    </>
)
}

export default Navbar