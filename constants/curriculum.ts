import { Subject } from '../types';
import { KoreanIcon, MathIcon, EnglishIcon, SocialStudiesIcon, ScienceIcon, MusicIcon, ArtIcon, PEIcon, TechIcon } from '../components/icons';

export const SUBJECTS_DATA: Subject[] = [
  {
    id: 'korean',
    name: '국어',
    icon: KoreanIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: '문학 작품을 감상하고 다양한 글을 통해 생각과 감정을 효과적으로 표현하는 방법을 배웁니다.',
    curriculum: {
      firstSemester: [
        { title: '문학의 세계', description: '시를 읽을 때 시인이 어떤 느낌과 생각을 어떻게 표현했는지 파악해요. 시에 나오는 이미지와 상징을 이해하고 감상하는 연습을 합니다. 이야기(소설) 속 인물의 성격과 사건이 어떻게 전개되는지도 배워요.' },
        { title: '정보 전달 글', description: '설명문, 안내문 같은 글을 읽고 중요한 정보가 무엇인지 요약하고 이해하는 방법을 배워요. 글의 구조(도입, 본문, 결론)를 파악해 핵심을 잡는 연습도 해요.' },
        { title: '생각과 주장 표현하기', description: '자신의 의견을 명확히 쓰고 말하는 법을 배우며, 주장을 뒷받침하는 근거를 어떻게 찾고 정리하는지 연습합니다. 발표를 통해 말하기 능력도 키워요.' },
        { 
          title: '우리말 소리', 
          description: '한글이 어떻게 만들어졌는지 배우고, 소리의 종류(자음, 모음), 소리의 변화 현상(연음, 된소리, 거센소리 등)을 공부합니다.',
          examples: [{ question: '다음 중 된소리가 아닌 것은?', options: ['ㄲ', 'ㄸ', 'ㅃ', 'ㅋ'], answer: 'ㅋ' }]
        },
      ],
      secondSemester: [
        { title: '인물과 삶', description: '소설과 희곡을 통해 인물의 마음과 가치관을 이해해요. 인물이 처한 상황과 갈등을 파악하고 이야기 속에서 어떤 교훈을 얻을 수 있는지 생각합니다.' },
        { title: '비판적 읽기', description: '주장하는 글을 읽으며 저자의 의도와 근거가 충분한지 판단하는 능력을 기릅니다.' },
        { title: '체험과 감상 표현', description: '자신의 체험을 바탕으로 수기나 감상문을 씁니다. 느낌과 생각을 풍부하게 표현하는 법을 배우죠.' },
        { title: '우리말 형태', description: '단어가 어떻게 만들어지는지(어근, 접사), 문장에서 단어가 어떤 역할을 하는지(품사)를 공부합니다.' },
      ]
    }
  },
  {
    id: 'math',
    name: '수학',
    icon: MathIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: '수와 연산의 기초를 다지고, 문자와 식, 함수, 기하, 확률과 통계의 기본 개념을 학습합니다.',
    curriculum: {
      firstSemester: [
        { 
          title: '소인수분해', 
          description: '자연수를 소수의 곱으로 분해하는 방법과 그 활용법을 익혀 최대공약수와 최소공배수를 구하는 능력을 기릅니다.',
          examples: [
            { question: '12를 소인수분해하면?', options: ['2 x 6', '2² x 3', '3 x 4', '1 x 12'], answer: '2² x 3' },
            { question: '18과 24의 최대공약수는?', options: ['2', '3', '6', '12'], answer: '6' }
          ]
        },
        { 
          title: '정수와 유리수', 
          description: '음수와 양수, 분수, 소수의 사칙연산 규칙을 배우고 절댓값의 개념도 이해합니다.',
          examples: [
            { question: '(-3) + (+5)의 값은?', options: ['-8', '-2', '2', '8'], answer: '2' },
            { question: '|-4|의 값은?', options: ['-4', '0', '4', '±4'], answer: '4' }
          ]
        },
        { 
          title: '문자의 사용과 식', 
          description: '숫자를 문자로 표현하고, 식을 계산하거나 변형하는 방법을 배워 일차식 계산의 기초를 다집니다.',
          examples: [
            { question: 'x=2일 때, 3x + 1의 값은?', options: ['5', '6', '7', '8'], answer: '7' },
            { question: '(2a + 3) + (a - 1)을 간단히 하면?', options: ['3a - 2', '2a + 2', '3a + 2', '3a + 4'], answer: '3a + 2' }
          ]
        },
        { 
          title: '좌표평면과 그래프', 
          description: '좌표평면에서 점의 위치를 나타내고, 그래프로 실생활 상황을 시각화하는 법을 익힙니다.',
          examples: [{ question: '점 A(2, -3)은 제 몇 사분면의 점인가?', options: ['제 1사분면', '제 2사분면', '제 3사분면', '제 4사분면'], answer: '제 4사분면' }]
        },
      ],
      secondSemester: [
        { 
          title: '기본도형과 작도', 
          description: '점, 선, 각 등의 기본 도형 개념을 배우고 자와 컴퍼스로 각 이등분선, 수직이등분선을 그리는 작도법을 익힙니다.',
          examples: [{ question: '각의 이등분선을 작도할 때 반드시 필요한 한 쌍의 도구는?', options: ['자와 각도기', '자와 컴퍼스', '컴퍼스와 각도기', '자만 있어도 된다'], answer: '자와 컴퍼스' }]
        },
        { 
          title: '평면도형의 성질', 
          description: '삼각형, 사각형(평행사변형, 직사각형 등)의 성질과 다각형 내각의 합, 원의 기본 성질을 공부합니다.',
          examples: [{ question: '정오각형의 한 내각의 크기는?', options: ['90도', '108도', '120도', '135도'], answer: '108도' }]
        },
        { 
          title: '입체도형의 성질', 
          description: '정육면체, 직육면체, 원기둥 같은 입체도형의 구성 요소와 전개도, 부피와 겉넓이의 기초를 이해합니다.',
          examples: [{ question: '한 변의 길이가 3cm인 정육면체의 부피는?', options: ['9 cm³', '18 cm³', '27 cm³', '54 cm³'], answer: '27 cm³' }]
        },
        { 
          title: '자료의 정리와 해석', 
          description: '자료를 수집하고 도수 분포표를 만들며, 평균, 중앙값, 최빈값을 계산하고 그래프로 표현하는 통계 기본 개념을 배웁니다.',
          examples: [{ question: '자료 {70, 80, 80, 90, 100}의 최빈값은?', options: ['70', '80', '90', '100'], answer: '80' }]
        },
      ]
    }
  },
  {
    id: 'english',
    name: '영어',
    icon: EnglishIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: '기본적인 의사소통 능력을 기르기 위해 듣기, 말하기, 읽기, 쓰기 능력을 균형 있게 발전시킵니다.',
    curriculum: {
      firstSemester: [
        { title: '기초 회화 표현', description: '인사하기, 자기소개, 가족과 학교 소개하기, 간단한 일상 대화 연습' },
        { 
          title: '기본 문법', 
          description: 'be동사, 일반동사 현재형, 명사와 대명사 사용법',
          examples: [{ question: "She ___ a student. 빈 칸에 알맞은 be동사는?", options: ['am', 'are', 'is', 'be'], answer: 'is' }]
        },
        { title: '읽기와 듣기', description: '짧은 문장과 대화 듣고 이해하기, 기본 단어 익히기' },
        { title: '쓰기와 말하기', description: '간단한 문장 쓰기, 친구와 대화하기 연습' },
      ],
      secondSemester: [
        { title: '회화 확장', description: '취미, 음식, 교통수단 등 일상 주제 표현 배우기' },
        { title: '문법 심화', description: '과거형 동사, 의문문, 부정문, 형용사와 부사 사용' },
        { title: '읽기와 쓰기', description: '이메일, 편지, 안내문 같은 짧은 글 읽고 쓰기' },
        { title: '말하기', description: '발표하기, 역할극 등 실생활 말하기 연습' },
      ]
    }
  },
  {
    id: 'social-studies',
    name: '사회',
    icon: SocialStudiesIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: '나와 우리를 둘러싼 사회 현상을 이해하고, 지리, 역사, 일반사회의 기초를 다집니다.',
    curriculum: {
      firstSemester: [
        { 
          title: '지리의 이해', 
          description: '지도의 종류와 쓰임, 위도·경도 체계, 세계 대륙과 바다, 자연환경과 기후 분포를 학습합니다.',
          examples: [{ question: '지구의 남과 북의 위치를 나타내는 가상의 가로선은 무엇일까요?', options: ['경도', '위도', '고도', '적도'], answer: '위도' }]
        },
        { title: '자연과 인간생활', description: '기후와 환경이 인간 생활에 미치는 영향을 알아보고 다양한 생활 문화와 경제활동을 살펴봅니다.' },
        { title: '민주 사회의 원리', description: '민주주의 개념, 권리와 의무, 헌법과 법의 역할, 선거와 정치 참여를 공부해 시민 의식을 키워요.' },
      ],
      secondSemester: [
        { title: '역사의 시작과 발전', description: '선사 시대부터 고조선과 초기 국가, 삼국 시대(고구려, 백제, 신라), 통일신라와 발해의 역사와 문화를 배웁니다.' },
        { title: '경제생활과 시장', description: '생산, 소비, 분배의 경제 활동 과정을 이해하고 시장의 원리와 가격 결정, 용돈 관리 등 실생활 경제를 공부합니다.' },
        { title: '사회 문제와 해결', description: '청소년의 권리와 책임, 차별과 갈등 문제, 환경 보호 등 사회 문제를 알아보고 해결 방안을 생각합니다.' },
      ]
    }
  },
  {
    id: 'science',
    name: '과학',
    icon: ScienceIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: '자연 현상에 대한 호기심을 바탕으로 과학적 탐구 능력을 기르고, 기본 과학 개념을 학습합니다.',
    curriculum: {
      firstSemester: [
        { title: '과학 탐구 방법', description: '과학적 문제 해결 과정과 실험 방법, 안전 수칙을 배웁니다.' },
        { title: '물질의 성질과 변화', description: '고체, 액체, 기체 상태 변화, 혼합물의 분리 방법, 물질의 기본 성질을 이해합니다.' },
        { 
          title: '생명의 기본 단위, 세포', 
          description: '세포의 구조와 기능, 동물과 식물 세포 차이, 현미경 사용법을 익히고 생물 분류 기초도 공부합니다.',
          examples: [{ question: '식물 세포에는 있지만 동물 세포에는 없는 구조는?', options: ['핵', '세포질', '세포벽', '미토콘드리아'], answer: '세포벽' }]
        },
      ],
      secondSemester: [
        { title: '지구와 지각의 변화', description: '지각의 구조, 화산과 지진 발생 원리, 지층과 화석을 통한 과거 환경 이해를 배웁니다.' },
        { title: '힘과 운동', description: '힘의 개념, 속력과 운동의 법칙, 마찰력 이해, 일상생활과 연관된 예시를 통해 개념을 익힙니다.' },
        { title: '빛과 소리', description: '빛의 직진, 반사, 굴절 현상과 소리의 발생 및 전달 원리를 탐구합니다.' },
        { title: '생태계와 환경', description: '생물 간 상호작용, 먹이사슬, 에너지 흐름, 환경 보전의 중요성을 배우고 실천 방법도 생각합니다.' },
      ]
    }
  },
  {
    id: 'music',
    name: '음악',
    icon: MusicIcon,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    description: '다양한 음악 활동을 통해 음악적 감수성과 표현력을 기르고, 음악의 기본 요소를 이해합니다.',
    curriculum: {
      firstSemester: [
        { 
          title: '기본 박자와 음계', 
          description: '리듬과 음 높이 이해하기',
          examples: [{ question: '4/4박자는 한 마디에 4분음표가 몇 개 들어가는 것을 의미할까요?', options: ['2개', '4개', '6개', '8개'], answer: '4개' }]
        },
        { title: '기초 악기 연주', description: '리코더, 실로폰 등 악기 배우기' },
        { title: '한국 전통 음악', description: '민요와 국악기 소개' },
      ],
      secondSemester: [
        { title: '합창과 합주', description: '여러 악기와 목소리로 협동 연주하기' },
        { title: '세계 음악 감상', description: '다양한 나라 음악 듣고 문화 이해' },
        { title: '창작 활동', description: '간단한 멜로디 만들기와 노래 부르기' },
      ]
    }
  },
  {
    id: 'art',
    name: '미술',
    icon: ArtIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: '미술의 기본 원리를 이해하고, 다양한 재료와 용구를 사용하여 창의적으로 표현하는 능력을 기릅니다.',
    curriculum: {
      firstSemester: [
        { 
          title: '선과 색 표현', 
          description: '다양한 선과 색의 느낌 표현하기',
          examples: [{ question: '다른 색을 섞어 만들 수 없는 기본 색인 ‘삼원색’에 해당하지 않는 것은?', options: ['빨강', '초록', '노랑', '파랑'], answer: '초록' }]
        },
        { title: '평면 구성', description: '콜라주, 추상과 구상의 그림 그리기' },
        { title: '포스터 제작', description: '메시지 전달을 위한 시각 디자인 기초 배우기' },
      ],
      secondSemester: [
        { title: '입체 표현', description: '종이, 찰흙 등 다양한 재료로 입체 작품 만들기' },
        { title: '전통 미술 감상', description: '민화, 도자기, 한국 전통 문양과 그림 탐색' },
        { title: '현대 미술 이해', description: '팝아트, 디자인, 현대 미술가 작품 감상' },
      ]
    }
  },
   {
    id: 'pe',
    name: '체육',
    icon: PEIcon,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    description: '건강의 중요성을 인식하고, 다양한 신체 활동을 통해 체력을 증진하며 스포츠맨십을 배웁니다.',
    curriculum: {
      firstSemester: [
        { title: '기본 체력 운동', description: '스트레칭, 달리기, 순발력 강화 운동' },
        { 
          title: '구기 종목 기초', 
          description: '피구, 배드민턴 등 기본 규칙과 기술 익히기',
          examples: [{ question: '경기 규칙을 지키고 상대방과 심판을 존중하는 태도를 무엇이라고 할까요?', options: ['리더십', '팔로워십', '페어플레이', '팀워크'], answer: '페어플레이' }]
        },
        { title: '팀워크 게임', description: '협동심과 스포츠맨십 배우기' },
      ],
      secondSemester: [
        { title: '농구와 축구', description: '기본 드리블, 패스, 슛 기술 연습' },
        { title: '줄넘기와 체력 훈련', description: '체력과 지구력 향상' },
        { title: '건강 관리', description: '올바른 식습관과 운동 습관 배우기' },
      ]
    }
  },
  {
    id: 'tech',
    name: '기술·가정 / 정보',
    icon: TechIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    description: '청소년기의 발달과 건강한 가정생활, 그리고 기술의 세계에 대한 기초적인 이해를 돕습니다.',
    curriculum: {
      firstSemester: [
        { title: '기술', description: '도구와 간단한 기계 원리 이해, 안전하게 사용하는 법' },
        { 
          title: '가정', 
          description: '청소년기의 신체·정서 변화와 자기 관리, 건강한 식생활',
          examples: [{ question: '청소년기 건강한 식생활을 위해 섭취를 줄여야 하는 것은?', options: ['단백질', '비타민', '가공식품', '무기질'], answer: '가공식품' }]
        },
        { title: '정보', description: '컴퓨터 기본 조작, 문서 작성, 인터넷 사용법' },
      ],
      secondSemester: [
        { title: '기술', description: '간단한 구조물 만들기와 설계' },
        { title: '가정', description: '식품 보관법, 의복 관리, 가정 안전' },
        { title: '정보', description: '스크래치, 엔트리 등 블록 코딩 기초 배우기, 정보 보호와 윤리' },
      ]
    }
  },
];