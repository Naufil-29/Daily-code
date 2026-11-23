#include <iostream>
using namespace std;

int main () {
    int n;
    cin >> n;

    int arr[n];
    for(int z = 0; z < n; z++){ 
        cin >> arr[z];
    }

    for(int i = 1; i < n; i++){ 
        // save current element i.
        int temp = arr[i];
        // give j value of index -1 from current element i.
        int j = i - 1;

        int shifts = 0;

        // run loop while j greater than 0 and arr[j]th element is greater then temp.
        while(j >= 0 and arr[j] > temp){
            // cond. meet move the element to right at index +1 position 
            arr[j + 1] = arr[j];
            // move j towards left position.
            j--;
            shifts++ ;
        }
        // after loop ends put temp's value at right most position.
        arr[j + 1] = temp;
        cout << "Pass " << i << ": ";
        for(int k = 0; k < n; k++){ 
            cout << arr[k] << " ";
        }
        cout << ", ";
        for(int k = 0; k <= i; k++){ 
            cout << arr[k] << " ";
        }
        cout << "| ";
        for(int k = i + 1; k < n; k++){ 
            cout << arr[k] << " ";
        }
        cout << ", shifts = " << shifts << endl;
    }
    
}