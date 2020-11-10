const fs = require('fs');
const decode = ({ file, secret, newFile }) => {
    let fileName = function () {
        if (newFile == undefined) {
            file = file.split('.')
            return file[0]
        } else {
            return newFile
        }
    }
    // >>>
    console.log('ENCODE', file, secret)
    let alfavit = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        encodeVizhener(data)
    });

    function encodeVizhener(string) {
        let res = ''
        string = string.toUpperCase().split('')
        let key = secret.toUpperCase().split('')
        // str[0%5]

        for (let i = 0; i < string.length; i++) {
            let strInd = 0
            alfavit.forEach((item, index) => {
                if (item == string[i]) strInd = index
            })
            let keyInd = 0
            alfavit.forEach((item, index) => {
                if (item == key[i % key.length]) keyInd = index
            })
            res += alfavit[(strInd - keyInd) < 0 ? 26 + (strInd - keyInd) : strInd - keyInd]
        }
        console.log(string, key);
        console.log(res);

        fs.writeFileSync(fileName() + '__decoded.txt', res);
    }
    // encodeVizhener(inputWord, keyWord)
    // <<<<

}

module.exports = decode;