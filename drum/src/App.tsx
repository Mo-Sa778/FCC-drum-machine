import { useState } from 'react'
import './App.css'
import { AudioClip } from './types'
import Drum from './drum'
const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3",
    description: "arrow"

  },
  {
    keyTrigger: "W",
    url: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/missile.mp3",
    description: "Missile Sound",
  },
  {
    keyTrigger: "E",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3",
    description: "Crumble Sound",
  },
  {
    keyTrigger: "A",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/bomb.mp3",
    description: "Bomb Sound",
  },
  {
    keyTrigger: "S",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3",
    description: "Spring Sound",
  },
  {
    keyTrigger: "D",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3",
    description: "Pop Sound",
  },
  {
    keyTrigger: "Z",
    url: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3",
    description: "Got Item Sound",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater-1 Sound",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater-4_1 Sound",
  },
]

function App() {
  
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase())
    if(!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error)
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
}

  return (
    <>
    <div className="container" id="drum-machine" onKeyDown={playAudio}><h1>FCC Drum Machine</h1>
    <div className="whole-drum">
      {audioClips.map((clip) => (
        <Drum audioClip={clip} />
      )
      )}
    </div>
    <div id="display"></div>
    </div>
    </>
  )
}

export default App
