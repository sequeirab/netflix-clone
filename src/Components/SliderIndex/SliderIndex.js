import { useEffect, useState } from "react";
import useWindowSize from "../../Hooks/useWindowSize";
import './SliderIndex.css';



const SliderIndex = () => {
    const imgWidth = 285;
    let {width} = useWindowSize();
    const [numImg, setNumImg] = useState(0)
    const [numberOfIndexes, setNumberOfIndexes] = useState(0);
    const array = []

    useEffect(() => {
        
        const updateIndexes = () => {
            if(numImg !== 0) {
                let numberOfIndexesForUpdate = Math.ceil(20 / numImg);
                setNumberOfIndexes(numberOfIndexesForUpdate);
            }
            return 0;
        }

        const getImg = () => {
            let imgs = Math.floor((width - 60) / imgWidth);
            setNumImg(imgs);
            updateIndexes();
        }

        getImg()
        
    })
    
    if(numberOfIndexes !== 0) {
        for(let i = 0; i < numberOfIndexes; i++) {
            array.push(i)
        }
    }

    return <div className="container-slider-index">
        {array.map((elem, key) => {
            return <div className="slider-index" key={key}></div>
        })}
    </div>
    
}
export default SliderIndex