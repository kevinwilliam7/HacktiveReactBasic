import Button from "../../../components/atoms/button";
export default function MainCard() {
    return (
        <div class="pt-10 pl-10 pr-10 pb-7">
            <div class="flex flex-wrap p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="h-64" src="https://img.freepik.com/free-vector/colleagues-meetup-illustration_87771-10515.jpg?w=1380&t=st=1693290128~exp=1693290728~hmac=3e30ca7fee13956614753c9e12d934aa3001ba923fcb2930f3a455eaae47309d" alt="Flowbite Logo"></img>
                <div class="flex-1 w-64 p-10">
                    <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hacktive8 Meetup</h2>
                    <table>
                        <tr>
                            <td><h1 class="mb-2 text-base text-gray-600 font-bold">Location</h1></td>
                            <td><h1 class="mb-2 ml-2 text-base text-gray-900 font-bold">Jakarta, Indonesia</h1></td>
                        </tr>
                        <tr>
                            <td><h1 class="mb-2 text-base text-gray-600 font-bold">Members</h1></td>
                            <td><h1 class="mb-2 ml-2 text-base text-gray-900 font-bold">1078</h1></td>
                        </tr>
                        <tr>
                            <td><h1 class="mb-2 text-base text-gray-600 font-bold">Organizers</h1></td>
                            <td><h1 class="mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                        </tr>
                    </table>
                    <Button title={"Join US"} />
                </div>
            </div>
        </div>
    );
}