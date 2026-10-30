#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i + 1; s++) {   // left stars
            cout << "*";
        }
        for (int s = 1; s <= 2 * i - 1; s++) {   // middle spaces
            cout << " ";
        }
        for (int s = 1; s <= n - i + 1; s++) {   // right stars
            cout << "*";
        }
        cout << endl;
    }

    // lower half (mirror of the rows above the middle)
    for (int i = n - 1; i >= 1; i--) {
        for (int s = 1; s <= n - i + 1; s++) {
            cout << "*";
        }
        for (int s = 1; s <= 2 * i - 1; s++) {
            cout << " ";
        }
        for (int s = 1; s <= n - i + 1; s++) {
            cout << "*";
        }
        cout << endl;
    }
}