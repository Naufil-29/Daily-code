#include <iostream>
using namespace std;

int main() { 
    int A;
    int B;
    int X = 0;
    int Y = 0;

    cin >> A >> B;

    if(A > B){ 
        X = B;
        Y = A;
    }
    else{ 
        X = A;
        Y = B;
    }

    cout << "Min = " << X << endl;
    cout << "Max = " << Y << endl;
}