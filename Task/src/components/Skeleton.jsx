import React from 'react'

const Skeleton = () => {
    return (
        <div className='border shadow-lg rounded-xl my-5 bg-slate-200' >
            <div className='m-5 gap-y-4' >
                <div className='w-full rounded-xl h-8 animate-pulse bg-slate-400' >

                </div>
                <div className='mt-5'>
                    <div className='w-full rounded-xl h-3 animate-pulse bg-slate-400 mt-2' ></div>
                    <div className='w-full rounded-xl h-3 animate-pulse bg-slate-400 mt-2' ></div>
                    <div className='w-full rounded-xl h-3 animate-pulse bg-slate-400 mt-2' ></div>
                    <div className='w-full rounded-xl h-3 animate-pulse bg-slate-400 mt-2' ></div>
                </div>
                <div className=' rounded-xl h-5 w-40 animate-pulse bg-slate-400 mt-3' ></div>

               

            </div>

        </div>
    )
}

export default Skeleton