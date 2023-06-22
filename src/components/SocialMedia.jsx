import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

function SocialMedia() {

    return (
        <div className="flex gap-4 fixed right-6 bottom-6">
            <a href="https://www.instagram.com/mulligan______/" target="_blank" className='pointer-cursor'>
                <img src={instagram} alt="instagram logo" />
            </a>  
            <a href="https://www.linkedin.com/in/minglun-shao" target="_blank"  className='pointer-cursor'>
                <img src={linkedin} alt="linkedin logo" />
            </a>
            <a href="https://github.com/m-shao" target="_blank"  className='pointer-cursor'>
                <img src={github} alt="github logo" />
            </a>  
        </div>
    )
}

export default SocialMedia