const fs = require('fs');
const decode = ({ string, key }) => {
    let alfavit = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    function decodeVizhener() {
        let res = ''
        string = string.toUpperCase().split('')
        key = key.toUpperCase().split('')

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
        key = key.join('')
        return { result: res, key: key }
    }
    return decodeVizhener()    
}

module.exports = decode;