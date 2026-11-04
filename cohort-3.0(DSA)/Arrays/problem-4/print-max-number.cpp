#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    int A[n];

    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

    int max = A[0];
    int position = 0;
    for(int i = 0; i < n; i++){ 
        if(A[i] > max){ 
            max = A[i];
            position = i;
        }
    }

    cout << max << endl;
    cout << position << endl;
}