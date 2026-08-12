//index.js
//1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경변수
//--------------------------연습(웹은행 150만원 입금)
let bankPrice = 1500000;
const result2p = document.querySelector('.result2');
let bankReplace = bankPrice.toLocaleString('fi-fi'); //fi-fi 핀란드 기준(국가 기호에 따라 숫자 간격이 달라진다)

//출력 테스트 콘솔
console.log(itemPrice,titleBig,result1p,replaceData);
console.log(bankPrice,result2p);

//실행 결과
result1p.textContent = replaceData+'원'; // +(연결연산자)'원'은 변수로 만들지 않고 출력할때만 붙여준다.
result2p.textContent = bankReplace+'원';

//-----------------------------------
//2. 배열
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li'); //querySelectorAll: 두개 이상의 값을 줄때 사용
const studyDt = document.querySelectorAll('.study dt');
const studyDd = document.querySelectorAll('.study dd');

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));
console.log(studyDt,studyDd);

list1Li[0].textContent = money[0]+'원';
list1Li[1].textContent = money[1]+'원';
list1Li[2].textContent = money[2]+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0];

studyDt[0].textContent = itemName[0];
studyDd[0].textContent = itemPriceOriginal[0];
studyDt[0].textContent = itemName[1];
studyDd[0].textContent = itemPriceOriginal[1];

//------------------------------ 배열 정리
let foodTray = ['계란','스테이크','샐러드','김치','단무지','쌀밥','콩나물국'];

console.log(foodTray); //전체 테스트
console.log(foodTray[0]); //계란
console.log(foodTray[6]); //콩나물
console.log(foodTray[3]); //김치

//스테이크 -> 연어로 변경 
foodTray[1] = '연어'; //스테이크 제거 후 연어 새로 대입됨
console.log(foodTray[1]); //위 변경 '연어' 출력

//--------------------------------------
//3. 객체
const movie = {
    name:'스파이더맨', //속성:값, 구조로 작성
    price:12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price);
//---------------------------------객체+cgv DB 연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img'); //cgv가 부모 역할
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster,cgvTitle,cgvAge,cgvRate);
cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent= movieDb[0].genre[2];

//-------------------------객체변수연습
const dessertTray = {
    top:['파랑마카롱','분홍마카롱','초록마카롱','노랑마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottom:['방울토마토','청포도','오렌지'],
}
console.log(dessertTray);
console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);

dessertTray.bottom[2] = '망고';
console.log(dessertTray.bottom[2]);

//----------------------------------------증감연산자
let num = 1;

console.log(num); //1(변수가 처음 대입된 값 테스트)

num++; //1증가
console.log(num); //2(위 연산 후 실행 테스트)

num--; //1감소
console.log(num) //1
//----------------------------------------증감연산자, 2개의 변수 활용
let number1 = 10;
let number2;

console.log(number1,number2); //초기값 테스트

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면
//기존 변수값(number1)을 대입(=)을 만나 number2로 먼저 보내고
//++로 number1을 나중에 증가시킨다(후처리)
console.log(number1,number2);