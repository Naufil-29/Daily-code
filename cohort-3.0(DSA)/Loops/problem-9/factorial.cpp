#include <iostream>
using namespace std;

int main() { 
   long long n;
   long long i = 1;
   long long sum = 1;
   cin >> n;

   while(i <= n){ 
    sum = sum * i;
    i++;
}
    cout << sum << endl;
}