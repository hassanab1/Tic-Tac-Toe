let box = document.querySelectorAll(".box");
let restBtn=document.querySelector(".restBtn")

const win_stat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
    
let turn="X";

let restFtn=()=>
    {
    for(let j=0;j<box.length;j++)
        {
        box[j].textContent="";
        box[j].disabled=false;
        turn="X";
        }
    };

let wincheck=()=>
    {
    for(let pattern of win_stat)
        {
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
            {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
                {
                alert(`${pos1Val} Win`);
                restFtn();
                }
            }
        }
    };

box.forEach((boxes)=>
    {
    boxes.addEventListener("click",()=>
        {
        if(turn=="X")
            {
            boxes.textContent=turn;
            turn="Z";
            }
            else
            {
            boxes.textContent=turn;
            turn="X";
            }
        boxes.disabled= true;
        restBtn.addEventListener("click",restFtn);
        wincheck();
        }
                        )
    }
        )
