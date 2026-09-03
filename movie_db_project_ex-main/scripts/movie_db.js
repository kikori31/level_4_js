//영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의 언덕
const moviesDB = [
{
    id: 1,
    title: '어벤져스',
    date: '2026-12-18',
    poster: 'poster/poster_avengersdoomsday.jpg',
    director: '안소니 루소, 조 루소',
    genre: ['액션', 'SF', '모험'],
    rating: 9.4,
    characters: ['닥터 둠', '스파이더맨', '토르', '캡틴 아메리카', '닥터 스트레인지'],
    summary: '멀티버스의 붕괴 위기 속에서 최악의 위협으로 등장한 닥터 둠에 맞서 다시 뭉친 영웅들의 거대한 전쟁을 그린 마블 시네마틱 유니버스 영화.'
},
{
    id: 2,
    title: '스파이더맨',
    date: '2026-07-24',
    poster: 'poster/poster_spidermanbrandnewday.jpg',
    director: '데스틴 대니얼 크레턴',
    genre: ['액션', 'SF', '모험'],
    rating: 9.1,
    characters: ['피터 파커 (스파이더맨)', 'MJ', '네드 리즈'],
    summary: '세상 사람들의 기억에서 지워진 피터 파커가 새로운 위기 속에서 뉴욕의 친절한 이웃이자 진정한 히어로로서 홀로서기에 나서는 이야기.'
},
{
    id: 3,
    title: '오디세이',
    date: '2026-07-17',
    poster: 'poster/poster_theodyssey.jpg',
    director: '크리스토퍼 놀란',
    genre: ['SF', '드라마', '모험'],
    rating: 9.5,
    characters: ['오디세우스', '페넬로페', '텔레마코스', '키르케'],
    summary: '트로이 전쟁 후 고향 이타카로 돌아가기 위해 거대한 폭풍과 신화적 시련을 헤쳐 나가는 영웅 오디세우스의 험난한 여정과 생존기.'
},
{
    id: 4,
    title: '토이스토리5',
    date: '2026-06-19',
    poster: 'poster/poster_toystory5.jpg',
    director: '앤드류 스탠튼',
    genre: ['애니메이션', '모험', '코미디', '가족'],
    rating: 8.9,
    characters: ['우디', '버즈 라이트이어', '제시', '포키'],
    summary: '아이들의 관심이 점차 전자기기와 스크린으로 옮겨가는 디지털 시대에 장난감들이 겪는 새로운 위기와 변치 않는 우정의 여정.'
},
{
    id: 5,
    title: '악마는 프라다를 입는다 2',
    date: '2026-05-01',
    poster: 'poster/poster_thedevilwearsprada2.jpg',
    director: '데이빗 프랭클',
    genre: ['코미디', '드라마'],
    rating: 8.7,
    characters: ['미란다 프리슬리', '앤디 삭스', '에밀리 찰턴'],
    summary: '변화하는 디지털 미디어 시장 속에서 경영 위기에 봉착한 런웨이 매거진의 편집장 미란다와 글로벌 패션 그룹의 임원으로 성공한 에밀리가 벌이는 치열한 패션 전쟁.'
},
{
    id: 6,
    title: '마이클',
    date: '2026-04-24',
    poster: 'poster/poster_michael.jpg',
    director: '안톤 후쿠아',
    genre: ['전기', '드라마', '음악'],
    rating: 9.2,
    characters: ['마이클 잭슨', '조셉 잭슨', '캐서린 잭슨'],
    summary: '어린 시절 잭슨 파이브로 시작해 전 세계를 사로잡은 팝의 황제가 되기까지의 위대한 음악적 업적과 인간 마이클 잭슨의 이면을 담은 전기 영화.'
},
{
    id: 7,
    title: '슈퍼 마리오 갤럭시',
    date: '2026-04-03',
    poster: 'poster/poster_thesupermariogalaxymovie.jpg',
    director: '아론 호바스, 마이클 옐레닉',
    genre: ['애니메이션', '모험', '코미디', '판타지'],
    rating: 9.0,
    characters: ['마리오', '루이지', '피치 공주', '쿠파', '로젤리나'],
    summary: '버섯 왕국을 넘어 광활한 우주를 무대로 펼쳐지는 모험! 신비한 별똥별 관측제 날 쿠파의 습격에 맞서 은하계를 구하기 위한 마리오의 스페이스 액션 어드벤처.'
},
{
    id: 8,
    title: '프로젝트 헤일메리',
    date: '2026-03-20',
    poster: 'poster/poster_projecthailmary.jpg',
    director: '필 로드, 크리스토퍼 밀러',
    genre: ['SF', '모험'],
    rating: 9.3,
    characters: ['라일랜드 그레이스', '로키', '에바 스트랫'],
    summary: '태양 에너지를 갉아먹는 미지의 미생물로 인해 지구 멸망 위기에 처하자, 인류의 유일한 희망을 품고 홀로 성간 우주로 떠난 과학교사의 눈물겨운 생존과 연대.'
},
{
    id: 9,
    title: '폭풍의 언덕',
    date: '2026-02-13',
    poster: 'poster/poster_wutheringheights.jpg',
    director: '에머랄드 펜넬',
    genre: ['드라마', '멜로/로맨스'],
    rating: 8.6,
    characters: ['히스클리프', '캐서린 언쇼', '에드거 린튼'],
    summary: '황량한 요크셔 저택을 배경으로 신분과 증오를 넘어선 두 남녀의 격정적이고 파괴적인 사랑과 복수를 현대적 감각으로 재해석한 클래식 로맨스.'
}
];

