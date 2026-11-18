#include <iostream>
using namespace std;

int main(){ 
    char c;
    cin >> c;
    int A = c;
    if(A >= 'A' and A <= 'Z'){ 
        A += 32;
    }
    cout << (char)A << endl;
}