const score = JSON.parse(localStorage.getItem("score"));
const highScores=JSON.parse(localStorage.getItem("highScores")) || []

const scoreEle = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");


scoreEle.innerText = score;

const number=[2, , 45,132, 2 ,5 ,79]
const re=number.sort((a,b)=>a-b)

const saveHandler=()=>{
    if( !input.value ||!score){
        alert("invalid user name or score")
    }else{
        const finalScore={ name:input.value ,  score :score}
        // console.log(finalScore)
        highScores.push(finalScore)
        highScores.sort((a,b)=>b.score-a.score)
        highScores.splice(10)
        localStorage.setItem("highScores", JSON.stringify(highScores))
        localStorage.removeItem("scores")
        window.location.assign("/")
    }
  
}


button.addEventListener("click",saveHandler)
