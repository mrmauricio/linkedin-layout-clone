function toggleSearchInput() {
    const button = document.getElementById("search-button");
    const icon = document.getElementById("search-icon");
    const input = document.getElementById("search");

    if (button.style.display === "block") {
        button.style.display = "none";
        icon.style.display = "block";
        input.placeholder = "       Search";
    } else {
        button.style.display = "block";
        icon.style.display = "none";
        input.placeholder = "";
    }
}

function showProfileGroupIcon(element) {
    const [icon] = element.querySelectorAll("span.fas");

    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
}

function toggleProfileGroupList(icon) {
    const list = icon.parentElement.nextElementSibling;
    const link = list.nextElementSibling;

    if (icon.className === "fas fa-angle-up") {
        icon.className = "fas fa-angle-down";
        list.style.display = "none";
        if (link) {
            link.style.display = "none";
        }
    } else {
        icon.className = "fas fa-angle-up";
        list.style.display = "block";
        if (link) {
            link.style.display = "block";
        }
    }
}

function showRecommendationsInfo(element) {
    const [div, span, square] = element.children;

    if (div.style.display === "block") {
        div.style.display = "none";
        span.style.display = "none";
        square.style.display = "none";
    } else {
        div.style.display = "block";
        span.style.display = "block";
        square.style.display = "block";
    }
}

function waitPageLoading() {
    setTimeout(function() {
        const loadingPage = document.getElementById("loading-page");
        const [container] = document.getElementsByClassName("container");
        const header = document.getElementById("main-header").firstElementChild;

        loadingPage.style.display = "none";
        header.style.display = "flex";
        container.style.display = "grid";

        if (navigator.appVersion.indexOf("Chrome/") != -1) {
            const profileName = document.getElementById("profile-name");
            const postAuthorName = document.getElementById("post-author-name");

            const profileSquare = document.getElementById("profile-square");

            const elements = [profileName, postAuthorName];

            console.log(elements);

            elements.map((element) => {
                element.classList.add("letter-spacing");
            });

            profileSquare.classList.add("font-16");
        }
    }, 2000);
}

window.addEventListener("scroll", (e) => {
    const profileGroup = document.getElementById("profile-groups");
    const linkedinSection = document.getElementById("linkedin-section");
    const rightAside = document.getElementById("right-aside");

    if (window.scrollY > 356) {
        profileGroup.classList.add("position-fixed");
        linkedinSection.classList.add("position-fixed", "right-aside-fixed");
        rightAside.classList.add("vanish");
    } else {
        profileGroup.classList.remove("position-fixed");
        linkedinSection.classList.remove("position-fixed", "right-aside-fixed");
        rightAside.classList.remove("vanish");
    }
});

waitPageLoading();
