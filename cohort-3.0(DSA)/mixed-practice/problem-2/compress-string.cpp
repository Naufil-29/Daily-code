#include <iostream>
using namespace std;

int main() { 
    string s;
    cin >> s;
    int n = s.size();

    int i = 0;

    while(i < n){ 
        int j = i;
        int count = 0;

        while(j < n and s[i] == s[j]){ 
            count++;
            j++;
        }
        cout << s[i];

        if(count > 1){ 
            cout << count;
        }

        i = j;
    }
}