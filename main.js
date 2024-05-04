"use strict"

let myLibrary = [];

// checkbox checking if the book has been read or not
let readStatus = document.getElementById('read');
readStatus.addEventListener('change', function () {
    this.checked ? this.setAttribute('value', 'Read') : this.setAttribute('value', 'Not Read');
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// render book on to the screen
function render() {
    const tableBody = document.getElementById('table_body');
    tableBody.textContent = "";
    myLibrary.forEach((book) => {
        const addedBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td><button class="btn" onclick="deleteBook()">Delete</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", addedBook);
    });
}

// remove book, when delete button is clicked by user
function deleteBook(index) {
    myLibrary.splice(index, 1);
    render();
}


function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

// prevent page from submitting data to non-existing server and invoke function
form.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary();
})
