const playerIcon = document.createElement('div')
playerIcon.id = 'playerIcon';
const rowsWrapper = document.getElementById("rowsWrapper");
let mainWrapper = document.getElementById('mainWrapper');

const maps = [
    [
    ////////////////////////////////////////////////////////(Map[1])////////////////////////////////////////////////////////////////////    
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['O'], ['O'], ['W']],
        [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['O'], ['O'], ['W']],
        [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['O'], ['O'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ],
    /////////////////////////////////////////////////////////(Map[2])/////////////////////////////////////////////////////////////////////

    [
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], ['B'], [' '], ['B'], [' '], ['B'], [' '], [' '], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['O'], ['O'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' ']],
        [['W'], ['O'], ['O'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['P'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['B'], [' '], ['W'], ['W'],['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ],

    //////////////////////////////////////////////////////////(Map[3])/////////////////////////////////////////////////////////////////////
    [
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],['W'], ['W'], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '],[' '], [' '], [' '], [' '], ['W'], [' '], [' '],[' '], ['W'], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '],[' '], [' '], [' '], [' '], [' '], [' '], [' '],[' '], ['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '],['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'],[' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'],[' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'],[' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '], [' '], [' '],[' '], [' '], [' '], ['W'], ['O'], ['W'], ['W'],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], ['W'], ['B'], ['W'],['W'],['W'], ['W'], ['W'], ['W'], ['W'], ['O'], ['W'], ['W'],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '],[' '],['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '],[' '],['B'], [' '], ['P'], [' '], [' '], [' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], [' '], [' '], [' '],[' '],['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '],['W'], [' '], [' '], [' '], [' ']],
        [[' '],['W'], ['W'], ['W'], ['W'], ['W'], ['W'],['W'], ['W'], ['W'], ['W'], ['W'], ['W'],['W'], ['W'], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],

    ],
]

let mapNumber = 0;
let map = maps[mapNumber];
console.log(map);
let playerLocation = [];
var locationsOfBoxes = [];
let listOfFinishCells = []

function createWelcomeMat() {
    let welcomeMatImage = document.createElement('img');
    welcomeMatImage.setAttribute('src', 'images/door-mat-01.png');
    welcomeMatImage.className = 'welcomeMatImage';
    return welcomeMatImage;
}

function createBox(cellNumber, rowNumber) {
    let box = document.createElement('div');
    box.className = 'box';
    box.id = "boxAtcell" + cellNumber + "row" + rowNumber;
    let image = document.createElement('img');
    image.setAttribute('src', 'images/box-01.png')
    image.className = "boxImage"
    box.appendChild(image);
    return box;
}

function createRows() {
    for (let i = 0; i < map.length; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        row.dataset.rowNumber = i;

        createCells(row);
        rowsWrapper.appendChild(row)
    }
}

function createCells(row) {
    for (let i = 0; i < map[0].length; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = "cell" + i + row.id;
        cell.dataset.cellNumber = i;
        cell.dataset.rowNumber = row.dataset.rowNumber
        switch (map[row.dataset.rowNumber][i][0]) {
            case 'W':
                cell.className = 'wall cell';
                break;
            case ' ':
                cell.className = 'floor cell';
                break;
            case 'P':
                cell.className = 'floor cell';
                playerLocation = [i, Number(row.dataset.rowNumber)];
                break;
            case 'O':
                cell.className = 'floor cell finish';
                listOfFinishCells.push(cell.id)
                break;
            case 'B':
                cell.className = 'floor cell';
                let box = createBox(i, Number(row.dataset.rowNumber));
                cell.appendChild(box);
                break;
            case 'X':
                let boxX = createBox(i, Number(row.dataset.rowNumber));
                cell.appendChild(boxX)
                cell.className = 'floor cell finish'
                listOfFinishCells.push(cell.id)
                break;
        }
        row.appendChild(cell);
    }
}

function changePlayerLocation(Right, Down) {
    let rowNumber = playerLocation[1] + Down;
    let cellNumber = playerLocation[0] + Right;
    let mapLocation = (map[rowNumber][cellNumber][0]);
    let playerNewLocationDiv = document.getElementById('cell' + cellNumber + 'row' + rowNumber)
    let direction = whatDirection(Right, Down);
    let newPlayerLocation = [cellNumber, rowNumber]
    canTheBoxMove = true;
    if (mapLocation !== 'W' && mapLocation !== undefined && canBoxMove(Right, Down)) {
        playerIcon.style.animationName = "slide" + direction
        let playerLocationDiv = document.getElementById('cell' + cellNumber + 'row' + rowNumber)
        playerLocationDiv.appendChild(playerIcon);
        playerLocation = newPlayerLocation;
    }
    if (playerNewLocationDiv.childElementCount > 1) {
        moveBox(Right, Down, playerNewLocationDiv)
        if (checkForWin() == true) {
            youWon();
        }
    }
}

function canBoxMove(Right, Down) {
    let result = true;
    let newPlayerLocationCell = playerLocation[0] + Right;
    let newPlayerLocationRow = playerLocation[1] + Down;
    let newPlayerLocationDiv = document.getElementById('cell' + newPlayerLocationCell + 'row' + newPlayerLocationRow)
    let newBoxLocationCell = playerLocation[0] + (2 * Right);
    let newBoxLocationRow = playerLocation[1] + (2 * Down);
    let newBoxLocationDiv = document.getElementById('cell' + newBoxLocationCell + 'row' + newBoxLocationRow)
    if (newBoxLocationDiv.childElementCount !== 0 || newBoxLocationDiv.className.includes('wall')) {
        result = false;
    }
    if (newPlayerLocationDiv.childElementCount == 0) {
        result = true;
    }
    return result;
}

function moveBox(Right, Down, currentBoxParentDiv) {
    let direction = whatDirection(Right, Down);
    let location = currentBoxParentDiv.id;
    let box = document.getElementById('boxAt' + location);
    box.style.animationName = 'slide' + direction;
    let newBoxLocationCell = playerLocation[0] + Right;
    let newBoxLocationRow = playerLocation[1] + Down;
    let newBoxLocationDiv = document.getElementById('cell' + newBoxLocationCell + 'row' + newBoxLocationRow)
    if (newBoxLocationDiv.childElementCount == 0 && newBoxLocationDiv.className.includes('floor')) {
        newBoxLocationDiv.appendChild(box);
        box.id = "boxAtcell" + newBoxLocationCell + "row" + newBoxLocationRow;
    }
}

function whatDirection(Right, Down) {
    let direction = '';
    switch (Right) {
        case 1:
            direction = 'Right';
            break;
        case -1:
            direction = 'Left';
            break;
    }
    switch (Down) {
        case 1:
            direction = 'Down';
            break;
        case -1:
            direction = 'Up';
            break;
    }
    return direction;
}

function checkForWin() {
    let result = false;
    let numnberOfFinishSquaresContainingBoxes = 0
    for (let i = 0; i < listOfFinishCells.length; i++) {
        let finishCell = listOfFinishCells[i];
        let finishDiv = document.getElementById(finishCell);
        if (finishDiv.childElementCount > 0) {
            if (finishDiv.childNodes[0].classList.contains('box')) {
                numnberOfFinishSquaresContainingBoxes++;
            }
        }
    }
    if (numnberOfFinishSquaresContainingBoxes == listOfFinishCells.length) {
        result = true;
    }
    return result;
}

function youWon() {
    let text = document.createTextNode("You Won");
    let element = document.createElement('div');
    let breakElement = document.createElement('br');

    element.appendChild(text);
    element.appendChild(breakElement);
    element.id = "winDiv"
    let nextLevelButton = createNextLevelButton('Try the next level');
    if (mapNumber == maps.length - 1) {
        nextLevelButton.innerHTML = "You beat the last level. Go back to the first level."
    }
    element.appendChild(nextLevelButton);
    let restartButton = createResetLevelButton('Retry this level');
    element.appendChild(restartButton)
    rowsWrapper.appendChild(element);
}

createRows();
changePlayerLocation(0, 0);
let nextLevelButton = createNextLevelButton('Next Level');
mainWrapper.appendChild(nextLevelButton);
let resetLevelButton = createResetLevelButton('Restart this level');
mainWrapper.appendChild(resetLevelButton)

function resetLevel() {
    rowsWrapper.innerHTML = "";
    createRows();
    changePlayerLocation(0, 0);
}

function createNextLevelButton(buttonText) {
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    button.appendChild(text);
    button.className = 'button'
    button.id = 'nextLevelButton'
    button.addEventListener('click', switchMaps)
    return button;
}

function createResetLevelButton(buttonText) {
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    button.appendChild(text);
    button.addEventListener('click', resetLevel)
    return button;
}

function switchMaps() {
    mapNumber++
    if (mapNumber < maps.length) {
        map = maps[mapNumber];
        if (mapNumber == maps.length - 1) {
            nextLevelButton.innerHTML = 'Back to first level'
        }
    } else {
        mapNumber = 0;
        map = maps[mapNumber];
        nextLevelButton.innerHTML = 'Next level'
    }
    rowsWrapper.innerHTML = "";
    listOfFinishCells = []
    createRows();
    changePlayerLocation(0, 0);

}


let arrowKeyPressed = function (event) {
    switch (event.key) {
        case 'ArrowRight':
            changePlayerLocation(1, 0);
            break;
        case 'ArrowLeft':
            changePlayerLocation(-1, 0);
            break;
        case 'ArrowDown':
            changePlayerLocation(0, 1);
            event.preventDefault();
            break;
        case 'ArrowUp':
            changePlayerLocation(0, -1);
            event.preventDefault();
            break;
    }

}

document.addEventListener('keydown', arrowKeyPressed);