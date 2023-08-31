import Button from "../../../components/atoms/button";

export default function PastCard() {
    return (
        <div className="pl-10 pr-10 pb-7">
            <div className="flex flex-row">
                <div className="basis-1/2 md:basis-1/2"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Past Meetup</h5></div>
                <div className="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" className="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div className="flex xl:flex-row md:flex-row flex-col gap-4">
                <div className="flex-1">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 November 2017</h1>
                        </a>
                        <hr className="p-2"></hr>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS November Meetup with Kumparan</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>139</strong> Went</p>
                        <Button title={"Join US"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between"}/>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 Oktober 2017</h2>
                        </a>
                        <hr className="p-2"></hr>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS Oktober Meetup with Kumparan</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>113</strong> Went</p>
                        <Button title={"Join US"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between"}/>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 September 2017</h2>
                        </a>
                        <hr className="p-2"></hr>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS September Meetup with Kumparan</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>110</strong> Went</p>
                        <Button title={"Join US"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}