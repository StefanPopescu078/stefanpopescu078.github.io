window.onload = function(){
    let baraRating = document.getElementById("rating"); 
    baraRating.addEventListener("input", changeRange);
    baraRating.value = Math.floor(Math.random() * 4.99) + 1;
    baraRating.dispatchEvent(new Event("input"));




    document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
      
        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let comment = document.getElementById("comment").value;
        let rating = document.getElementById("rating").value;
      
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("comment", comment);
        localStorage.setItem("rating", rating);
        
        let data = new Date();

        alert("Va multumim pentru comentariul de la " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " !");
      });

}

function changeRange(e){
    let nrStele = e.target.value;
    let strStele = "★".repeat(Number(nrStele)) + "☆".repeat(5 - Number(nrStele));
    document.getElementById("ratingLabel").style.color = "#" + Math.floor(Math.random()* (Math.floor(Math.pow(2, 24)) - 1)).toString(16);
    document.getElementById("ratingLabel").innerText = strStele;
}