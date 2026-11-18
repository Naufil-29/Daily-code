#include <iostream>
using namespace std;

int main ()  { 
    char c;
    cin >> c;

    if((int)c >= 'a' and (int)c <= 'z'){ 
        cout << "Lowercase" << endl;
    }
    else if((int)c >= 'A' and (int)c <= 'Z'){ 
        cout << "Uppercase" << endl;
    }
    else if((int)c >= '0' and (int)c <= '9'){ 
        cout << "Digit" << endl;
    } 
    else{ 
        cout << "Special" << endl;
    }
}