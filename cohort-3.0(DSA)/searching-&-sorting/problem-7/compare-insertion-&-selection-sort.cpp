#include <iostream>
using namespace std;



int main() { 
    int t;
    cin >> t;

  for(int tc = 0; tc < t; tc++){ 
      
    int n;
    cin >> n;

    int a[n];
    int b[n];


    for(int i = 0; i < n; i++){ 
        cin >> a[i];
        b[i] = a[i];
    }


    // selection-sort part
    int swaps = 0;
    for(int x = 0; x < n - 1; x++){ 
        int loc = x;
        
        for(int y = x + 1; y < n; y++){ 
            if(a[y] < a[loc]){ 
                loc = y;
            }
        }
        if(loc != x){
         swap(a[x], a[loc]);
         swaps++;
        }
    }

    // insertion-sort-part
    int shifts = 0;
    for(int i = 1; i < n; i++){ 
        int temp = b[i];
        int j = i - 1;

        while(j >= 0 and b[j] > temp){
            b[j + 1] = b[j];
            j--;
            shifts++ ;
        }

        b[j + 1] = temp;
    }
    
            if(shifts < swaps){
            cout << "Insertion Sort" << endl;
        }
        else if(swaps < shifts){
            cout << "Selection Sort" << endl;
        }
        else{
            cout << "Tie" << endl;
        }
  }
}