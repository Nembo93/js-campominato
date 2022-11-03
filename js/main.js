// Creare un ciclo che inserisca 100 celle nel container
// Numerare progressivamente le celle da 1 a 100
// Aggiungere alla cella la possibilità di colorarsi con un click

const boardContainer = document.querySelector(`.container`);
const gameLevel = document.getElementById(`level`);

const playStart = document.getElementById(`play_start`);
playStart.addEventListener(`click`, function(){

boardContainer.innerHTML = ``;
    // Definire variabili per creazione celle
    let easyGameCell = 100;
    let mediumGameCell = 81;
    let hardGameCell = 49;

    if (gameLevel.value === `facile`){
        console.log(`facile`);
        for( i = 1; i <= easyGameCell; i++){
            const boardCell = document.createElement(`div`);
            boardCell.classList.add(`cell`, `easy_cell`);
            boardCell.innerHTML = i;
            boardContainer.append(boardCell);
            boardCell.addEventListener(`click`, function(){
                console.log(this.innerHTML);
                if (bomb.includes[this]){
                    this.classList.add(`clicked`);
                }
                else { 
                    this.classList.add(`clicked_bomb`);
                }
                
            })
        }
    } else if (gameLevel.value === `medio`){
        console.log(`medio`);
        for( i = 1; i <= mediumGameCell; i++){
            const boardCell = document.createElement(`div`);
            boardCell.classList.add(`cell`, `medium_cell`);
            boardCell.innerHTML = i;
            boardContainer.append(boardCell);
            boardCell.addEventListener(`click`, function(){
                console.log(this.innerHTML);
                this.classList.add(`clicked`);
            })
        }
    } else{
        console.log(`difficile`);
        for( i = 1; i <= hardGameCell; i++){
            const boardCell = document.createElement(`div`);
            boardCell.classList.add(`cell`, `hard_cell`);
            boardCell.innerHTML = i;
            boardContainer.append(boardCell);
            boardCell.addEventListener(`click`, function(){
                console.log(this.innerHTML);
                this.classList.add(`clicked`);
            })
        }
    }
    
})


// Dichiarare un array con 16 numneri casuali da 1 a 100
const bomb = [];
let i = 1;
while(i <= 16){
    let myNum = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(myNum);
    if (bomb.includes(myNum)){
        
    }
    else{
        bomb.push(myNum);
    }
    i++;
}

console.log(bomb);







// for( i = 1; i <= easyGameCell; i++){
//     const boardCell = document.createElement(`div`);
//     boardCell.classList.add(`cell`);
//     boardCell.innerHTML = i;
//     boardContainer.append(boardCell);
//     boardCell.addEventListener(`click`, function(){
//         console.log(this.innerHTML);
//         this.classList.add(`clicked`);
//     })
// }