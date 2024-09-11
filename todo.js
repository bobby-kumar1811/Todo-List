let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click",function(){

    let item  = document.createElement("li");
    item.innerText = inp.value +" ";
    ul.appendChild(item);

    let bu = document.createElement("button");
    bu.innerText = "delete";
    bu.classList.add("delete");
    item.appendChild(bu);

    console.log(inp.value);
    inp.value = "";

})

ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.log("button clicked!");
    if(event.target.nodeName == "BUTTON"){
        let pli = event.target.parentElement;
        pli.remove();
    }
})









// let del = document.querySelectorAll(".delete");

// for(de of del){
//     de.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

