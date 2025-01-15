import React from 'react'

const Header = () => {
    return (
        <div className='flex py-4 bg-slate-300 px-5 sm:px-10 md:px-12' >
            <div className='sm:w-1/2' >
                <h2 className='text-slate-800 font-bold'>ContenTerra React Dev Task</h2>
                <p  className='text-xs mt-2' >This task involves building a responsive web page that fetches JSON data from the provided Reddit API endpoint and displays it in a structured format</p>
                <p className='text-xs mt-1.5' >Note: I've formatted the data in a more user-friendly way, as the reference image was unavailable.</p>
            </div>
        </div>
    )
}

export default Header