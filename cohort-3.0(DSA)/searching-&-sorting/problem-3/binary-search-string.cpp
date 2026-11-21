#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    string arr[n];
    for(int i = 0; i < n; i++){ 
        cin >> arr[i];
    }

    string x;
    cin >> x;

    int l = 0;
    int r = n - 1;
    bool flag = false; 
    while(l <= r){ 
        int mid = (l + r) / 2;
        if(arr[mid] == x){ 
            flag = true;
            break;
        }
        else if(arr[mid] > x){ 
            r = mid - 1;
        }
        else{ 
            l = mid + 1;
        }
    }

    if(flag){ 
        cout << "YES" << endl;
    }
    else{ 
        cout << "NO" << endl;
    }
} 