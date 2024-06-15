console.log('running')
/*========================================constants========================================================================*/











/*==========================================state variables===============================================================*/
let turn; // this will 1 or -1
let board; // this will be a 2D array of 7 column arrays with 6 values
let winner; // this will be set to null, 1, -1, or 'T'










/*===========================================cached elements==============================================================*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');












/*=============================================events listeners==========================================================*/












/*==============================================functions================================================================*/

function init() {
    turn = 1;
    board = [
      [0, 0, 0, 0, 0, 0], // col 0
      [0, 0, 0, 0, 0, 0], // col 1
      [0, 0, 0, 0, 0, 0], // col 2
      [0, 0, 0, 0, 0, 0], // col 3
      [0, 0, 0, 0, 0, 0], // col 4
      [0, 0, 0, 0, 0, 0], // col 5
      [0, 0, 0, 0, 0, 0], // col 6
    ];
    // r0 r1 r2 r3 r4 r5 
    ;
    winner = null;
    render();
  }
  
  function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
  }
  
  // this function transfers the state to the DOM
  function render() {
    renderBoard;
    renderMessage;
    renderControls;
  }
  function renderBoard() {
    board.forEach(function(colArr, colIdx) {
     colArrforEach(function(rowVal, rowIdx) {
       const cellId = `c${colIdx}r${rowIdx}`;
       const cellEl = document.getElementById(cellId);
       console.log(cellEl, cellId, rowVal, colArr);
     });
    });
    
  }

  function renderMessage() {
    if (winner === 'T') {
      messageEl.innerText = "It's a tie!!!";
    } else if (winner) {
      messageEl.innerHTML= `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
      messageEl.innerHTML = `<span style="c">${COLORS[turn].toUpperCase()}<span>'s turn`;
    }
  }
  function renderControls() {
    // button and markers need to be rendered conditionally
    // button: hide when the game is in play
    // markers: hide when the column is occupied or there is a winner
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // 1)iterate the marker NodeList using forEach
    // 2) for each div check check the corresponding column to see if there no zeros
    // 3) if there are no zeros or there's winner, we set the visibility to hidden
    // other whise we set visibility to visible
    markerEls.forEach(function(marker, colIdx) {
      const colArr = board[colIdx];
      const hideMarker = !colArr.includes(0) || winner;
      marker.style.visibility = hideMarker ? 'hidden' : 'visible';
    });
  }