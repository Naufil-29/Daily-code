#include <iostream>
using namespace std;

int main () { 
    string S;
    cin >> S;

    for(int i = 0; i < S.size(); i++){ 
        if(S[i] >= 'A' and S[i] <= 'Z'){ 
            S[i] += 32; 
        }
        else{ 
            S[i] -= 32;
        }
    }

    cout << S << endl;
}