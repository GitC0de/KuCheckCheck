const questions = [
    
    {
        question: `[연습 문제] 아이즈원 활동 당시 김채원, 조유리, 최예나는 서로 닮은 꼴로 유명해 "조유리즈"라는 별명까지 붙었다!<br><br>아래 사진에서 좌측 인물(갈색 머리)은 "조유리즈" 중 누구인가?`,
        quizImage: "https://post-phinf.pstatic.net/MjAxOTA0MTJfMTY2/MDAxNTU1MDYyMTI5MTg5.QbnDGEWk33xwht40tgVRFwurBPdRYEVBGVKGZnEbQN0g.2d27-9NXY3-qzgQ7-ZEDcH1vjZuSm2I0Oy2kpTS20-Eg.JPEG/13.jpg?type=w1200", 
        answers: 
            [
                { text: "① 김채원", correct: false},
                { text: "② 조유리", correct: false},
                { text: "③ 최예나", correct: true},
                { text: "④ 조유리즈가 아니다", correct: false}
            ],
            explanation: "연습문제"
    },

    {
        question: "다음 중 올바른 태극기는?",
        answers: [
            { text: "①", img: "flag1.png", correct: true},
            { text: "②", img: "flag2.png", correct: false},
            { text: "③", img: "flag3.png", correct: false},
            { text: "④", img: "flag4.png", correct: false},
        ]
    },

    {
        question: "다음 중 고려대학교의 교훈에 들어가는 것은?",
        answers: [
            { text: "① 자율", correct: false},
            { text: "② 정리", correct: false},
            { text: "③ 정의", correct: true},
            { text: "④ 진실", correct: false}
            
        ],
        explanation: `고려대학교의 교훈은 "자유, 정의, 진리"이다.`    
    },

    {
        question: "국기를 게양하지 않아도 되는 날은?",
        answers: [
            { text: "① 3.1절", correct: false},
            { text: "② 6.25 전쟁일", correct: true},
            { text: "③ 제헌절", correct: false},
            { text: "④ 국군의 날", correct: false}
        ],
    },

    {
        question: "다음 중 고려대의 응원가가 아닌 것은?",
        answers: [
            { text: "① 뱅!", correct: false},
            { text: "② 레이몽드 서곡", correct: false},
            { text: "③ 춥", correct: false},
            { text: "④ 온누리에", correct: true}
        ],
        explanation: `<br>뱅 - 2023년에 제작된 "고려대"의 응원가.<br>레이몽드 서곡 - 1990년 제작된 "고려대"의 응원가. "2024년도 서울 신입생 응원 OT"에서 부활.<br>춥 - 2008년에 제작된 "고려대"의 응원가 <br>온누리에 - 2022년에 제작된 "연세대"의 응원가. "아카라카를 온누리에"에서 공개.`
    },

    {
        question: "위 인물은 독립운동가인가? 친일파인가?",
        quizImage: "person1.webp",
        answers: [
            { text: "① 독립운동가", correct: true},
            { text: "② 친일파", correct: false},
        ],
        explanation: "최재형<br>러시아의 시베리아 지역에서 활동한 대한민국의 독립유공자. 러시아식 이름은 초이 표트르 세묘노비치(Цой Пётр Семёнович)이며, 이명은 최재형(崔在衡), 최도헌(崔都憲), 별명으론 최 페티카(Петька), 최 비지깨가 있다. [4] 1962년 대한민국 건국훈장 독립장을 추서받았다. 망국 전후 연해주 독립운동은 최재형을 빼놓고서는 기록할 수 없다. 그 정도로 러시아에서 활동한 독립운동가 중 대단한 영향력을 미쳤던 주역이다. 그동안 사학계에서는 연구가 부족한 과거에 그리 조명받지 못했으며, 1990년대 후반에 들어서야 비로소 주목받게 되었다." 
    },
    
    {
        question: "다음 중 고려대 심리학부 교수님이 아닌 분은?",
        answers: [
            { text: "① 성용준 교수님", correct: false},
            { text: "② 남기춘 교수님", correct: false},
            { text: "③ 송현주 교수님", correct: true},
            { text: "④ 양은주 교수님", correct: false}
        ],
        explanation: "<br>성용준 교수님 - 고려대 교수님(소비자 및 광고심리)<br>남기춘 교수님 - 고려대 교수님(행동인지 신경과학)<br>송현주 교수님 - 연세대 교수님(발달심리)<br>양은주 교수님 - 고려대 교수님(임상 및 상담심리)"
    }



]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const modal = document.querySelector(".modal--bg");
const okButton = document.querySelector(".okButton");
const cancelButton = document.querySelector(".cancelButton");
okButton.disabled = true;
cancelButton.disabled = true;
let questionIdx = 1;
let isRight = "정답";


const title = document.querySelector("h1");

main();

function main() {
    const buttonPlace = document.getElementById("skipBtnPlace");
    const startButton = document.createElement("button");
    startButton.innerHTML = "시작하기";
    startButton.classList.add("startButton");
    startButton.addEventListener("click", startQuiz);
    buttonPlace.appendChild(startButton);
    settings(title);
}

function settings(title) {
    const introducePlace = document.getElementById("question");
    const introduce = document.createElement("h2");

    title.innerHTML = "나락퀴즈쇼";
    introduce.innerHTML = `'Cancel Culture'<br>: 유명인이나 공적 지위가 있는 사람이 논쟁이 될 만한 행동이나 발언을 했을 때, SNS나 인터넷 커뮤니티 등을 통해 대중의 공격을 받고 지위나 직업을 박탈하려는 캠페인의 대상이 되는 현상, 즉 나락.`;
    introduce.classList.add("introduce");
    introducePlace.appendChild(introduce);
}

function restart() {
    const startButton = document.querySelector(".startButton");
    startButton.style.display = "block";
    nextButton.style.display = "none";
    settings(title);
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "다음 문제";
    showQuestion(); 
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    let questionNo = currentQuestionIndex;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    if(currentQuestion.quizImage) {
        const imageDiv = document.getElementById("answer-buttons");
        const quizImage = document.createElement("img");
        quizImage.src = currentQuestion.quizImage;
        quizImage.width = 365;
        imageDiv.appendChild(quizImage);
        
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.no = questionIdx;
              
        if(answer.img) {
            button.classList.add("img-btn");
            button.dataset.no = questionIdx;
            const img = document.createElement("img");
            img.src = answer.img;
            img.width = "180";
            button.appendChild(img);
        }
            answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", clickAnswer);
        questionIdx++;
    });
}

function resetState() {
    startButton = document.querySelector(".startButton");
    startButton.style.display = "none";
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function closeModal() {
    const modal = document.querySelector(".modal--bg");
    modal.classList.remove("visible");
    modal.classList.add("hidden");
}

function clickAnswer(e) {
    const selectedBtn = e.currentTarget;
    const modalWarning = document.querySelector(".modal__text");
    const modalYes = document.querySelector(".okButton");
    modalWarning.innerHTML = `${selectedBtn.dataset.no}번을 선택하시겠습니까?`;
    modalYes.innerHTML = `네. ${selectedBtn.dataset.no}번이 확실합니다!`;

    modal.classList.remove("hidden");
    modal.classList.add("visible");
    okButton.disabled = false;
    cancelButton.disabled = false;

    okButton.onclick = () => {
        selectAnswer(selectedBtn);
    };
    cancelButton.addEventListener("click", closeModal);
}

function selectAnswer(selectedBtn) {
    closeModal();
    let isCorrect = true;

    if(selectedBtn.dataset.correct === "true") {
        isCorrect = true;
    } else {
        isCorrect = false;  
    }

      
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        isRight = "정답";
    } else {
        selectedBtn.classList.add("incorrect");
        isRight = "오답";
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            correctAnswer = button.dataset.no;
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    questionIdx = 1;

    /*
    const imageDiv = document.getElementById("answer-buttons");
    const quizImage = document.createElement("img");
    quizImage.src = currentQuestion.quizImage;
    quizImage.width = 365;
    imageDiv.appendChild(quizImage);
    */
        
    
    const explainDiv = document.getElementById("answer-buttons");
    const explain = document.createElement("h3");

    
    if(questions[currentQuestionIndex].explanation) {
        explain.innerHTML = isRight + `<br><br>정답 : ${correctAnswer}<br> 당신이 고른 답: ${selectedBtn.dataset.no}<br><br> 설명 : ` + questions[currentQuestionIndex].explanation;
    } else {
        explain.innerHTML = isRight + `<br><br>정답 : ${correctAnswer}<br> 당신이 고른 답: ${selectedBtn.dataset.no}`;
    }
    explainDiv.appendChild(explain);
}

function showScore() {
    resetState();
    const title = document.querySelector("h1");
    title.innerHTML = "당신의 결과";

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "메인으로";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        restart();
    }

})