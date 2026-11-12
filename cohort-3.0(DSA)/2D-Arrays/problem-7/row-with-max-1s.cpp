#include <iostream>
using namespace std;

int main () { 
    int n, m;
    cin >> n >> m;
    int arr[n][m];
    for(int i = 0; i < n; i++){ 
        for(int j = 0; j < m; j++){ 
            cin >> arr[i][j];
        }
    }

    int bestRow = -1;
    int bestCount = 0;
    for(int i = 0; i < n; i++){ 
        int rowCount = 0;
        for(int j = 0; j < m; j++){ 
            if(arr[i][j] == 1){ 
                rowCount++;
            }
        }
        if(rowCount > bestCount){ 
            bestCount = rowCount;
            bestRow = i;
        }
    }

    cout << bestRow << endl;
}