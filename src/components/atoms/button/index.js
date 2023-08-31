import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react'

export default function Button({title, className, onClick}) {
  const [isLoading, setIsLoading] = useState()

  const getClicked = () => {
    setIsLoading(
      <Player autoplay loop src="https://lottie.host/18423265-1b40-4f59-9441-0cce93d5fba9/3QBS4hPzkj.json" style={{ height: '50px', width: '50px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player> 
    )
  }

  return (
    <button onClick={getClicked} className={className}>
        {isLoading ?? title}
        {isLoading ? <p className='pt-3 pr-3'>Loading...</p> : ''}
    </button>
  )
}

