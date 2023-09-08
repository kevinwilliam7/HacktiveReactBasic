import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function ExperienceScreen() {
	let listExperience = [
		{
			"id": 1,
			"name": "Universitas Tanjungpura",
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"status":"Latest",
			"date": "Januari, 03th, 2023"
		},
		{
			"id": 2,
			"name": "Startup Pontianak",
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"status":"Old",
			"date": "Januari, 23th, 2022"
		},
		{
			"id": 3,
			"name": "Bawaslu Pontianak",
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"status":"Old",
			"date": "June, 17th, 2021"
		}
	]
	return (
		<div className='mb-auto h-full flex flex-col'>
			<div>
				<div id='project' className='flex flex-row gap-10 justify-start max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
					<p className='text-xl'>$</p>
					<TypeAnimation className='text-2xl font-bold' sequence={
						['My Experience', 1000]
					}/>
				</div>
				<div id='project' className='grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-4 justify-start h-full max-w-screen-2xl mx-auto pt-10 pb-10 pl-10 pr-10'>
					<ol class="relative border-l border-gray-200 dark:border-gray-700">
						{
							listExperience.map(data => {
								return <li class="mb-10 ml-6">            
									<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
										<svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
											<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
										</svg>
									</span>
									<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{data.name} {data.status==='Latest' ? <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span> : null}</h3>
									<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{data.date}</time>
									<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{data.description}</p>
									{
										data.status === 'Latest' ?
											<a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
												<path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
												<path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
												</svg> Download ZIP
											</a> : null
									}
								</li>
							})
						}                
					</ol>
				</div>
			</div>
		</div>
	)
}
