export function aboutLoad () {
    const content = document.querySelector("div#content");
    const body = document.querySelector("body");
    const about = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = "About Us";
    p.innerText = "We are the best restaurant in the entire world. Don't believe us? Come check us out and be proven wrong."

    content.appendChild(about);
    about.appendChild(h1);
    about.appendChild(p);
}