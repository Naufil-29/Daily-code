#include <iostream>
using namespace std;

int main() { 
    int x;
    int n;
    int i = 1;
    long long sum = 1;

    cin >> x >> n;

    while(i <= n){ 
        sum = sum * x;
        i++;
    }

    cout << sum << endl;
}