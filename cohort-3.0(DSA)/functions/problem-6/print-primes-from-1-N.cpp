#include <iostream>
using namespace std;

    bool primeNumbers(int n) { 
        int factors = 0;
        bool prime;
        for(int i = 1; i <= n; i++){ 
            if(n % i == 0){ 
                factors++;
            }
        }

        if(factors == 2 && n != 1){
            prime = true;
        }
        else{ 
            prime =  false;
        }
        return prime;
    }

int main() { 
    int n;
    cin >> n;

    for(int j = 1; j <= n; j++){ 
        if(primeNumbers(j)){
            cout << j << " ";
        }
    }
    

}