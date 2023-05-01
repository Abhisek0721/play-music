import SongCatalogInterface from "../interface/songCatalogInterface";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SongCatalogBoxProps {
    songDetails: SongCatalogInterface;
}

const SongCatalogBox = ({ songDetails }:SongCatalogBoxProps):JSX.Element => {

    const [allMusics, setAllMusic] = useState([]);

    const addToFavourite = (songKey:string):void => {
        let allMusicList = localStorage.getItem("allMusics");
        if(allMusicList){
            let allMusicArr = JSON.parse(allMusicList);
            let heartIcon = document.getElementById(songKey);
            for(let index=0; index<allMusicArr.length; index++){
                if(allMusicArr[index].key === songKey){
                    if(allMusicArr[index].favourite){
                        allMusicArr[index].favourite = false;
                        heartIcon?.classList.remove("text-danger");
                    }else{
                        allMusicArr[index].favourite = true;
                        heartIcon?.classList.add("text-danger");
                    }
                    localStorage.setItem("allMusics", JSON.stringify(allMusicArr));
                    break;
                }
            }
            setAllMusic(allMusicArr);
        }
    }

    return (
        <div className="song-catalog neon-glow m-4" key={songDetails.key}>
            <div className="heart-icon-box">
                <FaHeart 
                    id={songDetails.key}
                    onClick={()=>addToFavourite(songDetails.key)}
                    className={`heart-icon 
                    ${
                        (songDetails.favourite)?'text-danger':''}
                    `} 
                />
            </div>
            <div className="w-100 h-auto d-flex justify-content-center">
                <img src={songDetails.sontImg} className="song-img" alt={songDetails.sontImg} />
            </div>
            <div className="my-3">
                <Link to={songDetails.songUrl} target="_blank">
                    <h5 className="text-primary">
                        {songDetails.songTitle}
                    </h5>
                </Link>
                <p className="text-truncate" title={songDetails.songDesc}>
                    {songDetails.songDesc}
                </p>
            </div>
        </div>
    );
}

export default SongCatalogBox;