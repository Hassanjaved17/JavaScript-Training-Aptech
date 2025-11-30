// const abc = () =>{
//     console.log("Option Changed!");
// }

let myBtn = document.getElementById("myBtn")
let myOptions = document.getElementById("myOptions");

// myBtn.addEventListener("mouseover" , function(){
// console.log("Button Changed!")
// })


// myBtn.addEventListener("mouseout" , function(){
//     console.log("Button out!");
//     })

// myBtn.addEventListener("onmouseover", function(){
//     console.log("Button Hovered!");
// })    

myOptions.addEventListener("change", function () {
  console.log("Button Changed!");
})