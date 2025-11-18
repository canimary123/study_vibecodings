# 금속 악세사리 전문 웹사이트 변경 프롬프트

아래 HTML 코드를 금속 악세사리 전문 쇼핑몰로 완전히 변경해주세요.

## 원본 HTML 코드:
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Mark - 혼밥 레시피</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Food Mark</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">홈</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="recipes.html">레시피</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ingredients.html">식재료</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="레시피 검색" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">검색</button>
                </form>
            </div>
        </div>
    </nav>

    <main class="container my-4">
        <section class="jumbotron text-center p-5 rounded mb-5">
            <h1 class="display-4 text-white">혼밥족을 위한 간편 레시피</h1>
            <p class="lead text-white">혼자서도 맛있고 건강하게! Food Mark가 제안하는 초간단 레시피를 만나보세요.</p>
            <a href="recipes.html" class="btn btn-primary btn-lg mt-3">오늘의 추천 레시피 보기</a>
        </section>

        <section class="mb-5">
            <h2 class="text-center mb-4">인기 레시피</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Kimchi+Jjigae" class="card-img-top" alt="김치찌개">
                        <div class="card-body">
                            <h5 class="card-title">돼지고기 김치찌개</h5>
                            <p class="card-text">한국인의 소울푸드, 김치찌개를 15분 만에 만드는 비법!</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Ganjang+Gyeranbap" class="card-img-top" alt="계란밥">
                        <div class="card-body">
                            <h5 class="card-title">간장 계란밥</h5>
                            <p class="card-text">자취생 필수 요리! 5분이면 완성되는 마약 간장 계란밥.</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Alio+Olio" class="card-img-top" alt="파스타">
                        <div class="card-body">
                            <h5 class="card-title">알리오 올리오</h5>
                            <p class="card-text">냉장고 속 재료로 뚝딱! 레스토랑 부럽지 않은 알리오 올리오.</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="text-center text-lg-start mt-auto">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Food Mark</h5>
                    <p>
                        Food Mark는 1인 가구를 위한 쉽고 맛있는 레시피를 제공합니다.
                    </p>
                </div>
            </div>
        </div>
        <div class="text-center p-3">
            © 2025 Food Mark. All rights reserved.
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

---

## 변경 요구사항:

### 1. 사이트 컨셉 변경
- **기존**: 혼밥 레시피 사이트 (Food Mark)
- **변경**: 프리미엄 금속 악세사리 전문 쇼핑몰
- **브랜드명**: "Metal Luxe" 또는 세련된 악세사리 브랜드명 제안

### 2. 네비게이션 메뉴 변경
- 홈 → 홈 (유지)
- 레시피 → 컬렉션 (Collections)
- 식재료 → 제품 (Products)
- 검색창: "레시피 검색" → "제품 검색"

### 3. 히어로 섹션 (Jumbotron) 변경
- **제목**: 금속 악세사리의 고급스러움과 장인정신을 강조하는 캐치프레이즈
- **부제목**: 프리미엄 금속 주얼리 브랜드 소개 문구
- **CTA 버튼**: "신상품 컬렉션 보기" 또는 "베스트셀러 보기"

### 4. 제품 카드 섹션 변경
- **섹션 제목**: "인기 레시피" → "베스트셀러" 또는 "인기 제품"
- **3개 제품 카드 구성**:
  1. **실버 목걸이** - 925 스털링 실버 제품
  2. **골드 반지** - 18K 골드 반지
  3. **티타늄 팔찌** - 모던한 티타늄 브레이슬릿
- 각 카드에 제품명, 간단한 제품 설명, "자세히 보기" 버튼

### 5. 디자인 스타일 (매우 중요!)
- **배경색**: 다크 톤 (검정, 진회색) 또는 우아한 다크 그라데이션
- **주요 색상**: 골드(#d4af37), 실버(#c0c0c0), 화이트 텍스트
- **폰트**: 고급스럽고 모던한 산세리프 폰트
- **네비게이션**: 반투명 다크 배경, 골드 악센트
- **히어로 섹션**: 
  - 금속 텍스처 느낌의 배경 (어두운 톤)
  - 골드 그라데이션 텍스트 효과
  - 미묘한 빛나는 효과 (shimmer/glow)
- **카드 디자인**:
  - 반투명 다크 배경
  - 골드 테두리
  - 호버시 골드 그림자 효과
  - 미니멀하고 럭셔리한 느낌
- **버튼**: 골드 그라데이션, 호버시 발광 효과

### 6. 이미지 요청
- **히어로 섹션 배경**: 금속 텍스처 또는 고급 악세사리가 놓인 어두운 배경
- **제품 이미지 3개**:
  1. 우아한 실버 목걸이 (어두운 배경)
  2. 빛나는 골드 반지 (블랙 배경)
  3. 모던한 티타늄 팔찌 (미니멀한 배경)
- 모든 이미지는 고급스럽고 프로페셔널한 느낌, 실제 제품 사진처럼 보이도록

### 7. 푸터 변경
- 회사 소개: 금속 악세사리 브랜드에 맞게 수정
- "1인 가구를 위한..." → "최고급 금속 소재로 제작된 프리미엄 핸드메이드 악세사리"

### 8. 기술 요구사항
- Bootstrap 5.3.2 사용 (유지)
- 완전한 HTML 파일 하나로 제공 (CSS는 `<style>` 태그 안에 포함)
- 외부 CSS 파일 불필요 (모든 스타일 인라인)
- 반응형 디자인 유지
- 모든 링크는 적절한 페이지명으로 변경 (collections.html, products.html 등)

---

## 출력 형식:
완성된 HTML 파일 전체를 코드블록으로 제공해주세요. 
별도의 설명 없이 바로 복사해서 사용할 수 있도록 완전한 코드만 제공해주세요.

```html
여기에 완성된 HTML 코드
```

---

## 추가 요청:
1. 실제로 작동하는 완전한 HTML 파일
2. 이미지는 unsplash.com 또는 적절한 무료 이미지 URL 사용
3. 모든 텍스트는 한국어로
4. 프리미엄 브랜드 느낌이 확실히 나도록
5. 다크 모드 기반 디자인
6. 골드/실버 메탈릭 효과 강조