#include <iostream>
using namespace std;

// global arrays: too big to be safe inside main
int Arr[1000000];
int Arr2[1000000];

int main() {
    int t;
    cin >> t;

    for(int a = 0; a < t; a++){
        int n;
        cin >> n;

        for(int i = 0; i < n; i++){
            cin >> Arr[i];
        }

        int d;
        cin >> d;

        int j = 0;   // next free position in Arr2

        // step 1: copy the elements from position d to the end
        for(int i = d; i < n; i++){
            Arr2[j] = Arr[i];
            j++;
        }

        // step 2: copy the first d elements after them
        for(int i = 0; i < d; i++){
            Arr2[j] = Arr[i];
            j++;
        }

        for(int i = 0; i < n; i++){
            cout << Arr2[i] << " ";
        }
        cout << endl;
    }
}