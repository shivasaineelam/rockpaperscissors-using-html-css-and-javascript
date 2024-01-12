let choices=document.querySelectorAll(".choice");
let res=document.querySelector(".msg");
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
let user_score=0,comp_score=0;
let f=(user)=>{
    let values=["rock","paper","scissors"];
    let comp=Math.floor(Math.random()*3);
    if(user==values[comp]){
        res.innerText=`match is drawn both choose ${user}`;
        res.style.backgroundColor="blue";
        return;
    }else{
        let ut;
        if(user=="rock"){
            if(values[comp]=="paper"){
                ut=false;
            }else{
                ut=true;
            }
        }else{
            if(user=="scissors"){
                if(values[comp]=="rock"){
                    ut=false;
                }else{
                    ut=true;
                }
            }else{
                if(values[comp]=="rock"){
                    ut=true;
                }else {
                    ut=false;
                }
            }
        }
        if(ut==true)user_score++;
        else comp_score++;
        us.innerText=`${user_score}`;
        cs.innerText=`${comp_score}`;
        if(ut){
            res.innerText=`you win your ${user} beats computers ${values[comp]}`;
            res.style.backgroundColor="green";
        }else{
            res.innerText=`you lose computers ${values[comp]} beats your ${user}`;
            res.style.backgroundColor="red";
        }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>f(choice.getAttribute("id")));
})


