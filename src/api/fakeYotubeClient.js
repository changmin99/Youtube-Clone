import axios from 'axios';

export default class FakeYoutubeClient {

    async search({params}){
        return axios.get(
            `/videos/${params.relatedTOVideoId ? 'related' : 'search'}.json`)
 
        //params.relatedTOVideoId 
        //?axios.get(`/videos/related.json`)
        //:
        //axios.get('/videos/popual.json')

    }
    async videos() {
        return axios.get('/videos/popular.json');
    }

    async channels(){
        return axios.get('/videos/channel.json');
    }
}