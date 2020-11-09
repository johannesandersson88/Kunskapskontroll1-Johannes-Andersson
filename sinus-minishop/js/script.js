/* ÅTERSTÄLLNINGSKNAPP */

// Här skapar vi en ny knapp för att undvika förvirring kring dom knappar som finns. Röd och vit för tydlighet. 

// Bestämmer efter vilken section knappen ska hamna. 
let lastProduct = document.querySelector('.art-3');

// Skapar den nya knappen
let newButton = document.createElement('button');

// Hur den kommer se ut 
newButton.innerText = 'Reset To Original';
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';
newButton.style.padding = '40px 40px';
newButton.style.fontSize = '20px';
newButton.style.cursor = 'pointer';
newButton.style.marginLeft = '40px';

// Skapas på sidan och i HTML dokumentet. 
lastProduct.insertAdjacentElement('afterend', newButton);

// Eventlistener för interaktion när man klickar på den. Återställer allt till orginalet.  

newButton.addEventListener('click', function () {
    // Ändrar tillbaka färg på tröja 2 till orginal. 
    changeColourPhoto[3].src = "img/hoodie-fire.png";

    // Ändrar tillbaka texten till orginalet i alla sektioner.  
    paragraphText[0].innerText = 'Tryck på knappen för beskrivning av produkten.';
    paragraphText[0].style.fontWeight = 'bold';
    paragraphText[0].style.fontSize = '18px';

    // Visar elementen igen och ger samma bakgrund på sektion 3.
    let hideAllOne = document.querySelector('.art-3 h2')
    let hideAllTwo = document.querySelector('.art-3 h3')
    let hideAllThree = document.querySelector('.art-3 p')
    hideAllOne.style.display = 'block';
    hideAllTwo.style.display = 'block';
    hideAllThree.style.display = 'block';

    bgChange.style.background = 'white';

    // Ändrar tillbaka knappen i sektion 3
    newButtonChange[2].innerText = 'PRESS ME';
    newButtonChange[2].style.backgroundColor = '#222';
    newButtonChange[2].style.color = 'white';

    // Knappen tillbaka i sektion 2
    newButtonChange[1].innerText = 'PRESS ME';
    // Knappen i Sektion 1
    newButtonChange[0].innerText = 'PRESS ME';

    // Ta bort listan med storlekar 
    ul.style.display = 'none';

});

/*  [1]  Ny text på artiklar och knappar.  */
let paragraphText = document.querySelectorAll('p');

// Första Sektionen 
paragraphText[0].innerText = 'Tryck på knappen för beskrivning av produkten.';
paragraphText[0].style.fontWeight = 'bold';
paragraphText[0].style.fontSize = '18px';
// Andra Sektionen 
paragraphText[1].innerText = 'Tryck på knappen för att se andra färger av tröjan. ';
paragraphText[1].style.fontWeight = 'bold';
paragraphText[1].style.fontSize = '18px';
// Tredje Sektionen 
paragraphText[2].innerText = 'Tryck på knappen för att se vilka färger som finns.'
paragraphText[2].style.fontWeight = 'bold';
paragraphText[2].style.fontSize = '18px';

// Tillgång till alla knappar för textändring
let newButtonChange = document.querySelectorAll('button');
newButtonChange[0].innerText = 'PRESS ME';
newButtonChange[1].innerText = 'PRESS ME';
newButtonChange[2].innerText = 'PRESS ME';



/* [2] Byter ut färgen på hood 2. */

// Ger tillgång till bilderna
let changeColourPhoto = document.querySelectorAll('img');

// Ger tillgång till alla knappar
let changeColorButton = document.querySelectorAll('button');

// Funktionen när man trycker, ändras färgen på tröjan.

// Vilken av knapparna som ska tryckas på 
changeColorButton[1].addEventListener('click', function () {

    // Vilken av bilderna som ska bytas ut, ändrar source koden för att lägga in ny bild. 
    changeColourPhoto[3].src = "img/hoodie-forrest.png";

    // Ny text på knappen 
    newButtonChange[1].innerText = 'Hit RESET';
});


/*  [3] Byter ut informationen på paragraph i första sektionen. */

// Ger tillgång till paragraphs. Queryselector för jag vet att den väljer första paragraph jag har i HTML. 
let productInfo = document.querySelector('p');

// Ger tillgång till knapparna
let changeTextButton = document.querySelectorAll('button');

// Funktionen när man trycker, då får man en beskrivning av produkten. 
changeTextButton[0].addEventListener('click', function () {

    // Ny stil för att visa en annan sorts text. 
    paragraphText[0].innerText = 'Hoodtröja i förpackning av fullt återandvändbart material. Finns i alla storlekar.';
    paragraphText[0].style.fontWeight = 'normal';
    paragraphText[0].style.fontSize = '16px';

    // text i knappen ändras
    newButtonChange[0].innerText = 'Hit RESET';
});

/* [4] Ändra bakgrundsfärg på tredje sektionen, visar vilka färger man kan få. */

// Ger tillgång till article för ändra hela bakgrundsfärgen. 
let bgChange = document.querySelector('.art-3');

// Ger tillgång till knapparna 
let bgChangeButton = document.querySelectorAll('button');

// Funktionen där du får upp nytt färgspektrum. 

bgChangeButton[2].addEventListener('click', function () {
    bgChange.style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)';

    // Dölj text och rubriker, men inte knappen.
    let hideAllOne = document.querySelector('.art-3 h2')
    let hideAllTwo = document.querySelector('.art-3 h3')
    let hideAllThree = document.querySelector('.art-3 p')
    hideAllOne.style.display = 'none';
    hideAllTwo.style.display = 'none';
    hideAllThree.style.display = 'none';

    newButtonChange[2].innerText = 'Hit Reset';
    newButtonChange[2].style.backgroundColor = 'white';
    newButtonChange[2].style.color = 'black';

})

/* Lägg till en lista */

// Var knappen för att visa listan hamnar
let newButtonHolder = document.querySelectorAll('article');

// Skapar den nya knappen
let newButton2 = document.createElement('button');

// Hur den kommer se ut 
newButton2.innerText = 'Show Sizes';
newButton2.style.backgroundColor = 'black';
newButton2.style.color = 'white';
newButton2.style.padding = '20px 40px';
newButton2.style.fontSize = '15px';
newButton2.style.cursor = 'pointer';
newButton2.style.marginTop = '40px';
newButton2.style.height = '50%'

// Skapas på sidan och i HTML dokumentet. Efter sista articlen i footern.
newButtonHolder[5].insertAdjacentElement('afterend', newButton2)

// För att visa listan 

newButton2.addEventListener('click', function () {
    ul.style.display = 'block';
});



// Listan och allt innehåll. 

let ul = document.createElement('ul');

// Listan hamnar till höger om knappen
newButton2.insertAdjacentElement('afterend', ul);



// Skapar Header och list element för storlekar
let h2 = document.createElement('h2');
let li = document.createElement('li');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

// Trycker in allt i UL listan
ul.appendChild(h2);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);


// Vad som ska stå på respektive plats
h2.textContent = 'Size List'
li.textContent = 'X-Small';
li1.textContent = 'Small';
li2.textContent = 'Medium';
li3.textContent = 'Large';
li4.textContent = 'X-Large';

// Styling på listan 
h2.style.fontSize = '22px';
ul.style.marginRight = '20px';
ul.style.display = 'none';
h2.style.borderBottom = '1px solid black';
li.style.borderBottom = '1px solid black';
li1.style.borderBottom = '1px solid black';
li2.style.borderBottom = '1px solid black';
li3.style.borderBottom = '1px solid black';
li4.style.borderBottom = '1px solid black';











