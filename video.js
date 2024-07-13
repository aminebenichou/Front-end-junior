const vid = localStorage.getItem("videoId")


function createSuggestions(data) {
    const suggestion = document.getElementsByClassName("suggestion")[0]

    const video_card = document.createElement("div")
    const info = document.createElement("div")
    const thumbnail = document.createElement("img")
    const title = document.createElement("span")
    const channel = document.createElement("span")
    const views = document.createElement("span")

    video_card.classList.add("video-card")
    thumbnail.classList.add("thumbnail")
    title.classList.add("title")
    channel.classList.add("channel")
    views.classList.add("views")
    info.classList.add("info")

    thumbnail.src = data.snippet.thumbnails.default.url
    title.innerHTML = data.snippet.title
    channel.innerHTML = data.snippet.channel
    // views.innerHTML = data.snippet.thumbnails.default.url

    video_card.appendChild(thumbnail)
    video_card.appendChild(info)
    info.appendChild(title)
    info.appendChild(channel)
    info.appendChild(views)

    suggestion.appendChild(video_card)
}

async function getVideos(videoId) {
    const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&ab&part=id%2Csnippet&type=video&maxResults=50`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
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

getVideos(vid).then((data) => data.forEach(video => {
    createSuggestions(video)
}))





// display video

const video = document.getElementById("video-player")
video.src = `https://www.youtube.com/embed/${vid}`