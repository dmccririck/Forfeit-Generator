
const forfArr1 = ['go', 'do', 'take', 'jump'];
const forfArr2 = ['cake', 'table', 'chair'];
const forfArr3 = ['a lot', 'not much', 'all of it'];
const randIndex = arr => {
        let len = arr.length;
        return Math.floor(Math.random() * len)
    };
const randArr = () => {
        let arr = [];
        let phrase1 = forfArr1[randIndex(forfArr1)];
        arr.push(phrase1);
        let phrase2 = forfArr2[randIndex(forfArr2)];
        arr.push(phrase2);
        let phrase3 = forfArr3[randIndex(forfArr3)];
        arr.push(phrase3);
        return arr
    };

console.log(randArr());
