import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Content() {
	return (
		<main className='mb-auto h-full'>
			<div id='about' className='flex flex-row gap-10 bg-blue-100 items-center justify-center p-14 h-full'>
				<div>
				<Player className='hidden xl:block md:block' autoplay loop src="https://lottie.host/7704daac-0880-44b9-a9e7-a7bb1f125973/KdU6k2zEXY.json" style={{ height: '450px', width: '450px' }}>
					<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']}/>
				</Player>
				</div>
				<div className='flex-wrap'>
				<TypeAnimation repeat={Infinity} sequence={
					['Programmer Noob', 1000, 'System Integrator', 1000]
				} className='text-2xl font-bold'/>
				<p className='text-ellipsis overflow-hidde text-md text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5">
					About Me
				</button>
				</div>
			</div>
		</main>
	)
}
