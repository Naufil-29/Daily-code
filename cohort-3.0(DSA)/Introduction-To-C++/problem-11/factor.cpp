#include <iostream>
using namespace std;

int main() { 
    int N;
    int F;

    cin >> N >> F;

    if(N % F == 0){ 
        cout << "Yes"; 
    }
    else{
        cout << "No";
    }
}