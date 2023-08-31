import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function Notfound() {
  return (
    <div className="relative overflow-x-auto rounded shadow-lg flex items-center justify-center h-screen flex-col">
        <Player autoplay loop src="https://lottie.host/7704daac-0880-44b9-a9e7-a7bb1f125973/KdU6k2zEXY.json" style={{ height: '250px', width: '250px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <p className='font-bold text-2xl'>Oopss, Data Not Found</p>
    </div>
  )
}
