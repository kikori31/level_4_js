//login.js
//목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목 클릭 시 
//3. 기존회원 클릭-> 기존회원 내용 보이기/비회원 내용 숨기기
//3. 비회원 클릭-> 기존회원 내용 숨기기/비회원 내용 보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul');


console.log(loginTabTitle,loginTabContent); //변수 테스트
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
loginTabTitle[1].addEventListener('click',()=>{loginTabFunc(1); })
loginTabTitle[0].addEventListener('click',()=>{loginTabFunc(0); })


//반복 함수 별도 생성(함수 안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index){
    //0(숨기기), 1(보이기) == x
    //0,1(모두 숨기기), 1(보이기) == 0
    loginTabContent[0].classList.add('display-hide'); //모두 숨기기
    loginTabContent[1].classList.add('display-hide'); //모두 숨기기
    loginTabContent[index].classList.remove('display-hide'); //클릭대상과 일치하는 대상만 보이기
    loginTabTitle[0].classList.remove('active');
    loginTabTitle[1].classList.remove('active');
    return loginTabTitle[index].classList.add('active');
    // return;
}

//목표2) 기존회원 - 아이디를 입력안하고 기존회원로그인 버튼 클릭 시 '아이디 입력하세요' 경고창 출력
//기존회원 - 아이디, 비밀번호,로그인버튼 변수
const userId = document.querySelector('#user-id'); 
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');
const pwVisibleBtn = document.querySelector('#non-member-pw-visible');

//비회원 - 주문자명, 주문번호, 비회원 주문비밀번호, 주문조회 버튼 변수
const non_userId = document.querySelector('#non-user-id');
const non_userOrder = document.querySelector('#non-user-order');
const non_userPw = document.querySelector('#non-user-pw');
const non_memberLoginBtn = document.querySelector('#non-member-login');
const non_pwVisibleBtn = document.querySelector('#non-member-pw-visible2');


// memberLoginBtn.addEventListener('click',()=>{
//     loginErrFunc(userId, '아이디')
//     loginErrFunc(userPw, '비밀번호')
// })

// non_memberLoginBtn.addEventListener('click',()=>{
//     loginErrFunc(non_userId, '주문자명')
//     loginErrFunc(non_userOrder, '주문번호')
//     loginErrFunc(non_userPw, '비회원 주문 비밀번호')
// })

function loginErrFunc(dom, str){
    if(dom.value == ''){alert(`${str}를(을) 입력하세요`);}
}
//기존회원) 논리연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
memberLoginBtn.addEventListener('click',()=>{
    //목표1) 아이디, 비밀번호 중 하나로도 안적으면 'ooo을 입력하세요'
    // if(userId.value == '' && userPw.value == ''){}
    if(userId.value == '' || userPw.value == ''){
        if(userId.value == '' && userPw.value == ''){
            alert('아이디와 비밀번호를 입력하세요');
        }else if(userId.value == ''){ //하나의 조건세트에서 두번째 조건식이 필요할 때(두개 이상 작성가능)
            alert('아이디를 입력하세요');
        }else{ //조건세트 안에 거짓을 처리할때(마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요');
        }
    }
    //목표2) 아이디, 비밀번호를 모두 적으면 'ooo님 환영합니다'
    // if(userId.value != '' && userPw.value != ''){
    //     alert(`${userId.value}님 환영합니다`);
    // }
    //삼항조건 ? 참 : 거짓; //조건식1로 처리하는 if-else를 간편하게 쓰고 싶을때
    userId.value != '' && userPw.value != '' ?
        alert(`${userId.value}님 환영합니다`) : null;
})

//비회원 이벤트- 함수

non_memberLoginBtn.addEventListener('click',()=>{
    //목표1) 주문자명, 주문번호, 비회원 주문비번을 모두 썼을 때 "ooo님 주문은 배송중입니다."
    // if(non_userId.value !='' && non_userOrder.value !='' && non_userPw.value != ''){
    //     alert(`${non_userId.value}님 주문은 배송중입니다.`);
    // }
    non_userId.value !='' && non_userOrder.value !='' && non_userPw.value != '' ?
        alert(`${non_userId.value}님 주문은 배송중입니다.`) : null; //null(거짓이 없을때)
    
        // 목표2) 주문자명,주문번호, 비회원 주문비밀번호 중 하나라도 안썼을 때 상황
    if(non_userId.value =='' || non_userOrder.value =='' || non_userPw.value == ''){
        if(non_userId.value =='' && non_userOrder.value =='' && non_userPw.value == ''){
            alert('주문자명,주문번호,비회원 주문 비밀번호를 입력하세요.');
        }else if(non_userId.value ==''){
            alert('주문자명을 입력하세요');
        }else if(non_userOrder.value ==''){
            alert('주문번호를 입력하세요')
        }else{
            alert('비회원 주문 비밀번호를 입력하세요')
        }
    }
})

//기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; //비번 숨김상태(●●●●) 초기값
pwVisibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ?
        userPw.type = 'text' 
        :  userPw.type = 'password';
    pwVisibleStatus = !pwVisibleStatus; //not연산자(!)를 사용
})

//비회원 주문 비밀번호
let non_pwVisibleStatus = 0; //초기 숨김상태
non_pwVisibleBtn.addEventListener('click',()=>{
    non_pwVisibleStatus == 0 ?
        non_userPw.type = 'text'
        :   non_userPw.type = 'password';
    non_pwVisibleStatus = !non_pwVisibleStatus;
})