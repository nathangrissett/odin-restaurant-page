export function menuLoad () {
    const content = document.querySelector("div#content");    
    const body = document.querySelector("body");
    const menu = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const h1B = document.createElement('h1');
    const pB = document.createElement('p');
    const h1C = document.createElement('h1');
    const pC = document.createElement('p');

    h1.innerText = "Fruits";
    p.innerText = "Watermelon, Pineapple, Kiwi, Cantaloupe"
    h1B.innerText = "Vegetables";
    pB.innerText = "Lettuce, Spinach, Broccoli, Asparagus";
    h1C.innerText = "Meats";
    pC.innerText = "Chicken, Fish, Beef, Pork";

    content.appendChild(menu);
    menu.appendChild(h1);
    menu.appendChild(p);
    menu.appendChild(h1B);
    menu.appendChild(pB);
    menu.appendChild(h1C);
    menu.appendChild(pC);
}