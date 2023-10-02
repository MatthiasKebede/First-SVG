let inside = document.getElementById("Underside");
let spout = document.getElementById("Spout");

inside.addEventListener("click", () => {
    if (spout.style.display == "none")
        spout.style.display = "block";
    else
        spout.style.display = "none"
})