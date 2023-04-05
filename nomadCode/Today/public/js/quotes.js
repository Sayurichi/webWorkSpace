const quotes = [
    {
        quote: "감정은 가솔린이요, 이성은 엔진이다.",
        author: "-프로이트-",
    },
    {
        quote: "나는 오직 내가 모른다는 것을 알고 있다.",
        author: "-소크라테스-",
    },
    {
        quote: "100점 만점에 10점이라는 의미는 앞으로 90점만큼 성장할 수 있다는 의미다.",
        author: "-익명의 아버님-",
    },
    {
        quote: "일흔번씩 일곱번이라도 용서하라.",
        author: "-예수 그리스도-",
    },
    {
        quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
        author: "-빌립-",
    },
    {
        quote: "어떠한 상황에서도 윤리적 자부심을 느끼지 말 것. 다만 시험에 들지 않았음에 감사하라.",
        author: "-Kai Kim-",
    },
    {
        quote: "나는 생각한다. 고로 존재한다.",
        author: "-데카르트-",
    },
    {
        quote: "가진 것을 놓지 못해 꽉 쥐고 있는 손으로 어찌 새로운 무언가를 쥐고자 하는가.",
        author: "-머신갑-",
    },
    {
        quote: "겸손한 자가 배움을 찾고, 배움을 찾는 자가 성장한다.",
        author: "-Kai Kim-",
    },
    {
        quote: "그 사람의 신발을 신고 오랫동안 걸어보기 전까지는 그 사람을 판단하지 말라.",
        author: "-인디언 속담-",
    },
    {
        quote: "미래에 목 매지 말며 과거에 집착하지도 아니하되 다만 현재에 집중하라.",
        author: "-YoruNe-",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const ToDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ToDayQuote.quote;
author.innerText = ToDayQuote.author;