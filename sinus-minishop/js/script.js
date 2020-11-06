/* ÅTERSTÄLLNINGSKNAPP */

// Här skapar vi en ny knapp för att undvika förvirring kring dom som finns. 

// Bestämmer efter vilken section knappen ska hamna. 
let lastProduct = document.querySelector('.art-3');

// Skapar den nya knappen
let newButton = document.createElement('button');

// Hur den kommer se ut 
newButton.innerText = 'Reset All Javascript';
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';
newButton.style.padding = '20px 20px';
newButton.style.fontSize = '20px';
newButton.style.cursor = 'pointer';

// Skapas på sidan och i HTML dokumentet. 
lastProduct.insertAdjacentElement('afterend', newButton)

// Eventlistener för interaktion när man klickar på den. Återställer allt till orginalet.  

newButton.addEventListener('click', function () {
    // Ändrar tillbaka färg på tröja 2 till orginal. 
    changeColourPhoto[3].src = "img/hoodie-fire.png";

});

// Ny text, istället för Lorem. Kan ändras via knapparna. Väljer elementen här.  
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







// 2 Byter ut ett foto. Man ska kunna trycka för att välja färg, toggle.

// Vilken bild vi ska ändra, skapar ett Element och lägger in HTML koden för nya bilden. 
let changeColourPhoto = document.querySelectorAll('img');

// Vilken knapp vi ska ändra bild med 
let changeColorButton = document.querySelectorAll('button');

// Funktionen när man trycker, ändras färgen på tröjan.
changeColorButton[1].addEventListener('click', function () {
    changeColourPhoto[3].src = "img/hoodie-forrest.png";
});



console.log(changeColourPhoto)


