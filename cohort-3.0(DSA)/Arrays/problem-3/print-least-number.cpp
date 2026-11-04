#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    int A[n];
    
    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

    int min = A[0];
    int position = 1;
    for(int i = 0; i < n; i++){ 
        if(A[i] < min){ 
            min = A[i];
            position = i + 1;
        }
    }

    cout << min << " " << position << endl;
}