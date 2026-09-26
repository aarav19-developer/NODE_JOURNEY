// function add(a,s) {
//     return a+s;
// }


// function sub(a,s) {
//     return a-s;
// }

// module.exports = {
//     add, sub
// }                // This is default exports or simple exports.
                    // We can use this only one time as this override the value.

exports.add = (a,s)=>a+s;
exports.sub = (a,s)=>a-s;  // This method can be used multiple time.