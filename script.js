const btn = document.getElementById("button");
// btn.addEventListener
// function ..........arrow fuction
const randomColor = () => {
    let val = "0123456789ABCDEF"; // string
    let cons = "#";
    // for loop
    for(let i = 0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
// console.log(randomColor());
// normal function

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);


