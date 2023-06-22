import ProjectPreview from "./ProjectPreview"

import poogatype from '../images/poogatype.png'
import coffeeCoach from '../images/coffeeCoach.png'
import outfitSocial from '../images/outfitSocial.png'


function Panel3() {

    return (
        <div className='w-screen py-48 bg-port-dark flex justify-center items-center flex-col min-h-screen'>
            <h1 className='text-[10vw]'>Projects</h1>
            <div className='flex flex-col w-[60vw]'>
                <ProjectPreview name="Poogatype" isWinner={false} colour="bg-indigo-600" image={poogatype}/>
                <ProjectPreview name="Coffee Coach" isWinner={true} winnerName={"WINNER JAMHACKS"} colour="bg-amber-900" image={coffeeCoach}/>
                <ProjectPreview name="Outfit Social" isWinner={true} winnerName={"WINNER HACKBATTLE"} colour="bg-teal-900" image={outfitSocial}/>
            </div>
            
        </div>
    )
}

export default Panel3