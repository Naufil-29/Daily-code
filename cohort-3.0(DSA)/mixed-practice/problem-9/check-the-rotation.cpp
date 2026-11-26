#include <iostream>
using namespace std;

int main() { 
    int t;
    cin >> t;

    for(int a = 0; a < t; a++){ 
        int n;
        cin >> n;

        int arr[n];
        for(int i = 0; i < n; i++){ 
            cin >> arr[i];
        }

        int smallest = arr[0];
        int loc = 0;
        for(int i = 0; i < n; i++){ 
            if(arr[i] < smallest){ 
                smallest = arr[i];
                loc = i;
            }
        }

        cout << loc << endl;
    }
}