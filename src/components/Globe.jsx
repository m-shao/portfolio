import { useEffect, useState } from 'react'
import {Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh} from 'three'
import gsap from 'gsap'


function Globe() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        gsap.fromTo(".globe-canvas", {
            opacity: 0,
            x: '-50%',
        },{
            delay: 0.8,
            duration: 2,
            opacity: 1,
            x: 0,
            ease: 'power4.out',
        })

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    useEffect(() => {
        // initialize the scene
        const scene = new Scene();

        // initialize the camera
        const camera = new PerspectiveCamera(
        50,
        windowSize.width / windowSize.height,
        0.1,
        1000
        );
        camera.position.z = 5;

        // initialize the renderer
        const renderer = new WebGLRenderer({ canvas: document.getElementById("canvas") });
        renderer.setClearColor(0xffffff, 0);

        // create the mesh sphere
        const geometry = new SphereGeometry(2, 32, 32);
        const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const sphere = new Mesh(geometry, material);

        // add the mesh sphere to the scene
        scene.add(sphere);

        function resizeCanvasToDisplaySize(force) {
            const canvas = renderer.domElement;
            // look up the size the canvas is being displayed
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
          
            // adjust displayBuffer size to match
            if (force || canvas.width !== width || canvas.height !== height) {
              // you must pass false here or three.js sadly fights the browser
              renderer.setSize(width, height, false);
              camera.aspect = width / height;
              camera.updateProjectionMatrix();
          
              // update any render target sizes here
            }
          }

        // render loop
        function render() {
            resizeCanvasToDisplaySize();
            requestAnimationFrame(render);
            sphere.rotation.y += 0.001;
            renderer.render(scene, camera);
        }

        // start the render loop
        render();
    }, [windowSize])
    
    return (
        <div className='w-screen h-screen'>
            <canvas id="canvas" className='static w-screen h-full bg-port-dark globe-canvas'></canvas>
        </div>
    )
}

export default Globe