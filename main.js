// 1 
let divContent = document.getElementById('content')
console.log(divContent);
let firstH3 = divContent.firstElementChild
console.log(firstH3);

// 2 
let niv3 = divContent.getElementsByTagName('h3')[1]
console.log(niv3);

// 3 
let prevNiv3 = niv3.previousElementSibling
console.log(prevNiv3);

// 4
let petitPara = divContent.getElementsByTagName('p')[1]
let prevPetitPara = petitPara.nextElementSibling
console.log(prevPetitPara);

// 5 
let firstImportant = document.getElementsByClassName('important')
let parentImportant = firstImportant[1].parentElement
console.log(parentImportant);

let lastImp = document.getElementsByClassName('important')
let nextImp = lastImp[3].nextElementSibling
console.log(nextImp);

// 6
let listEL = document.getElementById('listElements')
let parListEl = listEL.parentElement
let firstChildParListEL = parListEl.firstElementChild
console.log(firstChildParListEL);

// 7 
let nextLastImp = firstImportant[3].nextElementSibling
console.log(nextLastImp);

// 8
let gen = document.getElementById('textGeneral')
let nextGen = gen.nextElementSibling.nextElementSibling
console.log(nextGen);
console.log("-----");

// 9
let foot = document.getElementById('footer')
let span1 = foot.getElementsByTagName('span')[0]
console.log(span1);
let parSpan1 = span1.parentElement
console.log(parSpan1);
let sibParSpan1 = parSpan1.nextElementSibling
let child = sibParSpan1.firstElementChild
console.log(child);

// 10 
let prenom = foot.getElementsByTagName('span')[1]
console.log(prenom);
let nicolas = prenom.getElementsByTagName('b')[0]
console.log(nicolas);

// 11
let grandP = document.querySelector('.grandParagraphe')
console.log(grandP);

// 12
let newMeth = document.querySelectorAll('li')
console.log(newMeth);
let listFinal = Array.from(newMeth)
console.log(listFinal);

listFinal.forEach(el => {
    console.log(el);
});

