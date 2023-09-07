import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function AboutScreen() {
	return (
		<div className='mb-auto h-full bg-blue-100 flex flex-col'>
			<div id='about' className='flex flex-row gap-10 items-center justify-center h-full max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
				<div>
					<Player className='hidden xl:block sm:block w-1/4 h-1/4 sm:w-96 sm:h-96' autoplay loop src="https://lottie.host/7704daac-0880-44b9-a9e7-a7bb1f125973/KdU6k2zEXY.json">
						<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']}/>
					</Player>
				</div>
				<div>
					<TypeAnimation className='text-2xl font-bold' repeat={Infinity} sequence={
						['Programmer Noob', 1000, 'System Integrator', 1000]
					}/>
					<p className='mt-5 text-ellipsis overflow-hidde text-md text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<p className='mt-5 text-ellipsis overflow-hidde text-md text-justify'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Aenean consectetur mauris id ante congue, ut auctor odio ultrices. Quisque velit erat, sollicitudin ac pharetra vel, lobortis eget justo. Nulla a auctor erat, eget auctor nisi. Nullam eu blandit ante. Vivamus scelerisque est sit amet ante fringilla sagittis. Praesent hendrerit est lacus, eget tincidunt lorem lacinia eu. Nunc sit amet nulla eu magna sollicitudin fermentum at vel eros. Aliquam suscipit lorem a justo viverra, eu eleifend odio rutrum. Cras ut velit vel dolor interdum tincidunt. Phasellus vehicula massa in interdum condimentum. Maecenas ultricies nisi ut sapien auctor feugiat. Suspendisse potenti. In nec lorem nunc. Duis at egestas felis. Morbi accumsan enim eu urna commodo consectetur. Nulla posuere nisl vitae nulla vestibulum venenatis.</p>
					<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5">
						Hire Me
					</button>
				</div>
			</div>
		</div>
	)
}
