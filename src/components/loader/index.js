import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function Loader() {
  return (
    <div className="relative overflow-x-auto rounded shadow-lg flex items-center justify-center h-screen">
        <h1 className='font-bold text-3xl'>Loading</h1>
        <Player autoplay loop src="https://lottie.host/c323b1bd-ffa2-492e-80a1-e0542dd7ad87/47hUXGnpJY.json" style={{ height: '100px', width: '100px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </div>
  )
}
