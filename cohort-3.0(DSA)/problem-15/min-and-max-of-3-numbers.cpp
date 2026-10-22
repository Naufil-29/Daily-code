#include <iostream>
using namespace std;

int main() { 
    int A;
    int B;
    int C;
    int X = 0;
    int Y = 0;

    cin >> A >> B >> C;

    if(A >= B && A >= C){ 
        Y = A;
    }
    else if(B >= A && B >= C){ 
        Y = B;
    }
    else{ 
        Y = C;
    }

    if(A <= B && A <= C){ 
        X = A;
    }
    else if(B <= A && B <= C){ 
        X = B;
    }
    else{
        X = C;
    }

    cout << "Min = " << X << endl;
    cout << "Max = " << Y << endl;
}