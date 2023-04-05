const toDoForm = document.getElementById("toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDoList");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDose() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;  // 클릭된 버튼 요소의 부모요소(li)를 찾아 remove
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDose();
}

function paintToDo(newToDo) { // 목록 생성
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    
    button.innerText = "X";
    button.className = "delete";
    button.addEventListener("click", deleteToDo);   // 버튼 클릭시 deleteToDo를 실행
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);   // 일정 요소들을 화면에 표시
}

function handleToDoSubmit(event) {  // submit시 이벤트 
    event.preventDefault();     // submit의 디폴트 이벤트 봉쇄
    const newToDo = toDoInput.value; 
    toDoInput.value = "";
    const newToDoObject = { // 유저에게 입력받은 newToDo는 text로 한 오브젝트 생성
        text: newToDo,
        id: Date.now(), // 각 요소마다 id를 생성
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDose();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) { //만일 localstorage에 데이터가 있다면 목록들을 생성
    const parsedToDos = JSON.parse(saveToDos); // localstorage에 있는 데이터를 객체로 전환
    toDos = parsedToDos;    // toDos에 parsedToDos를 대입 
    parsedToDos.forEach(paintToDo);     // parsedToDos의 각 요소를 웹에 구현
}