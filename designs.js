// Select color input
const currentColor = document.getElementById("colorPicker");

// Select size input
const gridHeight = document.getElementById("inputHeight"),
    
      gridWidth = gridHeight.nextElementSibling,
    
      submitButton = gridWidth.nextElementSibling,
    
      myTable = document.getElementById("pixelCanvas");

//Make Grid Function
function makeGrid() {
    
    myTable.innerHTML = ""; //clear table to create a new one
    
    for (let i = 1; i <= gridHeight.value; i++) {
        var rows = document.createElement("tr");
        myTable.appendChild(rows);
        for (let j = 1; j <= gridWidth.value; j++) {
            const cols = document.createElement("td");
            rows.appendChild(cols);
        }
    }
    
    //paint function 
    const td = document.getElementsByTagName("td");
    
    for (let i = 0; i < td.length; i++) {
        
        td[i].addEventListener("click", function () {
            this.style.backgroundColor = currentColor.value;
        })
    }
}
// When size is submitted by the user, call makeGrid()
submitButton.onclick = function submitFun(e) {

    if(myTable.innerHTML !== "") {//if old design is exist
        const answer = prompt("to create new design write (y) \n to stay here write (n)");
        
        switch(answer) {
            case "y":
            case "Y":
                makeGrid();
                break;
            case "n":    //ignore submition in these cases
            case "N":
            default:
                e.preventDefault();
                break;
        }
    }
    else {
        makeGrid();
    }
};