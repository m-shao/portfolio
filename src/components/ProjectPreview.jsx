import {useRef, useEffect, useState } from 'react'
import CircleType from 'circletype'
import { gsap } from 'gsap'

function ProjectPreview({ name, isWinner, winnerName="", colour, image}) {

    const [isHovered, setIsHovered] = useState(false);
    const winnerRef = useRef(null)

    useEffect(() => {
        
        if (isWinner){
            new CircleType(winnerRef.current)

            gsap.to(".winner", {
                rotation: 360,
                repeat: -1,
                duration: 4,
                ease: "linear",
            });
        }
        
        function moveCircle(e) {
            gsap.set('.circle', {
                delay: 0.2,
                ease: "linear",
                left: e.clientX,
                top: e.clientY,
            });
        }
        window.addEventListener("pointermove", moveCircle);

        return () => {
            window.removeEventListener("cursormove", moveCircle);
        }
            
    }, [])


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    

    return (
        <>
            <div className='w-full h-[18vw] flex justify-center items-center relative'>
                <div className={'w-full h-[12vw] flex justify-center items-center group ' + colour}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <h2 className='tracking-[2vw] group-hover:tracking-normal group-hover:scale-125 transition-all duration-700 cursor-default text-[6vw]'>
                        {/* style={{fontSize: Math.floor(80/name.length) + "vw"}}*/}
                        {name}
                    </h2>
                    {isWinner &&
                        <h3 ref={winnerRef} className='text-yellow-500 winner absolute top-0 right-0 text-[1vw] font-[montserrat] font-black'>
                            {winnerName}
                        </h3>
                    }
                </div>
            </div>
            <div className={"cursor fixed top-0 left-0 pointer-events-none z-50 overflow-visible w-[25vw] opacity-0 transition-all duration-500 " + (isHovered && "opacity-100")}>
                <div className='circle fixed flex justify-center items-center w-[25vw]' >
                    <img className='w-[25vw] -translate-x-1/2 -translate-y-1/2' src={image} alt="" />
                </div>
            </div>  
      </>
    )
}

export default ProjectPreview