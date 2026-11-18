#include <iostream>
using namespace std;

int main() { 
    string s;
    cin >> s;
    char x;
    cin >> x;
    string result;

    for(int i = 0; i < s.size(); i++){ 
        if(s[i] != x){ 
            result += s[i];
        }
    }

    cout << result << endl;
}