const add = document.getElementById('addBook');
const locker = document.getElementById('locker');
const body = document.getElementsByTagName('body')

const library=[];

//Variaveis do Formulario
const formulario = document.getElementById('form');
const inputTitle = document.getElementById('formTitle');
const inputName = document.getElementById('formName');
const inputPa = document.getElementById('formPa');
const addiction = document.getElementById('addictionBook')
const close = document.getElementById('cancel');
const colorWrapperBook = document.getElementById('colorWrapper');
const colorTextWrapper = document.getElementById('colorText');
const readNot = document.getElementById('readOrNot');

let cont=0;
let id=0;

add.addEventListener('click', openFormulario);
addiction.addEventListener('click', sendForm);
cancel.addEventListener('click', closeForm);


function openFormulario(){
    formulario.style.display = "block";
}

function sendForm(){
    if(inputName.value.length == 0 || inputPa.value.length == 0 || inputTitle.value.length == 0){
        window.alert('[Error] You need to write something');
    }else{
        const newBook = new Book(inputName.value, inputTitle.value, inputPa.value, cont);
        library.push(newBook);
        ad();
        closeForm();
    }
}

function closeForm(){
    formulario.style.display = "none";
}

function ad(){
    const meuBook = document.createElement('div');
    const insideBook = document.createElement('div');
    const titulo= document.createElement('h1');
    const author = document.createElement('h3');
    const nPa = document.createElement('h6');
    const rem = document.createElement('div');
    const lendo = document.createElement('button');
    //const read = document.createElement('button');

    rem.addEventListener('click', ()=>{
        meuBook.style.display= "none";
    });
    
    lendo.addEventListener('click', ()=>{
        if(lendo.innerHTML=='Not reading'){
            lendo.innerHTML=`Reading`;
        }else{
            lendo.innerHTML=`Not reading`;
        }
    })
    //estilo Para cada livro
    meuBook.setAttribute('style', 'border-radius: 11px;');
    meuBook.style.backgroundColor = colorWrapperBook.value;
    meuBook.style.color = colorTextWrapper.value;
    meuBook.style.height ="250px";
    meuBook.style.width= "200px";
    meuBook.style.margin="5px";
    titulo.setAttribute('style','font-size:30px');

    //estilo do remover
    rem.setAttribute('style','border: none; background-image: url(./icon/ic_cancel_white_24dp.png);  width: 30px;   height: 30px; background-size: cover;    background-repeat: no-repeat; background-color: black; opacity:0.5; border-radius:50%');

    insideBook.setAttribute('style', 'height:auto;  justify-content: center; align-items: center;flex-wrap: wrap;');
    lendo.setAttribute('style','border: none; width:150px;text-size:18px; border-radius:5px; height:30px; margin-top:10px; margin-bottom:2px' );
   
    //adicionar os livros no Armario
    meuBook.appendChild(rem);
    meuBook.appendChild(insideBook);
    insideBook.appendChild(titulo);
    insideBook.appendChild(author);
    insideBook.appendChild(lendo);
    insideBook.appendChild(nPa);
    //insideBook.appendChild(read);
    
    
    locker.appendChild(meuBook);

    titulo.innerHTML = `${library[cont].title} <br>`;
    author.innerHTML = `By: ${library[cont].name} <br>`;
    lendo.innerHTML = `${library[cont].read()} <br>`;
    nPa.innerHTML = `${library[cont].pa} Pages <br>`;
     
   
    
    
    cont++; 
    id++;
}

function Book(name, title, pa,position){
    this.name=name;
    this.title=title;
    this.pa=pa;
    this.position=position;

    this.info=function(){
        return `Nome do livro: ${name} \nTitulo do livro: ${title} \nN. De Pagina: ${pa}`;
    }
    this.read=function(){
        if(readNot.checked){
            return `Reading`;
        }else{
            return `Not Reading`;
        }
    }

}

function removerBook(){
    
}

/*
library[0] = new Book("Dario Prazeres","I am SuperMan","242");
library[1] = new Book("Prazeres","I am only a Man","242");
library[2] = new Book("Dario Prazeres","I am BigMan","242");
library[3] = new Book("Dario Prazeres","I am LitleMan","242");
*/
