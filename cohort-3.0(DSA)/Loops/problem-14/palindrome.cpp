#include <iostream>
using namespace std;

int main() { 
    long long n;
    cin >> n;
    long long m = n;
    long long reverse = 0;

    while(n != 0){ 
        long long digit = n % 10;
        reverse = reverse * 10 + digit;
        n = n / 10;
    }

    if(reverse == m){ 
        cout << "YES" << endl;
    }
    else{ 
        cout << "NO" << endl;
    }
}