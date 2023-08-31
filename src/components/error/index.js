import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Error({message}) {
  return (
    <div className="relative overflow-x-auto rounded shadow-lg flex items-center justify-center h-screen flex-col">
        <Player autoplay loop src="https://lottie.host/7704daac-0880-44b9-a9e7-a7bb1f125973/KdU6k2zEXY.json" style={{ height: '250px', width: '250px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <TypeAnimation
          sequence={[
            'Error Gan '+{message},
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
    </div>
  )
}
