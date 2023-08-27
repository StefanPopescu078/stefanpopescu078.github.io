window.onload = function(){

    let x = localStorage.getItem("firstName");
    if(x){ // avem ceva in local storage
        let nod = document.createElement("div");
        let rtt = document.createElement("p");
        let rpn = document.createElement("p");
        let rtd = document.createElement("p");

        nod.classList.add("testimonial");
        rtt.classList.add("rating");
        rtd.classList.add("rating-description");
        rpn.classList.add("person-name");


        rtt.innerText = getStars(Math.floor(Number(localStorage.getItem("rating"))));
        rtd.innerText = localStorage.getItem("comment");
        rpn.innerText = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
        

        nod.appendChild(rtt);
        nod.appendChild(rtd);
        nod.appendChild(rpn);
        nod.style.alignSelf = "center";
        document.getElementById("section-5").appendChild(nod);
        
    }
    else{
        // nu faci nimic
    }
    setInterval(rainbowStars, 700);
    setInterval(rainbowStars, 300);
}

function rainbowStars(){
    let newColor = "#" + Math.floor(Math.random()* (Math.floor(Math.pow(2, 24)) - 1)).toString(16);
    
    for(nod of document.getElementsByClassName("rating")){
        nod.style.color = newColor;
    }
}

function getStars(n){
    return "★".repeat(n) + "☆".repeat(5 - n);
}