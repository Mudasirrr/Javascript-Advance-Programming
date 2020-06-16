// Memoization: Specific form of caching which involves the return of a fn based on its parameters and if its parameter doesnt change then it is memoized
// Caching (idea similar to storing in a backpack for reuse in order to save memory use and optimize)
function addTo80(n) {
    console.log('long time')
    return n + 80;
}

function memoizedAddTo80() {
    let cache = {};
// closure in order to access 'cache' inside memoizedAddTo80 fn
    return function (n){
        if (n in cache) {
            return cache[n];
        } else {
// runs this if fn doesn't call same arg of 'n'
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80()

console.log('1', memoized(5))
console.log('2', memoized(5))


