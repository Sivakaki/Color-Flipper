const body = document.getElementsByTagName("body")[0];

const setcolor = (name) => {
  body.style.backgroundColor = name;
};

const randomcolor = () => {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const a = Math.random();
  const color = `rgba(${red},${green},${blue},${a})`;

  body.style.backgroundColor = color;
};
