#include <iostream>
using namespace std;

int main() { 
    string S;
    cin >> S;

    bool hasUpper = false;
    bool hasLower = false;
    bool hasDigit = false;
    bool hasSpecial = false;
    
    for(int i = 0; i < S.size(); i++){ 
        if(S[i] >= 'A' and S[i] <= 'Z'){ 
            hasUpper = true;
        }
        else if(S[i] >= 'a' and S[i] <= 'z'){
            hasLower = true;
        }
        else if(S[i] >= '0' and S[i] <= '9'){ 
            hasDigit = true;
        }
        else{ 
            hasSpecial = true;
        }
    }

    if(S.length() == 10 and hasUpper and hasLower and hasDigit and hasSpecial){ 
        cout << "Strong" << endl;
    }
    else{ 
        cout << "Weak" << endl;
    }
}