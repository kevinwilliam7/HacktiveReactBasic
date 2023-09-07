import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function ExperienceScreen() {
	return (
		<div className='mb-auto h-full flex flex-col'>
			<div>
				<div id='project' className='flex flex-row gap-10 justify-start max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
					<p className='text-xl'>$</p>
					<TypeAnimation className='text-2xl font-bold' sequence={
						['My Experience', 1000]
					}/>
				</div>
				<div id='project' className='grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-4 justify-start h-full max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
			</div>
			</div>
		</div>
	)
}
