function read(num) {
    let result = "";
    let counter = 1;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[i+1]) {
            counter++;
        } else {
            result += counter + num[i];
            counter = 1;
        }
    }
    return result;
}

module.exports = read;
