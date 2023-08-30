import Avatar from "../../../components/atoms/avatar";

export default function MemberCard() {
    return (
        <div class="pl-10 pr-10 pb-7">
            <div class="flex flex-row">
                <div class="basis-1/2 md:basis-1/2"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Members</h5></div>
                <div class="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" class="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div class="flex flex-wrap gap-4">
                <div class="flex-1">
                    <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div class="flex-1 w-16">
                            <table>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div class="flex-1 w-16">
                            <table>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div class="flex-1 w-16">
                            <table>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 class="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                    <td><h1 class="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}