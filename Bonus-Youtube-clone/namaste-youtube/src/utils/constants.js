export const sidebarData = [
    {
        title: "Home",
        subTitles: ["Home", "Shorts", "Subscriptions"]
    },
    {
        title: "You",
        subTitles: ["Your Channel", "History", "Your Videos"]
    },
    {
        title: "Explore",
        subTitles: ["Trending", "Shopping", "Music", "Movies", "Live", "Gaming", "News", "Sports", "Courses", "Fashion & Beauty", "Podcast"]
    },

]

export const buttonList = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Javascript", "Computers", "Guitar", "Body Building", "Data Structures", "Lessons", "Coding", "React", "Redux", "Front-end", "Typescript", "NodeJS", "Code", "C++", "Java", "Rust"]

export const YOUTUBE_MOST_POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&part=topicDetails&chart=mostPopular&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`