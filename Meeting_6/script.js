function getRandomNumber(maxValue = 256) {
    const randomNumber = Math.floor(Math.random() * maxValue);
    return randomNumber;
  }
  const getRandomColor = () =>
    `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; 
  const clickHandler = () => {
    coolBtn.style.backgroundColor = getRandomColor();
    coolBtn.classList.add('active')}