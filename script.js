let currentPage = 0;

const pages =  document.querySelectorAll(".page");

function showPage(index) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");
}


function nextPage() {

    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}


function prevPage() {

    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function cutCake() {

    const cakeMessage =
        document.getElementById("cakeMessage");

    cakeMessage.innerHTML =
        "🎉 YAY! Semoga hari-harimu selalu semanis kue ini! 💕";

    document.querySelector(".cake").style.transform =
        "scale(1.15) rotate(3deg)";

    setTimeout(() => {

        document.querySelector(".cake").style.transform =
            "scale(1)";

    }, 400);
}