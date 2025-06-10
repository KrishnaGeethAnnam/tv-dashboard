
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        const birthdaysDiv = document.getElementById("birthdays-list");
        birthdaysDiv.innerHTML = data.birthdays.map(b => `<div class="card">${b}</div>`).join("") +
                                 data.anniversaries.map(a => `<div class="card">${a}</div>`).join("");

        const achievementsDiv = document.getElementById("achievements-list");
        achievementsDiv.innerHTML = data.achievements.map(item => `<div class="card">${item}</div>`).join("");

        const productsDiv = document.getElementById("products-list");
        productsDiv.innerHTML = data.products.map(p => `<div class="card">${p}</div>`).join("");

        const video = document.getElementById("video-section");
        video.src = data.videoUrl;
    });
