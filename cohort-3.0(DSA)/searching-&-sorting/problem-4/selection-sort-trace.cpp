#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    int arr[n];
    for(int i = 0; i < n; i++){ 
        cin >> arr[i];
    }

    for(int x = 0; x < n - 1; x++){ 
        int mn = arr[x];
        int loc = x;
        
        for(int y = x + 1; y < n; y++){ 
            if(arr[y] < mn){ 
                mn = arr[y];
                loc = y;
            }
        }
        swap(arr[x], arr[loc]);
        cout << "Pass " << x + 1 << ": ";
        for(int k = 0; k < n; k++){ 
            cout << arr[k] << " ";
        }
        cout << ", min_selected = " << mn << endl;
    }
}