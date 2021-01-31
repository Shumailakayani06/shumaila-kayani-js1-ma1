
let cats = [
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



// Question 1
let cat = {
    complain : function meow(){
        return console.log("Meow!");
    }
}
console.log(cat.complain)


//Question 2 and 3

let heading = document.querySelector("h3") ;
    heading.innerHTML = "Updated heading";
    heading.style.fontSize = "2em";



 //Question 4
heading.classList.add("subheading");

//Question 5
let peragraphs = document.querySelectorAll("p");

for (let i = 0 ; i< peragraphs.length; i++) {
    console.log(peragraphs[i].style.color = "red");
}

//Question 6

let resultsContainer = document.querySelector(".results"); 

   resultsContainer.innerHTML = `<p>New paragraph</p>`; 
   resultsContainer.style.background = "yellow"
   
   

console.log(resultsContainer);

//Question 7
function myFunction(list) {
    for (let i = 0; i< list.length; i++){
       console.log(list[i].name)
    }
}

myFunction(cats)

//Question 8
let catContainer = document.querySelector(".cat-container");

function creatCats(cats) {

    let diiv = document.createElement('div')
   
    for (let i = 0; i < cats.length; i++) {
        let newh5 = document.createElement('h5');
        let pgraph = document.createElement('p');
        newh5.innerHTML= cats[i].name

    
        if (cats[i].age) {
            pgraph.innerHTML=cats[i].age
        }else {
            pgraph.innerHTML="Age unknown";
        }

            diiv.appendChild(newh5)
            diiv.appendChild(pgraph)
        }
      
        return diiv
       
    }

let tags=creatCats(cats)
catContainer.innerHTML = tags.innerHTML
