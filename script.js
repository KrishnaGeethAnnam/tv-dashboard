
const sections = [
    { title: "🎉 Birthdays & Anniversaries", key: "birthdays", render: renderList },
    { title: "🏆 Company Achievements", key: "achievements", render: renderList },
    { title: "🛠️ Company Products", key: "products", render: renderList },
    { title: "🎥 Recent Activity", key: "videoUrl", render: renderVideo }
];

let currentIndex = 0;
let data = {};

function renderList(items) {
    const area = document.getElementById("content-area");
    area.innerHTML = items.map(item => `<div class='card'>${item}</div>`).join("");
    document.getElementById("video-section").style.display = "none";
}

function renderVideo(url) {
    const video = document.getElementById("video-section");
    video.src = url;
    video.style.display = "block";
    document.getElementById("content-area").innerHTML = "";
}

function showSection() {
    const section = sections[currentIndex];
    document.getElementById("section-title").innerText = section.title;
    section.render(data[section.key]);
    currentIndex = (currentIndex + 1) % sections.length;
}

fetch("data.json")
    .then(res => res.json())
    .then(json => {
        data = json;
        showSection();
        setInterval(showSection, 10000);
    });
