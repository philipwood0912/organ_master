(() => {
    console.log("linked");

    var buttons = document.querySelectorAll(".promobutton"),
        heart = document.getElementById('heart'),
        subTitle = document.querySelector(".sub-tit"),
        subject = document.querySelectorAll(".subject"),
        infoP = document.querySelectorAll('.infoP');

    infoP[0].style.opacity = 1;
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            console.log(this.dataset.buttonref);
        });
    });

    window.addEventListener("load", function(e) {
        let blood = heart.contentDocument.querySelectorAll('.blood'),
            heartSVG = heart.contentDocument.querySelectorAll('.heart');
            jar = heart.contentDocument.querySelectorAll('.jar'),
            check = heart.contentDocument.querySelector("#checkmark"),
            leftV = heart.contentDocument.querySelector('.v-left'),
            rightV = heart.contentDocument.querySelector('.v-right');

        buttons.forEach(button => {
            button.addEventListener("mouseover", function(e) {
                e.target.style.background = "#5896D1";
            });
            button.addEventListener("mouseleave", function(e) {
                if(e.target.id === "hover-stop") {
                    e.target.style.background = "#5896D1";
                } else {
                    e.target.style.background = "#913D3D";
                }
            });
            button.addEventListener('click', function(e) {
                subTitle.textContent = e.target.dataset.buttonref;
                if(e.target.dataset.buttonref === "Organ") {
                    blood.forEach(drop => {drop.classList.remove("hidden")});
                    debugger;
                } else {
                    blood.forEach(drop => {drop.classList.add("hidden")});
                }
                if (e.target.dataset.buttonref === "Container" || e.target.dataset.buttonref === "Decellularization"){
                    jar.forEach(piece => {piece.classList.remove("hidden");});
                } else {
                    jar.forEach(piece => {piece.classList.add('hidden');});
                }
                if (e.target.dataset.buttonref === "Decellularization" || e.target.dataset.buttonref === "Scaffold") {
                    heartSVG.forEach(piece => {
                        piece.style.stroke = "#9A7F00";
                        piece.style.fill = "#fff8c3";
                    });
                    rightV.style.fill = "#9A7F00";
                    leftV.style.fill = "#9A7F00";
                } else {
                    heartSVG.forEach(piece => {
                        piece.style.stroke = "#791e00";
                        piece.style.fill = "#d91e00";
                    });
                    rightV.style.fill = "#791e00";
                    leftV.style.fill = "#791e00";
                }
                if (e.target.dataset.buttonref === "done") {
                    check.style.transition = "2s ease";
                    check.style.opacity = 1;
                } else {
                    check.style.transition = "";
                    check.style.opacity = 0;
                }
                for (i=0; i < infoP.length; i++){
                    buttons[i].id = "";
                    buttons[i].style.background = "#913D3D";
                    infoP[i].style.opacity = .3;
                    if (e.target.dataset.buttonref === infoP[i].dataset.inforef){
                        infoP[i].style.opacity = 1;
                    }
                    e.target.id = "hover-stop";
                }
                e.target.style.background = "#5896D1";
                debugger;
            });
        });
        jar.forEach(piece => {
            piece.classList.add("hidden");
        });
        buttons[0].style.background = "#5896D1";
        buttons[0].id = "hover-stop";
        subTitle.textContent = subject[0].textContent;
        //debugger;
    });


        

})();