import React from 'react'

const SlidingText = ({ text, idNumber }) => {
    return (
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] bg-brandNeutral-200">
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-3 md:[&_li]:mx-5 lg:[&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                {[...Array(10)].map((_, index) => {
                    return(
                        <li className='inline-block mx-8 text-center md:mx-12 lg:mx-16' target="_blank" key={"1" + idNumber + index}>
                            <h1 className='text-wrap-none'>{text}</h1>
                        </li>
                    )
                })}
            </ul>     
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-3 md:[&_li]:mx-5 lg:[&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                {[...Array(10)].map((_, index) => {
                    return(
                        <li className='inline-block mx-8 text-center md:mx-12 lg:mx-16' target="_blank" key={"1" + idNumber + index}>
                            <h1 >{text}</h1>
                        </li>
                    )
                })}
            </ul>        
        </div>
    )
}

export default SlidingText