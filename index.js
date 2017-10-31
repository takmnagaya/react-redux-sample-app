import { createStore } from 'redux';
import { addTodo, toggleTodo, setVIsibilityFilter } from './actions/index.js';

let store = createStore(() => { return 'Hello' });

var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    // ボタンをクリックしたら「TODOを追加する」というアクションをStoreに渡す
    var todoText = input.value;
    store.dispatch(addTodo(todoText));
});

// TODOの完了
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v, index) => {
    v.addEventListener('click', e => {
        store.dispatch(toggleTodo(index));
});
});

var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
   v.addEventListener('click', e => {
       var filterText = v.innerHTML;
       store.dispatch(setVIsibilityFilter(filterText));
});
});
