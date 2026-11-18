#include <iostream>
using namespace std;

int main() { 
    string A, B;
    cin >> A >> B;

    if(A < B){ 
        cout << 'A' << endl;
    }
    else if(A == B){ 
        cout << "Equal" << endl;
    }
    else{ 
        cout << 'B' << endl;
    }
}