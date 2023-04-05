const images = [
    "강.jpeg", 
    "그저 밤하늘.jpeg", 
    "다리.jpeg", 
    "바다 풍덩화면.jpeg", 
    "바닷가 집.jpeg", 
    "사오리.jpeg", 
    "숲속의 밤하늘.jpeg", 
    "철로.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");

bgImage.background = `img/${chosenImage}`;