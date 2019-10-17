window.onload = () => {

     let dBoard = document.getElementById("board").children;
     let response = "X";

     
    
    for(let n = 0; n < dBoard.length; n++){
        dBoard[n].classList.add("square");
        dBoard[n].addEventListener("mouseover", () => {
            dBoard[n].classList.add("hover");
        });
        dBoard[n].addEventListener("mouseout", () => {
            dBoard[n].classList.remove("hover");
        });
        dBoard[n].addEventListener("click",() => {
            if(dBoard[n].innerHTML === "X" || dBoard[n].innerHTML === "O"){
                return;
            }else{
                if(response === "X"){
                    dBoard[n].innerHTML = "X";
                    dBoard[n].classList.add("X");
                    response = "O";
                }else{
                    dBoard[n].innerHTML = "O"
                    dBoard[n].classList.add("O");
                    response = "X";
                }
           
            }
            
        });


    }
   

};

