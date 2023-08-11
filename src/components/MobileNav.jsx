import React from 'react'
function MobileNav() {

    const handleClick = _ => {
        const links = document.querySelector(".links")
        links.classList.toggle("hidden")
    }

  return (
    <>
    <div className='md:hidden'>
        <nav>
        <input
            className='hidden'
            id="checkbox"
            type="checkbox"
        />
            <label
                onClick={handleClick}
                className="toggle absolute z-50 top-8 left-12 w-8 h-8 cursor-pointer flex flex-col items-start justify-center gap-[6px] duration-[.5s]"
                htmlFor="checkbox"
            >
                <div id="bar1" className="bars w-[50%]"></div>
                <div id="bar2" className="bars duration-[.8s] w-[75%]"></div>
                <div id="bar3" className="bars w-full"></div>
            </label>
            <div
                className="links hidden w-[80%] absolute left-9 top-5 p-10 pb-4 z-10 rounded-lg shadow-lg bg-slate-50"
            >
                <ul className='text-left pl-4 mt-1 links-container'>
                    <li className='pb-2'><a className='w-full inline-block hover:text-gray-500 hover:pl-6 duration-300 ease-in-out' href="#home">Home</a></li>
                    <li className='pb-2'><a className='w-full inline-block hover:text-gray-500 hover:pl-6 duration-300 ease-in-out' href="#about">About</a></li>
                    <li className='pb-2'><a className='w-full inline-block hover:text-gray-500 hover:pl-6 duration-300 ease-in-out' href="#projects">Projects</a></li>
                    <li><a className='w-full inline-block hover:text-gray-500 hover:pl-6 duration-300 ease-in-out' href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default MobileNav