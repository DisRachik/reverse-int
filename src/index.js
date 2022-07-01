module.exports = function reverse (n) {
    const rez = ("" + n).split("").reverse().join("");
    return rez.replace("-",""); 
}
