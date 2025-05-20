let boxes=document.querySelectorAll(".box");
//console.log(boxes);
let flagX=true;
const winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(flagX){
            box.innertext="X";
            flagX=false;
        }
        else{
            box.innertext="O";
            flagX=true;
        }
        checkwinner();
    });
});
const checkwinner=()=>{
    for (let pattern of winningPattern) {
       let pos1=boxes[pattern[0]].innertext;
       let pos2=boxes[pattern[1]].innertext;
       let pos3=boxes[pattern[2]].innertext;
    //    console.log(pos1);
    //    console.log(pos2);
    //    console.log(pos3);
       if(pos1 !="" && pos2!="" && pos3!=""){

        if(pos1==pos2 && pos2==pos3){
            console.log("winner !" + pos1);
            disableAllbuttons();
        }
       }
       
    }
}
const disableAllbuttons=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}