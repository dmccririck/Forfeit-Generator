
const forfArr1 = ['go outside',
                'lie on the floor',
                'jump up and down', 
                'touch both of your knees'];
const forfArr2 = ['dance',
                'eat a slice of bread',
                'sing a Michael Jackson song',
                'shout \'I am a hungry baby and I want a cookie\''];
const forfArr3 = ['the Queen',
                'Steven Hawking',
                'a cat',
                'a dog'];
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
const forfeit = () => {
    let array = randArr();
    return `Your forfeit is to ${array[0]} and ${array[1]} like ${array[2]}.`
};
console.log(forfeit());
