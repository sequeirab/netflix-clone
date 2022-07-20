import React, {useEffect, useState} from "react";
import './List.css';
import useWindowSize from "../../Hooks/useWindowSize";

const List = ({items}) => {
    const imgWidth = 285;
    let {width} = useWindowSize();
    const [numImg, setNumImg] = useState(0)

    useEffect(() => {
        const getImg = () => {
            let imgs = Math.floor((width - 60) / imgWidth);
            setNumImg(imgs);
        }

        getImg()
    })

    
    
    return (
        <div className="container">
            <div className="handle handle-left">
                <div className="caret caret-right">&lsaquo;</div>
            </div>
            <div id="slider">
                    {
                        
                        items.map((elem, key) => {
                            return (
                                <img alt={elem.original_name} key={key} className="images" src={`https://image.tmdb.org/t/p/w300${elem.poster_path}`}/>
                            )
                        })
                    }    
                
            </div>   
            <div className="handle handle-right">
                <div className=" caret caret-right">&rsaquo;</div>
            </div>
        </div>
    )}

export default List