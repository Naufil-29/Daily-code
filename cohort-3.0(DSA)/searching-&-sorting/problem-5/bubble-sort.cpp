#include <iostream>
using namespace std;


int main()
{ 
    int n;
    cin >> n;

    int arr[n];
    for(int i = 0; i < n; i++){ 
        cin >> arr[i];
    }


    for(int x = 0; x < n - 1; x++){ 
        bool swapped = false;
        int swaps = 0;

        for(int y = 0; y < n - 1; y++){ 
            if(arr[y] > arr[y + 1])
            { 
                swapped = true;
                swaps += 1;
                swap(arr[y], arr[y + 1]);
            }
        }

        cout << "Pass " << x + 1 << ": ";
        for(int z = 0; z < n; z++){ 
            cout << arr[z] << " ";
        } 
        cout << " , swaps = " << swaps << endl; 
    
        if(!swapped)
        { 
            break;
        }
    
    }
}