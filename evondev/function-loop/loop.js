/**
VÒNG LẶP - LOOP

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/

//1 vòng lặp for
// in số từ 1 đến 1000
for (let i = 1; i <= 1000; i++) {
    // console.log(i);
}


function getRandNumbers(min,max,length){
    var arr = []
    for (var i = 0; i < length; ++i) {
        arr.push(Math.random() * (max - min) + min );
    }
    return arr;
}
console.log(getRandNumbers(1,2,3));