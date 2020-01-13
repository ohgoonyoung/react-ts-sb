##  react ui template
- create-react-app-typescript 기반
- github url : https://github.com/wmonk/create-react-app-typescript
- 참고 url : https://create-react-app.dev/docs/adding-typescript/

## 개발 환경
- typescript
- react
- jest
- storybook

## webpack 설정
- react-app-rewired 라이브러리 사용

## type / interface 각 상황에 따라 권장 사용 이유
- type - 리터럴 타입에서만 사용하기를 권장
- interface - Object 형태의 타입을 사용하기를 권장

## type / interface / enum 코드 예제

```
enum colorProps {
  BASIC = "BASIC",
  PREMIUM = "PREMIUM",
  ADMIN = "ADMIN",
}
```
```
type colorProps = 'blue' | 'red' | 'yellow';
```
```
interface userProps {
  id : number;
  name : string;
}
```

## typescript 타입
```
number / string / boolean / null / undefined / any / object
```

### string / number 리터럴 타입
```
let str: '남자' | '여자';
str = '남자';
str = '무관'; // 에러 발생

let nb: 10 | 20 | 30;
nb = 10;
nb = 15; // 에러 발생
```