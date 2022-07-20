import { useState, useEffect } from "react";

const getWindowsSize = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowsSize())

    useEffect(() => {
        const handleSize = () => {
            setWindowSize(getWindowsSize());
        }

        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, []);

    return windowSize;

    
}

export default useWindowSize;
