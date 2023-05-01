import { useState, useEffect } from "react";
import MusicApiCalls from "../utils/musicApiCalls";
// import sampleSongImg from "../assets/sampleSongImg.jpg";
import SongCatalogBox from "../components/SongCatalogBox";
import SongCatalogInterface from "../interface/songCatalogInterface";

const Home = ():JSX.Element => {

    const [musicList, setMusicList] = useState([]);

    useEffect(()=>{
        const allMusics = localStorage.getItem("allMusics");
        if(allMusics && allMusics!=="undefined"){
            setMusicList(JSON.parse(allMusics));
            console.log(JSON.parse(allMusics));
        }else{
            const getMusicList = async ()=>{
                let getMusicList = new MusicApiCalls(
                    {
                        key: '484129036',
                        locale: 'en-US'
                    }
                );
                let musicListResponse = await getMusicList.getRequest(`/songs/list-recommendations`);
                setMusicList(musicListResponse?.tracks);
                localStorage.setItem("allMusics", JSON.stringify(musicListResponse?.tracks));
                console.log(musicListResponse?.tracks);
            }
            getMusicList();
        }
    }, []);

    return (
        <div>
            <div className="">
                <div className="fs-4 ms-3 semi-bold">Recommended Songs</div>
                <div style={{"flexWrap": "wrap"}} className="m-5 d-flex">
                    {
                        (musicList.length!==0) && 
                        musicList.map((eachSong:any)=> {
                            let songDetails:SongCatalogInterface = {
                                key: eachSong?.key,
                                songTitle: eachSong?.title,
                                sontImg: eachSong?.images?.coverarthq,
                                songDesc: eachSong?.share?.text,
                                favourite: eachSong?.favourite,
                                songUrl: eachSong?.url
                            };
                            return (
                                <SongCatalogBox songDetails={songDetails} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;