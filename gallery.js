var imgID = "coaste";
var img = document.getElementById(imgID);
var image = new Image();


function clearImg(e){
    imgID = "";
    image.src = "";
    img = document;

    let cnvs = document.getElementById("cnvs");
    let ctx = cnvs.getContext("2d");
    
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    document.getElementById("cnvs")
    e.stopPropagation();
}

function changeImg(e){
    imgID = e.target.id;
    image.src = e.target.src;
    img = document.getElementById(imgID);
    e.stopPropagation();
}

function imageZoom(resultID) {

    document.getElementById("gallerySection").addEventListener("click", changeImg);
    document.getElementsByTagName("main")[0].addEventListener("click", clearImg);

    let result, cx, cy;
    result = document.getElementById(resultID);

    let ctx2 = result.getContext("2d");

    image.onload = function() {
        
        cx = result.width / image.width;
        cy = result.height / image.height;

        document.getElementById("body-double").addEventListener("mousemove", moveLens);

        function moveLens(e) {
            if(imgID == "")
                return;
                
            let pos, x, y;

            e.preventDefault();

            pos = getCursorPos(e);

            x = pos.x * cx;
            y = pos.y * cy;

            ctx2.clearRect(0, 0, result.width, result.height);
            ctx2.drawImage(image, pos.x - image.width / 2, pos.y - image.height / 2, result.width / cx, result.height / cy, 0, 0, result.width, result.height);
        }
        function getCursorPos(e) {
            let a, x = 0, y = 0;
            e = e || window.event;

            a = img.getBoundingClientRect();

            x = e.pageX - a.left;
            y = e.pageY - a.top;

            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    }
}
