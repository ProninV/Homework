const lighter = document.querySelectorAll('.lighter__light')
console.log(lighter)
let activeLightIndex = 0
const showLight = ()=> {
lighter[activeLightIndex].classList.add('active');
}
const hideLight = ()=> {
lighter[activeLightIndex].classList.remove('active');
}
const decreaseIndex = () => {
  if(activeLightIndex-1<0){
    activeLightIndex =lighter.length-1;
  } else{
    activeLightIndex -=1;
  }
  console.log(activeLightIndex)
}
const increaseIndex = () => {
  if(activeLightIndex + 1 < lighter.length){
    activeLightIndex +=1;
  } else{
    activeLightIndex = 0;
  }
  console.log(activeLightIndex)
}
const showPrev = () => {
  hideLight();
  decreaseIndex();
  showLight()
}
const showNext = () => {
  hideLight();
  increaseIndex();
  showLight()
}
showLight();
setInterval(showNext, 500)
