document.addEventListener("DOMContentLoaded", function() {
    var mainElements = document.querySelector("nav > ul").children;
    for (var i = 0; i < mainElements.length; i++) {
        mainElements[i].addEventListener("mouseover", function() {

            var innerUl = this.querySelector("ul");

            if (innerUl !== null) {
                innerUl.style.display = "block";
            }
        });
        mainElements[i].addEventListener("mouseout", function() {
            var innerUl = this.querySelector("ul");
            if (innerUl !== null) {
                innerUl.style.display = "none";
            }
        });
    }

    var prevBtn = document.querySelector(".prev");
    var imgChair = document.querySelector(".content_foto img");

    var tab = ["images/black_chair.png", "images/orange.png"];
    var counter = 0;
    var setImage = function() {
        imgChair.src = tab[counter];
    };

    setImage();

    prevBtn.addEventListener("click", function() {

        if (counter <= 0) {
            counter = tab.length - 1;
        } else {
            counter--;
        }

        setImage()

    });

    var nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function() {

        if (counter >= tab.length - 1) {
            counter = 0;
        } else {
            counter++;
        }

        setImage();

    });

});
