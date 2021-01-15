const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//Add new TODO
function newTodo() {
	//Identifier TODO
	let counterIdTODO = countIdentifierTODO();

	//Create Elements
	let div = addElements("div", "", classNames.TODO_ITEM, counterIdTODO, "", list)
	let checkbox = addElements("Input", "checkbox", classNames.TODO_CHECKBOX, "", "", div)
	checkbox.addEventListener("click", function() {uncheckedCountSpan.innerHTML =  checkboxHandlers();});
	let span = addElements("span", "", classNames.TODO_TEXT, "", "TODO " + counterIdTODO, div)
	let button = addElements("button", "", classNames.TODO_DELETE, counterIdTODO, "Delete TODO", div)
	button.addEventListener("click", function() {removeElement(this.id, div)}); 

	//Show counters
	showCounters();
}

//Add Elements
function addElements(elementTag, typeElement, classNameElement, idElement, textHTML, parentElement){
	let element = document.createElement(elementTag);
	element.setAttribute("type", typeElement);
	element.classList.add(classNameElement);
	element.setAttribute("id", idElement);
	element.innerHTML = textHTML;
	parentElement.appendChild(element);
	return element;
}

//Count TODO
function countTODO() {
    let div = document.getElementsByClassName(classNames.TODO_ITEM);
    let counter = 0;
    for (let i=0, len=div.length; i<len; i++) {	counter += 1 };
    return counter;
};

//Count Identifier Elements
let countIdentifierTODO = (function () {
	let countIdTODO = 0;
  	return function () {countIdTODO += 1; return countIdTODO;}
})();

//Remove Elements
function removeElement(elementId, element) {
    document.getElementById(elementId).parentNode.removeChild(element);
    showCounters();
};

//CheckBox Handlers
function checkboxHandlers() {
    let checkbox = document.getElementsByClassName(classNames.TODO_CHECKBOX);
    let uncheckedCount = 0
    for (let i=0, len=checkbox.length; i<len; i++) {
  	    if (!checkbox[i].checked) {	uncheckedCount+=1 }
    }
    return uncheckedCount;
};

//Show Counters
function showCounters(){
	itemCountSpan.innerHTML = countTODO();
    uncheckedCountSpan.innerHTML = checkboxHandlers();
}