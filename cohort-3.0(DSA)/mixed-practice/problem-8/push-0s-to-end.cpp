#include <iostream>
using namespace std;

int main () { 
    int t;
    cin >> t;

  for(int a = 0; a < t; a++){ 
    int n;
    cin >> n;

    int Arr[n];
    for(int i = 0; i < n; i++){ 
        cin >> Arr[i];
    }

    int Arr2[n];
    int countZero = 0;
    int j = 0;

    for(int i = 0; i < n; i++){ 
        if(Arr[i] != 0){ 
            Arr2[j] = Arr[i];
            j++;
        }
        else{ 
            countZero++;
        }
    }

    for(int i = 0; i < countZero; i++){ 
        Arr2[j] = 0;
        j++;
    }

    
    for(int z = 0; z < n; z++){ 
        cout << Arr2[z] << " ";
    }
    cout << endl;
 }
}