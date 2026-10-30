#include <iostream>
using namespace std;

    void primeNumbers(int n) { 
        int factors = 0;
        for(int i = 1; i <= n; i++){ 
            if(n % i == 0){ 
                factors++;
            }
        }

        if(factors == 2 && n != 1){
            cout << "Prime";
        }
        else{ 
            cout << "Not Prime";
        }
    }

int main() { 
    int n;
    cin >> n;

    primeNumbers(n);

}