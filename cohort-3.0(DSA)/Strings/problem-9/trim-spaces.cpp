#include <iostream>
using namespace std;

int main () { 
    string s;
    getline(cin, s);
    string result;
    for(int i = 0; i < s.size(); i++){ 
        if(s[i] != ' '){ 
            result += s[i];
        }
    }
    cout << result << endl;
}