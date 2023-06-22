import { useEffect, useRef } from 'react';
import gsap from 'gsap'
import CircleType from 'circletype'

function Cursor() {

    const cursorRef = useRef(null)

    useEffect(() => {
        
        new CircleType(cursorRef.current)
        window.addEventListener("pointermove", moveCircle);

        gsap.set('.circle', {
            xPercent: -50,
            yPercent: -50
        });

        gsap.to(".circle", {
            rotation: 360,
            repeat: -1,
            duration: 4,
            ease: "linear",
        });
        
        function moveCircle(e) {
            gsap.set('.circle', {
                delay: 0.1,
                ease: "easeOut",
                left: e.clientX,
                top: e.clientY,
            });
        }

        return () => {
            window.removeEventListener("cursormove", moveCircle);
        }
    }, [])

    return (
        <div className="cursor absolute top-0 left-0 pointer-events-none z-50 overflow-visible mix-blend-difference sm-m:hidden">
            <div className='circle fixed flex justify-center items-center' >
                <div className='absolute w-6 h-6 bg-port-light rounded-full'></div>
                <h1 ref={cursorRef} className='font-[montserrat] absolute cursorText1 text-sm'>WELCOME WELCOME</h1>
            </div>
            
        </div>  
    )
}

export default Cursor