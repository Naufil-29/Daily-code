#include <iostream>
using namespace std;

int main() { 
    int n;
    cin >> n;

    for(int i = 1; i <= n; i++){ 

        for(int s = 1; s <= n - i; s++){ 
            cout << " ";
        }

        for(int j = 1; j <= i; j++){ 
                if(i == 1 || j == 1 || j == i){ 
                    if(j == i){
                        cout << "*";
                    }
                    else{ 
                        cout << "* ";
                    }
                }
                else{ 
                    cout << "  ";
                }
        }
        cout << endl;
    }

    for(int i = n - 1; i >= 1; i--){ 

        for(int s = 1; s <= n - i; s++){ 
            cout << " ";
        }

        for(int j = 1; j <= i; j++){ 
                if(i == 1 || j == 1 || j == i){ 
                    if(j == i){
                        cout << "*";
                    }
                    else{ 
                        cout << "* ";
                    }
                }
                else{ 
                    cout << "  ";
                }
        }
        cout << endl;
    }
}