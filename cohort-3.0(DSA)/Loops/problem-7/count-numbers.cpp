#include <iostream>
using namespace std;

int main() { 
    int n;
    
    cin >> n;
    int positive = 0;
    int negative = 0;
    int even = 0;
    int odd = 0;


    for(int i = 1; i <= n; i++){
        int x;
        cin >> x;

        if(x > 0 && x != 0){ 
            positive++;
        }
        else if(x < 0 && x != 0){ 
            negative++;
        }

        if(x % 2 == 0 || x == 0){ 
            even++;
        }
        else{ 
            odd++ ;
        }
    }

    cout << positive << endl;
    cout << negative << endl;
    cout << even << endl;
    cout << odd << endl;


}