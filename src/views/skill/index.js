import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaCss3, FaHtml5, FaLaravel, FaNode, FaPhp, FaPython, FaReact, FaUbuntu } from 'react-icons/fa'
import { BiLogoBootstrap, BiLogoFlutter, BiLogoJavascript, BiLogoPython, BiLogoTailwindCss } from 'react-icons/bi'
import SkillCard from '../../components/card/skill';

export default function SkillScreen() { 
	let listSkill = [
		{"id":1, "name": "Laravel", "icon": <FaLaravel size={50}/>, "status": "amateur"},
		{"id":2, "name": "Flutter", "icon": <BiLogoFlutter size={50}/>, "status": "amateur"},
		{"id":3, "name": "React", "icon": <FaReact size={50}/>, "status": "new"},
		{"id":4, "name": "PHP", "icon": <FaPhp size={50}/>, "status": "amateur"},
		{"id":5, "name": "Javascript", "icon": <BiLogoJavascript size={50}/>, "status": "noob"},
		{"id":6, "name": "Python", "icon": <FaPython size={50}/>, "status": "noob"},
		{"id":7, "name": "Bootstrap", "icon": <BiLogoBootstrap size={50}/>, "status": "amateur"},
		{"id":8, "name": "Tailwind", "icon": <BiLogoTailwindCss size={50}/>, "status": "amateur"},
		{"id":9, "name": "Ubuntu", "icon": <FaUbuntu size={50}/>, "status": "amateur"},
		{"id":10, "name": "HTML", "icon": <FaHtml5 size={50}/>, "status": "amateur"},
		{"id":11, "name": "CSS", "icon": <FaCss3 size={50}/>, "status": "amateur"},
		{"id":12, "name": "NodeJS", "icon": <FaNode size={50}/>, "status": "amateur"},
	];
	return (
		<div className='mb-auto h-full flex flex-col'>
			<div>
				<div id='project' className='flex flex-row gap-10 justify-start max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
					<p className='text-xl'>$</p>
					<TypeAnimation className='text-2xl font-bold' sequence={
						['My Skill', 1000]
					}/>
				</div>
				<div id='project' className='grid grid-cols-2 xl:grid-cols-8 gap-4 md:grid-cols-6 sm:grid-cols-4 justify-center h-full max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
					{
						listSkill.map(data => {
							return <SkillCard key={data.id} icon={data.icon}/>
						})
					}
				</div>
			</div>
		</div>
	)
}
