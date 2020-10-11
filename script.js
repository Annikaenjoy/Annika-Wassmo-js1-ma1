// Question 1
const cat = {
    complain: function () {
        console.dir("Meow!");
    }
};
cat.complain();

// Question 2
const heading = document.querySelector("h3");
console.dir(heading);
heading.innerHTML = "Updated heading";


// Question 3
heading.style.fontSize = "2em";

// Question 4 
heading.className = "subheading";
console.dir(heading.className);

// Question 5
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i]);
    paragraphs[i].style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");
console.dir(resultsContainer);
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function catsArray(list) {
    for (let i = 0; i < list.length; i++) {
        console.dir(list[i].name);
    }
}
catsArray(cats);

// Question 8
function createCats(cats) {
    let catText = "";
    for (let i = 0; i < cats.length; i++) {
        let catAge = "Age Unknown";
        if (cats[i].age) {
            catAge = cats[i].age;
        }
        catText += `<div>
            <h5>${cats[i].name}</h5>
            <p>${catAge}</p>
            </div>`;
    }
    return catText;
}
const catHTML = createCats(cats);
const container = document.querySelector('.cat-container');
container.innerHTML = catHTML;
