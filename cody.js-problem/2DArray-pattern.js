// let matrix = [[1, 2, 3, 4,],
//               [5, 6, 7, 8],
//               [9, 10, 11, 12],
//               [13, 14, 15, 16] ]

// function printPatterns(matrix){ 

//     // mainDigonal
//     let mainDiagonal = [];
    
//     let rci;
//     let lci;
//     let n = matrix.length;
//     for(let i = 0; i < matrix.length; i++){ 
//         for(let j = 0; j < matrix[i].length; j++){ 
//             rci = matrix[i][j];
//             lci = matrix[j][i];
//             if(rci === lci){ 
//                 mainDiagonal.push(rci)
//             }
//             }
//     }
//     console.log(mainDiagonal)

//     let antiDiagonal = [];

//     for(let c = 0; c < matrix.length; c++){ 
//         antiDiagonal.push(matrix[c][n - 1 - c])
//     }
//     console.log(antiDiagonal);

//     let topBorder = matrix[0];
//     console.log(topBorder)
    

//     let bottomBorder = matrix[n -1];
//     console.log(bottomBorder)

//     let leftBorder = [];
//     for(let i = 0; i < n; i++){ 
//         leftBorder.push(matrix[i][0])
//     }
//     console.log(leftBorder)

//     let rightBorder = [];
//     for(let i = 0; i < n; i++){ 
//         rightBorder.push(matrix[i][n - 1])
//     }
//     console.log(rightBorder)
    
// }

// printPatterns(matrix)

let matrix = [ 
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
            ]
            
function findSumPatterns(arr){ 
    let n = matrix.length

  let mainDiagonalSum = 0;
  for(let i = 0; i < n; i++){ 
   mainDiagonalSum += arr[i][i]
  }

  let antiDiagonalSum = 0;
  for(let i = 0; i < n; i++){ 
   antiDiagonalSum += arr[i] [n - 1 - i]
  }

  let borderSum = 0;
  for(let j = 0; j < n; j++){ 
    borderSum += arr[0][j]  // first row of matrixArr
    if(n > 1){ 
        borderSum += arr[n - 1][j]  // last row of matrixArr n-1 = length - 1, 3 -1 = 2, now 2 = index of row, j = every character one by one in forloop
    }
  }

  for(let i = 0; i < n-1; i++){ 
    borderSum += arr[i][0]

    if(n > 1){ 
        borderSum += arr[i][n - 1]
    }
  }

  // Format and print the results
  console.log(`Main diagonal sum: ${mainDiagonalSum}`);
  console.log(`Anti-diagonal sum: ${antiDiagonalSum}`);
  console.log(`Border sum: ${borderSum}`)

}

findSumPatterns(matrix)