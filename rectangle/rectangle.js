document.querySelector("div")
    .addEventListener("click", function () {
        document.querySelector("div")
            .classList.add("dissapear")
    })
    document.querySelector("div")
    .addEventListener("animationend", function () {
        document.querySelector("div")
            .classList.remove("dissapear")
    })