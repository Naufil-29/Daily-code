#include <iostream>
using namespace std;

int counter(long long n){ 
    int count = 0; 
    do{ 
        if(n % 10 == 0){ 
         count++;
        }
        n = n / 10;
    }while(n != 0);
    return count;
}

int main(){ 
    long long n; 
    cin >> n;

    cout << counter(n);
}