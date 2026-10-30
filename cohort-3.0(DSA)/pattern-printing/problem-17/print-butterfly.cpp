#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    for(int i = 1; i <= n; i++){
        
        // loop to print first traingle of stars.
        for(int j = 1; j <= i; j++){ 
            cout << "*";
        }

        
        // loop to print spaces.
        for(int s = 1; s <= 2*(n - i); s++){ 
            cout << " ";
        }

        // loop to print last triangle of stars.
        for(int j = 1; j <= i; j++){ 
            cout << "*";
        }
        
        cout << endl;
    }
    for(int i = n - 1; i >= 1; i--){
        
        // loop to print first traingle of stars.
        for(int j = 1; j <= i; j++){ 
            cout << "*";
        }

        
        // loop to print spaces.
        for(int s = 1; s <= 2*(n - i); s++){ 
            cout << " ";
        }

        // loop to print last triangle of stars.
        for(int j = 1; j <= i; j++){ 
            cout << "*";
        }
        
        cout << endl;
    }
    
}