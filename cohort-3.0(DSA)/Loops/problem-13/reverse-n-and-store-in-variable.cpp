#include <iostream>
using namespace std;

int main() {
    long long n;
    long long reverse = 0;
    cin >> n;

    while(n != 0){
        long long digit = n % 10;
        reverse = reverse * 10 + digit;
        n = n / 10;
    }

    cout << reverse << endl;
}
