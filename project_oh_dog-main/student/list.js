// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 마우스이벤트(오버 또는 클릭)시 큰 이미지가 big1로 변경
//small2 마우스이벤트(오버 또는 클릭)시 큰 이미지가 big2로 변경
//1.---------------------------변수
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelector('.big_thum img');
console.log(smallThum,bigThum);

//2.---------------------------함수
// smallThum[0].addEventListener('mouseover',()=>{
//     bigThum.src = smallThum[0].src;
// })
// smallThum[1].addEventListener('mouseover',()=>{
//     bigThum.src = smallThum[1].src;
// })

/* ==================================== 둘중에 하나 선택해서 사용 가능  */
function thumFunc(target1,target2) {
    return target1.src = target2.src;
}
smallThum[0].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[0])
})
smallThum[1].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[1])
})

//3.---------------------------이벤트