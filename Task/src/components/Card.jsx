import React from 'react'
import { Navigate } from 'react-router-dom';

const Card = ({ title, selfTextHtml, score, url }) => {

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
    const decodedHtml = decodeHtml(selfTextHtml);

    return (
        <div className='border shadow-lg rounded-xl my-5 bg-slate-200' >
            <div className='m-5 gap-y-4' >
                <h3 className='font-bold text-xl' >{title}</h3>
                <hr className='my-3' />
                <h3 className='max-w-full overflow-hidden'>{selfTextHtml?<p className=''  dangerouslySetInnerHTML={{ __html: decodedHtml }}></p>:<p className='opacity-45' >Description not found!</p>}  </h3>
                <div className='flex mt-3 justify-between' >
                    <p>Score : {score}</p>
                    <a href={url}  className='border bg-slate-700 text-white hover:bg-slate-600 px-5 py-1 rounded-lg' >URL &gt;</a>

                </div>

            </div>

        </div>
    )
}

export default Card