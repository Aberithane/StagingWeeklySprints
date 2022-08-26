
// Pawn White
canMove('Pawn', 'A2', 'A4');
canMove('Pawn', 'A2', 'A3');
canMove('Pawn', 'A2', 'A5');

//Pawn Black
canMove('Pawn', 'A7', 'A6');
canMove('Pawn', 'A7', 'A5');
canMove('Pawn', 'A7', 'A4');
canMove('Pawn', 'A7', 'A8');

//Rook
canMove('Rook', 'A7', 'A1');
canMove('Pawn', 'B3', 'H3');

//King
canMove('King', 'A7', 'A6');
canMove('King', 'D7', 'E8');

//Bishop
canMove('Bishop', 'A1', 'H8');
canMove('Bishop', 'A2', 'H8');
canMove('Bishop', 'H1', 'G2');

//Queen
canMove('Queen', 'A1', 'H8');
canMove('Queen', 'A2', 'A8');
canMove('Queen', 'H1', 'G2');

//Knight
canMove('Knight', 'A1', 'C2');
canMove('Knight', 'E4', 'C5');

//FilesChecker
//getValidFiles('King','A');
//getValidFiles('King','H');
//getValidFiles('King','D');


function canMove(piece, curPos, tarPos) {
   //[0] = File | [1] = Rank
    let current = [curPos.charAt(0), curPos.charAt(1)];
    let target = [tarPos.charAt(0), tarPos.charAt(1)];

    let legal = false;

    switch (piece) {

        case 'Rook':
            if (current[0] == target[0] || current[1] == target[1]) {
                legal = true;
            }

        case 'Pawn':
            if (current[0] == target[0]) {
                if (current[1] == 2 || current[1] == 7) {
                    if (Math.abs(target[1] - current[1]) == 1 || Math.abs(target[1] - current[1]) == 2) {
                        legal = true;
                    }
                }
                else
                    if (Math.abs(target[1] - current[1]) == 1) {
                        legal = true
                    }
            }
       
       // case 'King':
       //     if ( getValidFiles('King',curPos[0]).includes(tarPos[0])) {
       //     legal=true;
       // }
       
        case 'King':
            if (Math.abs(current[0].charCodeAt(0) - target[0].charCodeAt(0) <= 1) && Math.abs(current[1] - target[1]) <= 1) {
                legal = true;
            }

        case 'Bishop':
            if (Math.abs(current[0].charCodeAt(0) - target[0].charCodeAt(0)) == Math.abs(current[1] - target[1])) {
                legal = true;
            }

        case 'Queen':
            if ((current[0] == target[0] || current[1] == target[1]) || Math.abs(current[0].charCodeAt(0) - target[0].charCodeAt(0)) == Math.abs(current[1] - target[1])) {
                legal = true;
            }

        case 'Knight':
            if ((Math.abs(current[0].charCodeAt(0) - target[0].charCodeAt(0)) == 2 && Math.abs(current[1] - target[1]) == 1)
                || (Math.abs(current[0].charCodeAt(0) - target[0].charCodeAt(0)) == 1 && Math.abs(current[1] - target[1]) == 2)) {
                legal = true;
            }
    }

    if (legal) {
        console.log(curPos, ' to ', tarPos, ' is a legal move');
    }
    else {
        console.log(curPos, ' to ', tarPos, ' is not a legal move');
    }
}

//Tried to work off of just the letters in an array but went with charCodeAt to make it easier, due to the specificity needed for Knight / Bishops moves.
// function getValidFiles(inPiece, inFile){
//   let outFiles = [];
 
//   let files = ['A','B','C','D','E','F','G','H'];
 
//   if (inPiece = 'King'){
//     switch(inFile){
//       case 'A': 
//         outFiles = ['A','B'];
//         break;

//       case 'H': 
//         outFiles = ['G','H'];
//         break;

//         default:
//         let input = files.indexOf(inFile);
//         outFiles = [files[input-1], inFile, files[input+1]];
//       }
//   }
//   console.log('Outfiles', outFiles);
//   return outFiles;
// }