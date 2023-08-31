import Avatar from "../../../components/atoms/avatar";

export default function MemberCard() {
    return (
        <div className="pl-10 pr-10 pb-7">
            <div className="flex flex-row">
                <div className="basis-1/2 md:basis-1/2"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Members</h5></div>
                <div className="basis-1/2 md:basis-1/2 text-right pr-2"><a href="{}" className="mb-2 text-base font-bold tracking-tight text-blue-500 dark:text-white">See All</a></div>
            </div>
            <div className="flex xl:flex-row md:flex-col flex-col gap-4">
                <div className="flex-1">
                    <div className="flex xl:justify-normal md:justify-center xl:flex-row md:flex-row flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div className="flex-1 w-16">
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex xl:justify-normal md:justify-center xl:flex-row md:flex-row flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div className="flex-1 w-16">
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex xl:justify-normal md:justify-center xl:flex-row md:flex-row flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Avatar/>
                        <div className="flex-1 w-16">
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Name</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Job</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">Street Fotographer</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 className="break-normal mb-2 text-base text-gray-600 font-bold">Mail</h1></td>
                                        <td><h1 className="break-normal mb-2 ml-2 text-base text-gray-900 font-bold">kevinwilliam@untan.gmail.com</h1></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}