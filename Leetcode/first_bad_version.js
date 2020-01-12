/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n, mid = 0;
        
        // Binary search, halving the list per loop
        while (left < right) {
            mid = Math.floor(left + (right-left) / 2) // l + (r-l) will add l+r and divide without integer overflow
            if (isBadVersion(mid)) right = mid // Max: least elem that satisfies badVersion
            else left = mid+1  //min: max elem that doesnt satisfy it
        }
        return left // return last found elem when 1 elem is remaining (left >= right)
        
    };
};