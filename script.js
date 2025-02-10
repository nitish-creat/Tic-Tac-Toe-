let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset");
let newgamebtn=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true
    enablebox();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`BADHAII HO PLAYER (${winner}) JEET GYA`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let po1=boxes[pattern[0]].innerText;
        let po2=boxes[pattern[1]].innerText;
        let po3=boxes[pattern[2]].innerText;

        if(po1!="" && po2!="" && po3!=""){
            if(po1===po2 && po2===po3){
                showwinner(po1);
            }
        }
            
        }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);