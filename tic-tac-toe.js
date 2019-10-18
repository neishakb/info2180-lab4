window.onload = () => {

     let dBoard = document.getElementById("board").children;
     let response = "X";
     let divstatus = document.getElementById("status");

     
    
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
                    if(possibleCombos("X")){
                        divstatus.innerHTML = "Congratulations! X is the Winner!";
                        divstatus.classList.add("you-won");
                    }
                }else{
                    dBoard[n].innerHTML = "O"
                    dBoard[n].classList.add("O");
                    response = "X";
                    if(possibleCombos("O")){
                        divstatus.innerHTML = "Congratulations! O is the Winner!";
                        divstatus.classList.add("you-won");
                    }
                }
           
            }
            
        });


    }

    const possibleCombos = (letter) => {
        //checking columns for winning combos
       for(let n = 0; n < 3; n++){
           if((dBoard[n].innerHTML === letter) && (dBoard[n + 3].innerHTML === letter) && (dBoard[n + 6].innerHTML === letter)){
               //do something
               return true;
           }
       } 

       //checking rows for winning combos
       for(let j = 0; j < 7; j+= 3){
            if((dBoard[j].innerHTML === letter) && (dBoard[j + 1].innerHTML === letter) && (dBoard[j + 2].innerHTML === letter)){
                //do something
                return true;
            }
    
        }

        if(((dBoard[0].innerHTML === letter) && (dBoard[4].innerHTML === letter) && (dBoard[8].innerHTML === letter)) || ((dBoard[2].innerHTML === letter) && (dBoard[4].innerHTML === letter) && (dBoard[6].innerHTML === letter))){
            return true;

        }
        return false;
    }

};
   


