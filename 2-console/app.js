// log level
// 배포했을 때 서버 심각성을 쉽게 알 수 있음
console.log('log') // 개발
console.info('info') // 중요한 정보
console.warn('warn') // 경보단계
console.error('error') // 에러, 사용자에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same')
console.assert(2 === 2, 'same')

// print object
const student = { name: 'dream', age: 20, company: { name: 'AC'} }
console.log(student)
console.table(student)
console.dir(student, {showHidden: true, colors: false, depth: 0})

// measuring time
console.time('for loop')
let i = 0
while(i < 10) {
    i++
}
console.timeEnd('for loop')