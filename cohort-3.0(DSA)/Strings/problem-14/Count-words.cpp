#include <iostream>
using namespace std;

int main () { 
    string s;
    getline(cin, s);
    int space = 0;
    
    for(int i = 0; i < s.size(); i++){ 
        if(s[i] == ' '){ 
            space++;
        }
    }
    cout << space+1 << endl;
}