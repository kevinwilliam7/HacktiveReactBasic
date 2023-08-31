export default function NextCard() {
    return (
        <div className="pl-10 pr-10 pb-7">
            <div className="flex flex-row">
                <div className="basis-1/2 md:basis-1/2"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next Meetup</h5></div>
                <div className="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" className="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="{}">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Awesome meetup and event</h2>
                    <h1 className="mb-2 text-base text-gray-400 font-bold">25 January 2019</h1>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
        </div>
    );
}