#include <iostream>
using namespace std;

int counter(int n, int x, int A[]){ 
    int count = 0;
    for(int i = 0; i < n; i++){ 
        if(A[i] == x){ 
            count++;
        }
    }

    return count;
}

int main() { 
    int n, x;
    cin >> n >> x;

    int A[n];

    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

    int ans = counter(n, x, A);
    cout << ans << endl;
}