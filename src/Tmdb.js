const key = '27a94c00c2fa7b99a906eca13c3d7a36';
const url = 'https://api.themoviedb.org/3/';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${url}${endpoint}`);
    const json = req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals',
                items: await basicFetch(`discover/tv?with_networks=213&api_key=${key}`)
            },
            {
                slug: 'trending',
                title: 'For you',
                items: await basicFetch(`trending/all/week?api_key=${key}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`movie/top_rated?api_key=${key}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`discover/movie?with_genres=28&api_key=${key}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`discover/movie?with_genres=35&api_key=${key}`)
            },
            {
                slug: 'rorror',
                title: 'Horror',
                items: await basicFetch(`discover/movie?with_genres=27&api_key=${key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`discover/movie?with_genres=10749&api_key=${key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`discover/movie?with_genres=99&api_key=${key}`)
            },
            
        ]
    }
} 