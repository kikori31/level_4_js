// // 웹디자인개발기능사
// // 자바스크립트 ver
// const popup = document.querySelector('#popup');
// popup.style.display ='none';

// const nav = document.querySelectorAll('nav > ul > li');
// const sub = document.querySelectorAll('nav > ul > li > ul');
// const subLi = document.querySelectorAll('nav > ul > li > ul li');


// for(let s of sub){ //서브 모두 숨기기(초기값)
//     s.style.height = '0';
//     s.style.overflow = 'hidden';
//     s.style.transition = 'height 0.4s';
// }
// for(let sl of subLi){ //서브 li 하이라이트 효과
//     sl.addEventListener('mouseover',()=>{sl.style.backgroundColor = 'pink';})
//     sl.addEventListener('mouseout',()=>{sl.style.background = 'none';})
// }
// for(let n of nav){//메인메뉴
//     n.addEventListener('mouseover',()=>{
//         n.style.backgroundColor = 'yellow';
//         console.log(n.children[1]); //서브 ul 출력 확인 
//         n.children[1].style.height ='200px';
//     })
//     n.addEventListener('mouseout',()=>{
//         n.style.background = 'none'; //n.style.backgroundColor = 'none'값이 적용이 안된다.(컬러이기 때문에)
//         n.children[1].style.height ='0';
//     })
// }

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// const noticeFirst = document.querySelector('.notice li:nth-child(1)');
// const popupClose = popup.querySelector('.close');
// noticeFirst.addEventListener('click',()=>{
//     popup.style.display ='block';
//     popup.style.zIndex = '999'; //css파일에 입력ok
// })
// popupClose.addEventListener('click',()=>{
//     popup.style.display ='none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tabTitle = document.querySelectorAll('.notice_gallery .title a')
// const tabContent = document.querySelectorAll('.notice_gallery .contents > *')

// tabTitle.forEach((t,i)=>{
//     t.addEventListener('click',()=>{
//         for(let reset of tabContent)reset.style.display = 'none';
//         tabContent[i].style.display='flex';
//         for(let reset of tabTitle)reset.classList.remove('active');
//         t.classList.add('active');
//     })
// })

// //히어로배너 상<->하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide = document.querySelectorAll('.hero_slide'); //모든 슬라이드 개수세기 용
// // heroWrap.style.transform = 'translateY(-600px)'; //test

// let count = 0; //초기값 0으로 시작해서 heroslide의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.6s'; //슬라이드가 바뀔때마다 움직이는 애니메이션을 미리 준다.

// const slideTimer = setInterval(()=>{
//     count++; //3초마다 1증가
//     //if(count > 2){count = 0}
//     if(count > heroSlide.length-1){count=0}
//     // console.log(count*300);
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// },3000)
// /* 0 * 300 = 0 */
// /* 1 * 300 = 300 */
// /* 2 * 300 = 600 */
// /* 0 * 300 = 0 */
// /* 위 반복 */



// // =========================================== 제이쿼리 ver
console.log(typeof $); //function 제이쿼리 로드 확인(필수x)

// 자바스크립트에센 HTML 작업 시 변수 저장 작업 필수!
// 제이쿼리는 변수 구조가 워낙 짧아 2~3번 이상 자주 반복하는 변수만 저장하고 그 외는 일회성으로 사용가능

$('#popup').hide(); //제이쿼리에서 hide 함수를 내장하고 있다.

const $sub = $('nav > ul > li > ul'); //제이쿼리 변수인걸 알 수있게 $sub(달러표시)
const $nav = $('nav > ul > li');
// sub.hide(); //제이쿼리는 대상이 2개 이상이어도 for 없이 한번에 다수 처리가 가능하다.

//자바스크립트에서 css 사용법: 객체.style.속성 = '값'
//제이쿼리 css 사용법 : 객체.css('속성','값');
// $sub.css('height','0') //css()함수 2개 이상 연결 = 체이닝
//     .css('overflow','hidden')
//     .css('transition','height 0.4s');

$sub.slideUp();

//제이쿼리 사용 시 화살표 함수 사용 권장안함. 일반함수 위주로 사용
$nav.on('mouseover',function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background-color','aqua');
    $(this).children('ul').stop().slideDown(); //.stop() : 애니메이션이 중첩되기때문에 stop을 걸어줘야 한다.
})
$nav.on('mouseout',function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background','none');
    $(this).children('ul').stop().slideUp();
})

$('.notice li:nth-child(1)').on('click',function(){
    $('#popup').show();
})
$('#popup .close').on('click',function(){
    $('#popup').hide();
})

//탭 제목 활성화
$('.notice_gallery .title a').on('click',function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); //현재 클릭한 대상 인덱스 변수저장

    $('.notice_gallery .contents > *').hide(); //모든 내용 숨기기
    // $('.notice_gallery .contents > *').eq(i).show();
    $('.notice_gallery .contents > *').eq($i).css('display', 'flex');
    //eq => 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

//제이쿼리v 슬라이드
let count = 0; //초기값 0으로 시작해서 heroslide의 개수만큼 증가

const slideTimer = setInterval(function(){
    count++;
    if(count > 2){count = 0}
    // $('.hero_wrapper').css('transform',`-${count*300}px`);
    $('.hero_wrapper').css('transform', `translateY(-${count*300}px)`); //직접 css에서 transition 값을 줘야한다.
    //기존 js css에서 주로 다루는 transition + transform 애니메이션 묶음 전용 제이쿼리 함수
    // $('.hero_wrapper').animate({
    //     top:'-'+(count*300)+'px',
    // },400)
},3000)