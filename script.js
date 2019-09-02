function toggleSearchInput() {
    const button = document.getElementById("search-button");
    const icon = document.getElementById("search-icon");
    const input = document.getElementById("search");

    if (button.style.display === "block") {
        button.style.display = "none";
        icon.style.display = "block";
        input.placeholder = "     Search";
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
