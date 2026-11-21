#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    int arr[n];
    for(int i = 0; i < n; i++){ 
        cin >> arr[i];
    }

    int x;
    cin >> x;

    bool flag = false;

    for(int j = 0; j < n; j++){ 
        if(arr[j] == x){ 
            flag = true;
            break;
        }
    }

    if(flag){ 
        cout << "YES" << endl;
    }
    else{ 
        cout << "NO" << endl;
    }



}