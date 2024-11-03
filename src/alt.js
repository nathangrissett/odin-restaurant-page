import image from "../restaurant.webp";

export function pageLoad () {
    const content = document.querySelector("div#content");
    const home = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    function addImage(alt) {
        const img = document.createElement('img');
        img.src = image;
        img.alt = alt;
        
        content.appendChild(img);
    }

    h1.innerText = "EXAMPLE RESTAURANT";
    p.innerText = "This restaurant is awesome. Insert details here about how awesome this restaurant is. Come eat here to see how awesome it is."

    content.appendChild(home);
    home.appendChild(h1);
    home.appendChild(p);
    addImage('Interior of restaurant');
}