#include <iostream>
using namespace std;

int main() { 
    int M;
    int N;

    cin >> M >> N;

    int first = M % 10;
    int second = N % 10;

    int total = first += second;
    cout << total; 
}