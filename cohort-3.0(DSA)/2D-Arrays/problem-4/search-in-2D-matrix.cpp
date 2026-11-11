#include <iostream>
using namespace std;

int main() 
{ 
    int n, m, x;
    cin >> n >> m >> x;

    int arr[n][m];
    for(int i = 0; i < n; i++){ 
        for(int j = 0; j < m; j++){ 
            cin >> arr[i][j];
        }
    }

    bool xExists = false;
     for(int i = 0; i < n; i++){ 
        for(int j = 0; j < m; j++){ 
            if(arr[i][j] == x){ 
                xExists = true;
            }
        }
    } 
    if(xExists){ 
        cout << "true" << endl;
    }
    else{ 
        cout << "false" << endl;
    }
}