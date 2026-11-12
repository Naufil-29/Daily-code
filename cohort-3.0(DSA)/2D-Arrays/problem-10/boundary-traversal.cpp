#include <iostream>
using namespace std;

int main()
{ 
    int n, m;
    cin >> n >> m;

    int arr[n][m];
    for(int i = 0; i < n; i++){ 
        for(int j = 0; j < m; j++){ 
            cin >> arr[i][j];
        }
    }

  if(n > 1 && m > 1){ 

    // first corner top-left to top right.
        for(int j = 0; j < m; j++){ 
            cout << arr[0][j] << " ";
        }

    // second corner top-right + 1 to bottom-right
        for(int i = 1; i < n; i++){ 
            cout << arr[i][m - 1] << " ";
        }
  
    // third corner bottom-right + 1 to bottom-left - 1
        for(int j = m - 2; j > 0; j--){ 
            cout << arr[n - 1][j] << " ";
        }
  
    // fourth corner bottom-left to top-left - 1
        for(int i = n - 1; i >= 1; i--){ 
            cout << arr[i][0] << " ";
        }

  }
  else{ 
    for(int i = 0; i < n; i++){ 
        for(int j = 0; j < m; j++){ 
            cout << arr[i][j] << " ";
        }
    }
  }
}