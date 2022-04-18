const hello = () => {
    console.log(this)
}
function bye() {
    console.log(this)
    console.log(this === global)
}
hello()
bye()

class A {
    constructor(num) {
        this.num = num
    }
    memberFunction() {
        console.log('-----class------')
        console.log(this)
        console.log(this === global)
    }
}

const a = new A(1)
a.memberFunction()

// 브라우저에서 밖에서 쓰이는(함수) this는 global을 가르킴
// 노드에서 this는 module.exports를 가르킴