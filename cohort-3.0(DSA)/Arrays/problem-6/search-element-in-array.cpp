#include <iostream>
using namespace std;

bool search(int n, int A[], int x){ 
    bool found = false;
    for(int i = 0; i < n; i++){ 
        if(A[i] == x){ 
            found = true;
        }
    }
    return found;
}

int main() { 
    int n, x;
    cin >> n >> x;

    int A[n];
    for(int i = 0; i < n; i++){ 
        cin >> A[i];
    }

   bool ans = search(n, A, x);

   if(ans){ 
    cout << "YES";
   }
   else{ 
    cout << "NO";
   }

}