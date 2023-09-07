import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function ProjectScreen() {
    let listProject = [
        {
            "id":1,
            "title": "Movie App",
            "img": "https://user-images.githubusercontent.com/76833135/137587775-1c99b18f-83bc-44cb-beaf-0e36314ae4a6.png",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "tag": [
                {"id":1, "name":"Tailwind"},
                {"id":2, "name":"PHP"},
                {"id":3, "name":"Laravel"},
            ]
        },
        {
            "id":3,
            "title": "Dokumen Siremun UNTAN",
            "img": "https://github-production-user-asset-6210df.s3.amazonaws.com/76833135/266365430-5c08d8a8-6870-4d95-82ae-ae902a4e0f5d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230907T154509Z&X-Amz-Expires=300&X-Amz-Signature=c1d6a2a04344400b6df359604ffc3d50b6d45c01c487176480f4cdcac290a82f&X-Amz-SignedHeaders=host&actor_id=76833135&key_id=0&repo_id=624432966",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "tag": [
                {"id":2, "name":"PHP"},
                {"id":4, "name":"Bootstrap"},
                {"id":3, "name":"Laravel"},
            ]
        },
        {
            "id":4,
            "title": "QTemu",
            "img": "https://user-images.githubusercontent.com/76833135/264539611-33c79abc-021d-4f2d-883c-4077b4877d3b.png",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "tag": [
                {"id":2, "name":"ReactJS"},
            ]
        },
        {
            "id":2,
            "title": "Presensi Kedokteran UNTAN",
            "img": "https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "tag": [
                {"id":4, "name":"Flutter"},
            ]
        },
    ];
    return (
        <div className='mb-auto h-full flex flex-col'>
            <div>
                <div id='project' className='flex flex-row gap-10 justify-start max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
                    <p className='text-xl'>$</p>
                    <TypeAnimation className='text-2xl font-bold' sequence={
                        ['My Project', 1000]
                    }/>
                </div>
                <div id='project' className='grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-4 justify-start h-full max-w-screen-2xl mx-auto pt-10 pb-10 pl-5 pr-5'>
                    {
                        listProject.map(data => {
                            return (
                                <div key={data.id} className="rounded-lg overflow-hidden border-2 border-gray-100 shadow-md hover:shadow-lg hover:border-indigo-200">
                                    <img className="w-full" src={data.img} alt={data.title}></img>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{data.title}</div>
                                        <p className="text-gray-700 text-base">{data.description}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        {
                                            data.tag.map(item => {
                                                console.log(item);
                                                return <span key={item.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-125">#{item.name}</span>
                                            }, {})
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
