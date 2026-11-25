#include <iostream>
using namespace std;

int main() { 
    string s;
    cin >> s;
    int n = s.size();
    int sum = 0;

    for(int i = 0; i < n; i++){ 
        sum += s[i] - 48;
    }

    cout << sum << endl;
}