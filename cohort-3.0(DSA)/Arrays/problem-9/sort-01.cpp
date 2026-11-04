#include <iostream>
using namespace std;

void Runs(int n, int A[]){ 
    int c0 = 0;
    int c1 = 0;
    // loop to count 0s and 1s digits.
    for(int i = 0; i < n; i++){ 
        if(A[i] == 0){ 
            c0++;
        }
        else{ 
            c1++;
        }
    }

    // loop to print 0s 
    for(int i = 0; i < c0; i++){ 
        cout << 0 << " ";
    }
    // loop to print 1s
    for(int i = 0; i < c1; i++){ 
        cout << 1 << " ";
    }
    cout << endl;
}

int main() { 
    int t, n;
    
    cin >> t;
    for(int i = 0; i < t; i++){ 
    cin >> n;

    int A[n];

    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }
        Runs(n, A);
    }
}