import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Button from "../../../components/atoms/button";
export default function MainCard() {
    return (
        <div className="pt-10 pl-10 pr-10 pb-7">
            <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex-1 h-64 xl:justify-start lg:justify-start">
                    <Player autoplay loop src="https://lottie.host/90d8006b-a505-4760-b4d5-21e8214ea998/bYN06nArcq.json" style={{ height: '250px', width: '250px' }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <div className="flex-1 p-10">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hacktive8 Meetup</h2>
                    <table>
                        <tr>
                            <td><h1 className="mb-2 text-base text-gray-600 font-bold">Location</h1></td>
                            <td><h1 className="mb-2 ml-2 text-base text-gray-900 font-bold">Jakarta, Indonesia</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className="mb-2 text-base text-gray-600 font-bold">Members</h1></td>
                            <td><h1 className="mb-2 ml-2 text-base text-gray-900 font-bold">1078</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className="mb-2 text-base text-gray-600 font-bold">Organizers</h1></td>
                            <td><h1 className="mb-2 ml-2 text-base text-gray-900 font-bold">Kevin William</h1></td>
                        </tr>
                    </table>
                    <Button title={"Join US"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between"}/>
                </div>
            </div>
        </div>
    );
}