const addBook = document.getElementById('button#addBook');
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const locker = document.querySelector('section.locker');




const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('page');




const library = [];
let cont = 0;
let contador = 0;
submit.addEventListener('click', closeForm)

function closeForm(){
    

    library[cont] = new book(inputAuthor.value, inputTitle.value, inputPages.value);

/*  p
    title.innerHTML = `${library[cont].title}`;
    authorName.innerHTML = `${library[cont].nameAuthor}`;
    numberPages.innerHTML = `${library[cont].pages}`;
    */
    
    

    add();
    form.style.display = "none";
    cont++;
    
    
}
function add(){
    for(let i = 0; i <= library.length; i++){
        const bookShelve = document.createElement('div');
        const title = document.createElement('h1');
        const authorName = document.createElement('h3');
        const numberPages = document.createElement('h6');

        title.innerHTML = `${library[i].titleBook}`;
        authorName.innerHTML = `${library[i].nameAuthor}`;
        numberPages.innerHTML = `${library[i].pages}`;

        bookShelve.appendChild(title);
        bookShelve.appendChild(authorName);
        bookShelve.appendChild(numberPages);
        locker.appendChild(bookShelve);

        bookShelve.setAttribute('style', 'width:200px; height:auto;border-radius:11px; background:white; color:black; border:solid 1px white;');
    }
}
function openForm(){
    form.style.display = "block";
    
}

function book(nameAuthor, titleBook, pages){
    this.nameAuthor=nameAuthor;
    this.titleBook=titleBook;
    this.pages=pages;
    this.read = function(){
        return true;
    }
}

/*const sutilArte = new book("Mark Manson","A sutil Arte de Ligar o foda-se","200");
library.push(sutilArte);

authorName.innerHTML = `${sutilArte.name}`;
title.innerHTML = `${sutilArte.title}`;
numberPages.innerHTML = `${sutilArte.pages}`;


locker.setAttribute('style', 'width:90%; height:auto;border-radius:11px; background:white; color:black;');

locker.appendChild(title);
locker.appendChild(authorName);
locker.appendChild(numberPages);

    
    authorName.innerHTML = `${sutilArte.name}`;
    title.innerHTML = `${sutilArte.title}`;
    numberPages.innerHTML = `${sutilArte.pages}`;
    para.innerHTML = `${inputTitle.value}`;
    locker.appendChild(para);
    form.style.display = "none";


        cont = 0;
    locker.setAttribute('style', 'width:90%; height:auto;border-radius:11px; background:white; color:black;');

    locker.appendChild(title);
    locker.appendChild(authorName);
    locker.appendChild(numberPages);

    authorName.innerHTML = `${library[0].nameAuthor}`;
    title.innerHTML = `${library[0].title}`;
    numberPages.innerHTML = `${library[0].pages}`;
*/