let container = document.querySelector(".container")
let n = 25;
let arrOfCells = [];
let numSize = [10,20,30,40,50];
let numColor = ["red","blue","green","orange","cyan","violet"];
let startButton = document.getElementById("startButton");
let tableExist = false;
let countDown = document.getElementById("countDown");
let p = document.createElement("p");
let idArr = [];
let cellNumber = 1;
let maxOfTable = 0;
let seconds = 50;
container.style.display = "none"

startButton.addEventListener("click",createTabel);

function createTabel(){
    countDown.innerHTML = seconds;
    container.style.display = "flex";
    let countStart = setInterval(count,1000);

    if (tableExist){
          randomNumbers();
          clearInterval(countStart);
        for(let el of idArr){
            el.style.backgroundColor = "antiquewhite";
            el.removeAttribute("state");
        };
        cellNumber = 1;
        clearInterval(countStart);
    }else{
         for(let i = 0; i < n; i++){
            cell = document.createElement("div");
            cell.setAttribute("class","cell");
            cell.setAttribute("id",`cell${i+1}`);
            container.appendChild(cell);
        }
        randomNumbers();
    }
    

    let max = function(){
        let maxOf;
        for(let el of idArr){
            if(+el.innerHTML == 25) maxOf = idArr.indexOf(el)
        }
        return maxOf ;
    }

    
    function count(){
        
    if(countDown.innerHTML == 0){
        container.style.display = "none";
        p.setAttribute("class","paragraf");
        p.innerHTML= "GAME OVER";
        document.body.appendChild(p);
        countDown.innerHTML = "";       
    }else if (idArr[max()].getAttribute("state") == "clicked"){
        container.style.display = "none";
        p.setAttribute("class","paragraf");
        p.innerHTML= "YOU WIN";
        document.body.appendChild(p);
        countDown.innerHTML = countDown.innerHTML;
        
    }else{
        countDown.innerHTML -= 1;
        
        }
    }

function randomNumbers(){
    let cells = document.getElementsByClassName("cell");
    
    for(let i = 1; i <= n; i++ ){
        arrOfCells.push(i); 
    }
    let x;
    let m = n;
    for (let i = 0; i < n; i++){
            x = parseInt(Math.random() * m);
            cells[i].innerHTML = arrOfCells[x];
            cells[i].style.fontSize = numSize[parseInt(Math.random() * numSize.length)]+ "px";
            cells[i].style.color = numColor[parseInt(Math.random() * numColor.length)];
            arrOfCells.splice(x,1);
            m--;
        
        }
    tableExist = true;
    }
    
     for (let i = 1; i <= n; i++){
        let id =document.getElementById("cell"+i)
        idArr.push(id);
        }
     for(let el of idArr){
            el.addEventListener("click",game);
     }   
    
}
   

function changeColor(){
            this.style.backgroundColor = "#99ff66";
            this.style.color = "#99ff66";
            this.setAttribute("state","clicked");
        }



function game(){
    
    if (this.innerHTML == cellNumber){
        changeColor.bind(this)();
        cellNumber++;
        }
    
}
    





















