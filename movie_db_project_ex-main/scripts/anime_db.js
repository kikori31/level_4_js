//상영예정 DB
//마루 밑 아리에티,체인소맨,하울,귀멸의칼날,포뇨,센과치히로,스즈메의 문단속,그대들은 어떻게 살것인가,더 퍼스트 슬램덩크,너의 이름은
// const moviesDB2 = [{
//     id :1,
//     title :'마루 밑 아리에티',
//     date :'2026-05-16',
//     poster:'poster/poster_arrietty.jpg',
// }]
const moviesDB2 = [
{
    id: 1,
    title: '마루 밑 아리에티',
    date: '2026-05-16',
    poster: 'poster_anime/poster_arrietty.jpg',
    director: '요네바야시 히로마사',
    genre: ['애니메이션', '판타지', '모험'],
    rating: 8.1,
    characters: ['아리에티', '쇼우', '호밀리', '파드'],
    summary: '인간의 물건을 몰래 빌려 쓰며 살아가는 소인 소녀 아리에티가 요양을 온 인간 소년 쇼우를 만나며 금기된 우정을 쌓아가는 이야기.'
},
{
    id: 2,
    title: '체인소 맨: 레제편',
    date: '2026-06-20',
    poster: 'poster_anime/poster_chainsawmanreze.jpg',
    director: '나카야마 류',
    genre: ['애니메이션', '액션', '다크 판타지'],
    rating: 8.9,
    characters: ['덴지', '레제', '마키마', '아키', '파워'],
    summary: '비 내리는 날 우연히 마주친 수수께끼의 소녀 레제에게 마음을 빼앗긴 덴지가 폭탄의 악마를 둘러싼 가혹한 운명에 맞닥뜨리는 이야기.'
},
{
    id: 3,
    title: '하울의 움직이는 성',
    date: '2026-07-04',
    poster: 'poster_anime/poster_howlsmovingcastle.jpg',
    director: '미야자키 하야오',
    genre: ['애니메이션', '판타지', '로맨스'],
    rating: 9.3,
    characters: ['소피', '하울', '캘시퍼', '마르클', '황야의 마녀'],
    summary: '마녀의 저주로 할머니가 된 소녀 소피가 마법사 하울의 움직이는 성에 머물며 서로의 마음과 상처를 치유해 나가는 감성 판타지.'
},
{
    id: 4,
    title: '귀멸의 칼날: 무한성편',
    date: '2026-08-15',
    poster: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
    director: '소토자키 하루오',
    genre: ['애니메이션', '액션', '판타지'],
    rating: 9.4,
    characters: ['카마도 탄지로', '카마도 네즈코', '아가츠마 젠이츠', '하시비라 이노스케', '키부츠지 무잔'],
    summary: '귀살대와 키부츠지 무잔 및 상현 혈귀들이 뒤엉킨 무한성에서 펼쳐지는 인류와 도깨비 간의 피할 수 없는 최후의 결전.'
},
{
    id: 5,
    title: '벼랑 위의 포뇨',
    date: '2026-09-05',
    poster: 'poster_anime/poster_ponyo.jpg',
    director: '미야자키 하야오',
    genre: ['애니메이션', '판타지', '모험', '가족'],
    rating: 8.3,
    characters: ['포뇨', '소스케', '리사', '후지모토'],
    summary: '인간이 되고 싶은 호기심 많은 물고기 소녀 포뇨와 벼랑 위 외딴집에 사는 다섯 살 소년 소스케의 순수하고 마법 같은 우정과 모험.'
},
{
    id: 6,
    title: '센과 치히로의 행방불명',
    date: '2026-09-26',
    poster: 'poster_anime/poster_spiritedaway.jpg',
    director: '미야자키 하야오',
    genre: ['애니메이션', '판타지', '모험'],
    rating: 9.6,
    characters: ['치히로 (센)', '하쿠', '유바바', '가오나시', '가마할아범'],
    summary: '신들의 온천장에 발을 들여 돼지로 변해버린 부모님을 구하고 자신의 이름을 되찾기 위해 분투하는 열 살 소녀 치히로의 기묘한 모험기.'
},
{
    id: 7,
    title: '스즈메의 문단속',
    date: '2026-10-10',
    poster: 'poster_anime/poster_suzume.jpg',
    director: '신카이 마코토',
    genre: ['애니메이션', '판타지', '모험', '재난'],
    rating: 8.8,
    characters: ['이와토 스즈메', '무나카타 소타', '다이진', '이와토 타마키'],
    summary: '일본 각지의 폐허에서 열리는 재난의 문을 닫기 위해 문을 닫는 여행자 소타와 함께 여정을 떠나는 소녀 스즈메의 치유와 구원의 모험.'
},
{
    id: 8,
    title: '그대들은 어떻게 살 것인가',
    date: '2026-11-07',
    poster: 'poster_anime/poster_theboyandtheheron.jpg',
    director: '미야자키 하야오',
    genre: ['애니메이션', '판타지', '드라마'],
    rating: 8.2,
    characters: ['마키 마히토', '왜가리', '키리코', '히미'],
    summary: '화재로 어머니를 잃은 소년 마히토가 말하는 왜가리를 따라 이세계로 들어가 삶과 죽음이 공존하는 공간을 통과하며 자아를 찾아가는 이야기.'
},
{
    id: 9,
    title: '더 퍼스트 슬램덩크',
    date: '2026-11-28',
    poster: 'poster_anime/poster_thefirstslamdunk.jpg',
    director: '이노우에 타케히코',
    genre: ['애니메이션', '스포츠', '드라마'],
    rating: 9.3,
    characters: ['송태섭', '강백호', '서태웅', '정대만', '채치수'],
    summary: '전국 최강 산왕공고에 맞서는 북산고 농구부 5인방의 치열한 사투와 포인트 가드 송태섭의 숨겨진 성장 서사를 그린 뜨거운 승부.'
},
{
    id: 10,
    title: '너의 이름은.',
    date: '2026-12-19',
    poster: 'poster_anime/poster_yourname.jpg',
    director: '신카이 마코토',
    genre: ['애니메이션', '로맨스', '판타지', '드라마'],
    rating: 9.2,
    characters: ['타치바나 타키', '미야미즈 미츠하', '오쿠데라 미키', '테시가와라 카츠히코'],
    summary: '도쿄의 남학생 타키와 시골 여학생 미츠하가 서로의 몸이 바뀌는 기적을 겪으며 천 년 만에 다가오는 혜성의 위협으로부터 서로를 구하려는 기적 같은 인연의 이야기.'
}
];
