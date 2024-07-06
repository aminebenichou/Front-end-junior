const videos = [
    {
        title: "Learning Python for Beginners",
        channel: "Code Academy",
        views: 1500000,
        image: "./images.png"
    },
    {
        title: "Advanced Python Techniques",
        channel: "Tech with Tim",
        views: 850000,
        image: "./images.png"
    },
    {
        title: "Python for Data Science",
        channel: "Data School",
        views: 1250000,
        image: "./images.png"
    },
    {
        title: "Machine Learning Basics",
        channel: "ML Experts",
        views: 950000,
        image: "./images.png"
    },
    {
        title: "Web Development with Django",
        channel: "Coding Dojo",
        views: 700000,
        image: "./images.png"
    }
];

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
    title.innerHTML = data.title
    channel.innerHTML = data.channel
    views.innerHTML = data.views
    img.src = data.image
}

videos.forEach(video => {
    createVideoCard(video)
});