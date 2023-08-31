
export default function AboutCard() {
    return (
        <div className="pl-10 pr-10 pb-7">
                <div className="flex flex-row">
                <div className="basis-1/2 md:basis-1/2"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Meetup</h5></div>
                <div className="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" className="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <p>Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta Area</p>
                <p className="mt-5">Twitter: @JakartaJS and we use the hashtag #jakartajs9</p>
            </div>
        </div>
    );
}