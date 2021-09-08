//keeping the images in an array//
const images = [{
    id : 1,
    category : "lions",
    img : "../pictures/Lion-1.jpg"
},{
    id : 2,
    category : "lions",
    img : "../pictures/Lion-2.jpg"
},{
    id : 3,
    category : "lions",
    img : "../pictures/Lion-3.jpg"
},{
    id : 4,
    category : "lions",
    img : "../pictures/Lion-4.jpg"
}, {
    id : 5,
    category : "monkeys",
    img : "../pictures/Monkey-1.jpg"
}, {
    id : 6,
    category : "monkeys",
    img : "../pictures/Monkey-2.jpg"
},{
    id : 7,
    category : "monkeys",
    img : "../pictures/Monkey-3.jpg"
}, {
    id : 8,
    category : "monkeys",
    img : "../pictures/Monkey-4.jpg"
},{
    id : 9,
    category : "elephants",
    img : "../pictures/Elephant-1.jpg"
}, {
    id : 10,
    category : "elephants",
    img : "../pictures/Elephant-2.jpg"
}, {
    id : 11,
    category : "elephants",
    img : "../pictures/Elephant-3.jpg"
}, {
    id : 12,
    category : "elephants",
    img : "../pictures/Elephant-4.jpg"
}, {
    id : 13,
    category : "giraffes",
    img : "../pictures/Giraffe-1.jpg"
},{
    id : 14,
    category : "giraffes",
    img : "../pictures/Giraffe-2.jpg"
},{
    id : 15,
    category : "giraffes",
    img : "../pictures/Giraffe-3.jpg"
}, {
    id : 16,
    category : "giraffes",
    img : "../pictures/Giraffe-4.jpg"
}]
const animals = document.querySelector("#animal-container");
const btnEl = document.querySelectorAll(".btn");
const loader = document.querySelector(".preloader");
//targeting our preloader//
window.addEventListener("load",()=> {
    loader.classList.add("hide")
})
//targeting the window of the webpage//
window.addEventListener("DOMContentLoaded",() => {
    displayImages(images)
})
//targeting the buttons//
btnEl.forEach((btn) => {
    btn.addEventListener("click",(e)=> {
        const category = e.currentTarget.dataset.id;
        const categoryMenu = images.filter((items) => {
            if(items.category === category){
                return items;
            }
        });
        if(category === "all") {
            displayImages(images)
        } else {
            displayImages(categoryMenu);
        }
    })
});
//joining the animal container together with our array//
function displayImages(imageItems) {
    let displayMenu = imageItems.map((item) => {
        return `<div class="item"><img src=${item.img}></div>
        </div>`
    });
    displayMenu = displayMenu.join("");
    animals.innerHTML = displayMenu;
};