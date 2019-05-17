// getElementById & getElementsByClassName

// var titles = document.getElementsByClassName('title')

// Array.from(titles).forEach(function(item){
// 	console.log(item)
// })


// -----------------------------------------------------------------
// ---------------------------------------------------QUERY SELECTOR
// -----------------------------------------------------------------


// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf);

// var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// })

// -----------------------------------------------------------------
// -------------------------------------CHANGING TEXT & HTML CONTENT
// -----------------------------------------------------------------


// var books = document.querySelectorAll('#book-list li .name');
// books.forEach(function(book){
//     // console.log(book.textContent);
//     book.textContent += ' (book title)';
// })

// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2>Books and more Books...</h2>';
// bookList.innerHTML += '<p>This is P tag</p>';

// -----------------------------------------------------------------
// ------------------------------------------------------------NODES
// -----------------------------------------------------------------

// var banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is', banner.nodeType);
// console.log('#page-banner has child nodes ', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// -----------------------------------------------------------------
// -----------------------------------------------TRAVERSING THE DOM
// -----------------------------------------------------------------

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is :', bookList.parentNode);
// console.log('the parent element kuadrat :v is :', bookList.parentElement.parentElement);

// console.log(bookList.children);

// TRAVERSING THE DOM PART II

// const bookList = document.querySelector('#book-list');
// console.log('book-list next sibling is ', bookList.nextSibling);
// console.log('book-list next element sibling is ', bookList.nextElementSibling);

// console.log('book-list previous sibling is ', bookList.previousSibling);
// console.log('book-list previous element sibling is ', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else! XD';

// -----------------------------------------------------------------
// -----------------------------------------------------------EVENTS
// -----------------------------------------------------------------

// var btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const parentBtn = e.target.parentElement;
//         parentBtn.parentElement.removeChild(parentBtn);
//     })
// });

// document.addEventListener('DOMContentLoaded', Function(){

// })

document.addEventListener('DOMContentLoaded', function () {

    // -----------------------------------------------------------------
    // --------------------------------------------------EVENTS BUBBLING
    // -----------------------------------------------------------------

    // Delete Items
    var list = document.querySelector('#book-list ul');

    list.addEventListener('click', function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        };
    });


    // -----------------------------------------------------------------
    // ___________________________________________INTERACTING WITH FORMS
    // ___________________________________________     CREATING ELEMENTS
    // -----------------------------------------------------------------

    const addForm = document.forms['add-book'];

    addForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        // create elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        // add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to DOM
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })

    // -----------------------------------------------------------------
    // -------------------------------------------------------HIDE BOOKS
    // -----------------------------------------------------------------

    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function (e) {
        if (hideBox.checked) {
            list.style.display = 'none';
        } else {
            list.style.display = 'initial';
        }
    })

    // -----------------------------------------------------------------
    // -----------------------------------------------------FILTER BOOKS
    // -----------------------------------------------------------------

    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function (e) {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function (book) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        })
    })

    // -----------------------------------------------------------------
    // --------------------------------------------------TABBED CONTNENT
    // -----------------------------------------------------------------

    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function (e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function (panel) {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            })
        }
    })
})