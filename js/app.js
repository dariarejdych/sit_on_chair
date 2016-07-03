document.addEventListener("DOMContentLoaded", function() {
    var mainElements = document.querySelector("nav > ul").children;
    for (var i = 0; i < mainElements.length; i++) {
        mainElements[i].addEventListener("mouseover", function() {
            console.log("najechane");
            var innerUl = this.querySelector("ul");
            console.log("innerUl" + innerUl);
            if (innerUl !== null) {
                console.log("if");
                innerUl.style.display = "block";
            }
        })
        mainElements[i].addEventListener("mouseout", function() {
            console.log("zjechane");
            var innerUl = this.querySelector("ul");
            if (innerUl !== null) {
                innerUl.style.display = "none";
            }
        });
    }

    var prevBtn = document.querySelector(".prev");
    var imgChair = document.querySelector(".content_foto img");
    prevBtn.addEventListener("click", function(){
      console.log("klik");
      imgChair.src="images/red_chair.png";
    });
});
