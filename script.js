// link for Chistmass game code

const inp_code = document.querySelector(".inp-code")
let out = document.querySelector(".out-secrets")

document.querySelector(".btn-code").onclick = function() {
    if (inp_code.value === "christmas" || inp_code.value === "Christmas") {
        let button1 = document.createElement("button")
        let link = document.createElement("a")
        link.href = "https://drive.google.com/uc?export=download&id=15h2kVTUa9f6ve5Q996YU1WK4TKM7Cr7V"
        link.textContent = "Download Christmas.exe"
        link.style.textDecoration = "none"
        link.style.color = "black"
        button1.appendChild(link)
        out.appendChild(button1)
    }
}
