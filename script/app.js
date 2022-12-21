let foodName = document.querySelector(".input1");
let foodPrice = document.querySelector(".input2");
let foodImg = document.querySelector(".input3");
let cooker = document.querySelector(".input4");
let reustatant = document.querySelector(".input5");
let add = document.querySelector(".sumbit_btn");
let div = document.querySelector(".div");
let img = document.querySelector(".card_img");
let datBtn = document.querySelector(".date")
let elUl = document.querySelector(".ul");
let close = document.querySelector(".close_food")
let cards = []
var today = new Date();

add.addEventListener("click", (e) =>{
    e.preventDefault()

    let card =    '<div class="card"><div class="card_img"><img src="' + foodImg.value + `" alt=""></div><div class="card_text"><strong>Taom nomi:<p>` + foodName.value + '</p></strong><strong>Taom narxi:<strong>' + foodPrice.value + `</strong></strong><strong>Taom oshpazi:<p>` + cooker.value + '</p></strong><strong>Taom restorani:<p>' + reustatant.value + `</p></strong></div><div class="date_btn"><button class="date">` + today + "</button></div></div>"
    cards.push(card)
    div.innerHTML = cards;
})
close.addEventListener("click",()=>{
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "#4499FE"
        document.querySelector(".moon").style.display = "block"
        document.querySelector(".sun").style.display = "none"
        document.querySelector("h1").style.color = "black"
    }
    else{
    document.body.style.backgroundColor = "black"
    document.querySelector(".moon").style.display = "none"
    document.querySelector(".sun").style.display = "block"
    document.querySelector("h1").style.color = "white"
    }
})

