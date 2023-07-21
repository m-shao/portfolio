import ProjectPreview from "./ProjectPreview"

import poogatype from '../images/poogatype.png'
import coffeeCoach from '../images/coffeeCoach.png'
import outfitSocial from '../images/outfitSocial.png'


function Panel3() {

    return (
        <div id='panel3' className='w-screen py-48 sm:py-96 bg-port-dark flex items-center flex-col min-h-screen sticky'>
            <h1 className='text-[10vw]'>Projects</h1>
            <div className='flex flex-col w-[60vw]'>
                <ProjectPreview name="Poogatype" isWinner={false} colour="bg-indigo-700" image={poogatype} link={"https://poogatype.web.app/"}/>
                <ProjectPreview name="Coffee Coach" isWinner={true} winnerName={"WINNER JAMHACKS"} colour="bg-amber-900" image={coffeeCoach} link={"https://devpost.com/software/creative-juices-come-later"}/>
                <ProjectPreview name="Outfit Social" isWinner={true} winnerName={"WINNER HACKBATTLE"} colour="bg-teal-900" image={outfitSocial} link={"https://outfit-social-app.web.app/"}/>
            </div>
            
        </div>
    )
}

export default Panel3