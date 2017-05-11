const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=6c2ad42b5cdc802913f9afef4f8a295c&format=json';

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        id: artist.mbid,
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 200,
        comments: 140
      }
    }))
}

export { getArtists }