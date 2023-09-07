import React from 'react'
import { BsDiscord, BsGithub, BsInstagram} from 'react-icons/bs';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { MdPrivacyTip } from 'react-icons/md'
import { RiIndeterminateCircleFill } from 'react-icons/ri'
import { Controls, Player } from '@lottiefiles/react-lottie-player';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                <hr className="my-6 lg:my-8border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href={"/about"} className="flex items-center">
                            <Player autoplay loop src="https://lottie.host/c323b1bd-ffa2-492e-80a1-e0542dd7ad87/47hUXGnpJY.json" style={{ height: '50px', width: '50px' }}>
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kevin William</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline flex items-center">
                                        <BiLogoTailwindCss/> &nbsp;                                 
                                        Flowbite
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline flex items-center">
                                        <BiLogoTailwindCss/> &nbsp;                                 
                                        Tailwind CSS
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline flex items-center">
                                        <BsGithub/> &nbsp;                                 
                                        Lottiefiles
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/kevinwilliam7" className="hover:underline flex items-center">
                                        <BsGithub/> &nbsp;                                 
                                        Github
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/kevinwilliam7" className="hover:underline flex items-center">
                                        <BsDiscord/> &nbsp;                                 
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/lingelson7" className="hover:underline flex items-center">
                                        <BsInstagram/> &nbsp;                                 
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline flex items-center">
                                        <MdPrivacyTip/> &nbsp; Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline flex items-center">
                                        <RiIndeterminateCircleFill/> &nbsp; Terms &amp; Conditions                             
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
