

async function getVideos() {
    const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=rZNfLzCFf4A&ab&part=id%2Csnippet&type=video&maxResults=50';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.items);
        return result.items
    } catch (error) {
        console.error(error);
    }
}


function createVideoCard(data) {
    const videoCard = document.createElement("div")
    const img = document.createElement("img")
    const title = document.createElement("h1")
    const channel = document.createElement("span")
    const views = document.createElement("span")
    const link = document.createElement("a")
    videoCard.classList.add("video-card")
    title.classList.add("title")
    img.classList.add("thumbnail")
    channel.classList.add("channel-name")
    channel.classList.add("muted-text")
    views.classList.add("muted-text")
    const content = document.getElementsByClassName("content")[0]
    content.appendChild(link)
    link.appendChild(videoCard)
    videoCard.appendChild(img)
    videoCard.appendChild(title)
    videoCard.appendChild(channel)
    videoCard.appendChild(views)

    // populating data
    title.innerHTML = data.snippet.title
    channel.innerHTML = data.snippet.channelTitle
    // views.innerHTML = data.views
    img.src = data.snippet.thumbnails.default.url
}


getVideos().then(data => {
   
    data.forEach(video => {
        createVideoCard(video)
    });
})