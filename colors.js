const getColor=()=>{
    const randomNumber= Math.floor(Math.random()*16777215);
    const randomColor= "#" +randomNumber.toString(16)
    console.log(randomNumber,randomColor);
    document.body.style.backgroundColor=randomColor;
}
document.getElementById("btn").addEventListener(

    "click",
    getColor
)