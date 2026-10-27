
// var orangesRotting = function(grid) {
//     let queue = [];
//     let fresh = 0;
//     let minutes = 0;

//     // Step 1: Find all rotten oranges and count fresh oranges
//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[0].length; col++) {

//             if (grid[row][col] === 2) {
//                 queue.push([row, col]);
//             }

//             if (grid[row][col] === 1) {
//                 fresh++;
//             }
//         }
//     }

//     // If there are no fresh oranges
//     if (fresh === 0) {
//         return 0;
//     }

//     const directions = [
//         [-1, 0], // UP
//         [1, 0],  // DOWN
//         [0, -1], // LEFT
//         [0, 1]   // RIGHT
//     ];

//     // Step 2: BFS
//     while (queue.length > 0 && fresh > 0) {

//         let size = queue.length;

//         // Process one level (one minute)
//         for (let i = 0; i < size; i++) {

//             let [row, col] = queue.shift();

//             for (const [dr, dc] of directions) {

//                 let newRow = row + dr;
//                 let newCol = col + dc;

//                 // Check boundaries
//                 if (
//                     newRow >= 0 &&
//                     newRow < grid.length &&
//                     newCol >= 0 &&
//                     newCol < grid[0].length &&
//                     grid[newRow][newCol] === 1
//                 ) {
//                     // Rot the fresh orange
//                     grid[newRow][newCol] = 2;

//                     fresh--;

//                     queue.push([newRow, newCol]);
//                 }
//             }
//         }

//         minutes++;
//     }

//     return fresh === 0 ? minutes : -1;
// };

let n = 3;

var generateMatrix = function(n) {
    let arr = [];
    let sqr = n * n;
    
    
    
    console.log(arr)
    
};

generateMatrix(n);