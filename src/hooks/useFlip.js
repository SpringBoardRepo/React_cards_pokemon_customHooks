
import { useState } from "react";


function useFlip(intitalState = true) {

    const [currState, setCurrState] = useState(intitalState);

    const toggleFlip = () => {
        setCurrState(toggle => !toggle)
    }

    return [currState, toggleFlip]

}

export default useFlip;