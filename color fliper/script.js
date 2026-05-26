const body = document.getElementsByTagName("body")[0];

const setcolor = (name) => {
  body.style.backgroundColor = name;
};

const randomcolor = () => {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;

  body.style.backgroundColor = color;
};


document.getElementById("green").addEventListener("click",()=>{
  setcolor("green");
})
document.getElementById("red").addEventListener("click",()=>{
  setcolor("red");
})
document.getElementById("blue").addEventListener("click",()=>{
  setcolor("blue");
})
document.getElementById("random").addEventListener("click",()=>{
  randomcolor();
})