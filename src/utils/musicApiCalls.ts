import properties from "../config/properties";
import axios from "axios";

class MusicApiCalls {
    private baseUrl:string;
    private params;

    constructor (
        params:{}, 
        baseUrl:string=properties.MUSIC_API_URL, 
    ){
        this.baseUrl = baseUrl;
        this.params = params;
    }

    public async getRequest(endpoint:string){
        const options = {
            method: 'GET',
            url: this.baseUrl+endpoint,
            params: this.params,
            headers: {
              'X-RapidAPI-Key': '37463f011emsh060bce75b0065bfp1f5f1bjsnb5adb2dbb9f9',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              return response.data;
          } catch (error) {
              console.error(error);
          }
    }

}


export default MusicApiCalls;