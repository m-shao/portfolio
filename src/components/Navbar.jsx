import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';

import star from '../images/star.svg';

function Navbar() {
	useEffect(() => {
		gsap.fromTo(
			'.name-title',
			{
				opacity: 0,
				y: 25,
			},
			{
				duration: 2,
				opacity: 1,
				y: 0,
			}
		);

		gsap.fromTo(
			'.job-title',
			{
				opacity: 0,
			},
			{
				duration: 3,
				opacity: 1,
			}
		);

		gsap.fromTo(
			'.nav-link',
			{
				opacity: 0,
			},
			{
				duration: 3,
				opacity: 1,
				stagger: 0.2,
			}
		);
	}, []);

	return (
		<>
			<div className='sticky top-0 flex items-center justify-center w-full gap-10 py-6 pl-12 md:pl-6 md:gap-12 bg-port-dark'>
				<div className='flex flex-col items-center'>
					<div className='name-title text-[20vw] leading-[85%] z-50 hi top-0 left-0 flex gap-[1vw]'>
						<h1>MINGLUN</h1>
						<img className='w-[5vw]' src={star} alt='' />
						<h1>SHAO</h1>
					</div>
					<p className='job-title font-[montserrat] md:text-[1.5vw] text-[2.7vw]'>
						Fullstack Developer & UI/UX Designer{' '}
					</p>
				</div>
				<div className='font-[montserrat] flex-1 flex justify-center mr-[10%]'>
					<ul className='flex flex-col gap-4 text-[max(1.1vw,0.5rem)] min-text-lg'>
						<li className='cursor-pointer nav-link group'>
							<Link to='tech-stack'>
								<h2>Tech&nbsp;Stack</h2>
								<div className='h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-full'></div>
							</Link>
						</li>
						<li className='cursor-pointer nav-link group'>
							<Link to='projects'>
								<h2>Projects</h2>
								<div className='h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5'></div>
							</Link>
						</li>
						<li className='cursor-pointer nav-link group'>
							<Link to='contact'>
								<h2>Contact</h2>
								<div className='h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5'></div>
							</Link>
						</li>
						<li className='cursor-pointer nav-link group'>
							<div>
								<a
									href='/resume.pdf'
									alt='Minglun Shao Resume'
									target='_blank'
									rel='noopener noreferrer'>
									Resume
								</a>
								<div className='h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5'></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
