import ProjectPreview from "../components/ProjectPreview"

import poogatype from '../images/poogatype.png'
import coffeeCoach from '../images/coffeeCoach.png'
import outfitSocial from '../images/outfitSocial.png'

import Footer from "../components/Footer"


function Projects() {

    return (
        <>
            <div className='sticky flex flex-col items-center w-screen min-h-screen pt-48 pb-24 bg-port-dark text-port-light'>
                <h1 className='text-[10vw]'>Projects</h1>
                <div className='flex flex-col w-[60vw]'>
                    <ProjectPreview name="Poogatype" isWinner={false} colour="bg-indigo-700" image={poogatype} link={"https://poogatype.web.app/"}/>
                    <ProjectPreview name="Coffee Coach" isWinner={true} winnerName={"WINNER JAMHACKS"} colour="bg-amber-900" image={coffeeCoach} link={"https://devpost.com/software/creative-juices-come-later"}/>
                    <ProjectPreview name="Outfit Social" isWinner={true} winnerName={"WINNER HACKBATTLE"} colour="bg-teal-900" image={outfitSocial} link={"https://outfit-social-app.web.app/"}/>
                </div>
            </div>
            <div className="w-screen h-[2px] bg-neutral-900"></div>
            <Footer/>
        </>
    )
}

export default Projects