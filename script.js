function createSquares() {
    var columns = [3,1,2]
    for(i = 1; i <= 9; i++)
    {
        var square = document.createElement("div")
        var elementoPai = document.getElementById("board")
        elementoPai.appendChild(square)
        square.className = "square"
        square.style.gridRowStart =  Math.ceil(i / 3)
        square.style.gridColumnStart = columns[Math.ceil(i % 3)]
    }
}