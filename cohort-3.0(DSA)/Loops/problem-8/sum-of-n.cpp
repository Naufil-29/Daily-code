#include <iostream>
using namespace std;

int main () { 
    int n;
    int i = 1;
     long long sum = 0;
    cin >> n;

    while(i <= n){ 
        sum = sum += i;
        i++;
    }

    cout << sum;
}