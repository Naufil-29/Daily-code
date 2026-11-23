#include <iostream>
using namespace std;

int main() { 
    int n, m;
    cin >> n >> m;

    int A[n];
    int B[m];

    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }
    for(int j = 0; j < m; j++){ 
        cin >> B[j];
    }

    int i = 0;
    int j = 0;

    while( i < n and j < m){ 
        if(A[i] <= B[j]){ 
            cout << A[i] << " ";
            i++;
        }
        else{ 
            cout << B[j] << " ";
            j++;
        }
    }

    while(i < n){ 
        cout << A[i] << " ";
        i++;
    }

    while(j < m){ 
        cout << B[j] << " ";
        j++;
    }
    cout << endl;
}