#include <iostream>
using namespace std;

int main () {
    string S;
    cin >> S;
    string reverse;

    for(int i = S.size() - 1; i >= 0; i--){ 
        reverse += S[i];
    }
    
    cout << reverse << endl;
}