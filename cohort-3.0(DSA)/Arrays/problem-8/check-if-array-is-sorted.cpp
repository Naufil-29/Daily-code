#include <iostream>
using namespace std;

bool isSorted(int n, int A[]){ 
    bool sorted = true;
    for(int i = 1; i < n; i++){ 
        if(A[i] < A[i - 1]){ 
            sorted = false;
        }
    
    }
    return sorted;
}

int main() {
    int n;
    cin >> n;

    int A[n];
    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

    bool ans = isSorted(n, A);

    if(ans){ 
        cout << "YES";
    }
    else{ 
        cout << "NO";
    }
}