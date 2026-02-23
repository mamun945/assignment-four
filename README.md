### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
 *getElementById
 you can select specific element by getElementById.
 getElementById is unique .
 getElementById work is very fast.
 getElementById don't take css selector.


 *getElementsByClassName
you can select multiple element by getElementsByClassName.
getElemnetsByClassName return HTML collection.



*querySelector
querySelector you can use id,className,tagName for get element.
you can use css selector.
querySelector get first matching element.


*querySelector All
you can use id,className,tagName
you use css selector 
return all matching elements.
return node list
you can use array function forEach


### 2. How do you create and insert a new element into the DOM?

Ans:
first i have to take html element 
let container = document.getElementById('element');

after that i have to create new element 
let div = document.createElement('div');

then i can add text 
div.innerText = 'I am good Boy';

then i can add class of attribute 
div.classList.add('newElement');
div.setAttribute('title', 'hello world');

then i can insert new element into dom
container.appendChild(div);

i can use insertBefore for any element before insert



### 3. What is Event Bubbling? And how does it work?

Ans:
Event bubbling means that when an event occurs on an element, it first executes on that element, and then it propagates upward to its parent, grandparent,

<div class="parent">
   <p class="child"></p>
</div>

if i add addEventListener both element and if i click p element first i get child element then i will get parent; why it occure? it for bubbling

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: 
event delegation is i can use event listener in parent by event bubbling i can handle all child elements smoothly.

event delegation perfomance is very well. 
dynamically handle all child elements.
code keep very clean.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault();
 stop default page reload
 form submit page reload stop

stopPropagation();
stop event bubbling
if i click child it will not bubbling parent




