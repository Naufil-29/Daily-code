#include <iostream>
using namespace std;

int main() { 
    long long n;
    cin >> n;
    long long sum = 0;
    long long cropped;

    while(n != 0){ 
        cropped =  n % 10;
        sum += cropped;
        n = n / 10;

    }
    cout << sum << endl;
}