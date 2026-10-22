#include <iostream>
using namespace std;

int main() { 
    int M;
    int N;

    cin >> N >> M;

    if(M % N == 0){ 
        cout << "Yes"; 
    }
    else{
        cout << "No";
    }
}