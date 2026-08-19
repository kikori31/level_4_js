//dom2.js
const m_menu = document.querySelector('.m_menu nav');
const d_menu = document.querySelector('.d_menu');

console.log(m_menu, d_menu); //변수확인
const cloneMenu = m_menu.cloneNode(true); //cloneNode(true)값까지 넣었다면 '자식'까지 복제 한다는 의미
console.log(`복제대상확인 :${cloneMenu}`);
console.log(cloneMenu);

d_menu.appendChild(cloneMenu);