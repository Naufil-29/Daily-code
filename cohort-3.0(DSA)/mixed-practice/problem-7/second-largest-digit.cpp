#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    int A[n];
    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

    int largest = 0;
    int second = 0;

    for(int i = 0; i < n; i++){ 
        if(A[i] > largest){ 
            largest = A[i];
        }
    }

    bool found = false;
    for(int i = 0; i < n; i++){ 
        if(A[i] > second and A[i] < largest){ 
            second = A[i];
            found = true;
        }
    }
    if(found){ 
        cout  << second << endl;
    }
    else{ 
        cout << "-1" << endl;
    }
}