document.addEventListener('DOMContentLoaded', () => {
    const menus = [
        '김치찌개', '된장찌개', '부대찌개', '삼겹살', '제육볶음',
        '돈까스', '초밥', '라멘', '마라탕', '쌀국수',
        '치킨', '피자', '햄버거', '떡볶이', '족발',
        '보쌈', '파스타', '스테이크', '짜장면', '짬뽕'
    ];

    const recommendBtn = document.getElementById('recommend-btn');
    const recommendationText = document.getElementById('recommendation-text');

    recommendBtn.addEventListener('click', () => {
        // 애니메이션 효과를 위해 텍스트를 잠시 비웁니다.
        recommendationText.textContent = '음... 고민 중...';
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * menus.length);
            const selectedMenu = menus[randomIndex];
            recommendationText.textContent = `오늘의 추천 메뉴는 [${selectedMenu}] 입니다!`;
        }, 500);
    });
});
