#include <iostream>
using namespace std;

int main() { 
    int t;
    cin >> t;

   for(int i = 0; i < t; i++){
    int n;
    cin >> n;
    int A[n + 1];

    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    };

    for(int j = 0; j + 1 < n; j += 2){ 
        int temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
    }

    for(int i = 0; i < n; i++){ 
        cout << A[i] << " ";
    }
    cout << endl;
   }
}