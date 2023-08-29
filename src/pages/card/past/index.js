
export default function PastCard() {
    return (
        <div class="pl-10 pr-10 pb-7">
            <div class="flex flex-row">
                <div class="basis-1/2 md:basis-1/2"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Past Meetup</h5></div>
                <div class="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" class="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div class="flex">
                <div class="flex-1 w-128 pr-2">
                    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h1 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 November 2017</h1>
                        </a>
                        <hr class="p-2"></hr>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS April Meetup with Kumparan</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>139</strong> Went</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View
                        </button>
                    </div>
                </div>
                <div class="flex-1 w-64 pr-2">
                    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 Oktober 2017</h2>
                        </a>
                        <hr class="p-2"></hr>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS April Meetup with Kumparan</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>113</strong> Went</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View
                        </button>
                    </div>
                </div>
                <div class="flex-1 w-32 pr-2">
                    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="{}">
                            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">27 September 2017</h2>
                        </a>
                        <hr class="p-2"></hr>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#39 JakartaJS April Meetup with Kumparan</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>110</strong> Went</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}