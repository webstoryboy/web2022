

// quizMainSelect.forEach(select => {
//     select.addEventListener("click", (e) => {
//         e.preventDefault();
        
//         //기출 문제 년도 가져오기
//         questionTime = select.dataset.time;

//         dataQuestion(questionTime);

//         //해당 타이틀 가져오기
//         questionTitle = select.innerText;
        
//         select.classList.add("selected");
//     })
// });

// quizMainStart.addEventListener("click", () => {
//     quizMain.classList.add("hide");
//     quizWrapCbt.classList.remove("hide");
//     document.querySelector("body").classList.add("fixed");
//     cbtHeaderTitle.innerHTML = questionTitle;
// });

// 데이터 가져오기
const dataQuestion = (time) => {   
    fetch(`json/${time}.json`)
    .then(res => res.json())
    .then(items => {
        questionAll = items.map((item, index) => {
            const formattedQuestion = {
                question: item.question,
            };
            formattedQuestion.number = index + 1;
            const answerChoices = [...item.incorrect_answers];       //틀린답 불러오기
            formattedQuestion.answer = Math.floor(Math.random() * answerChoices.length) + 1;  //정답 랜덤으로 불러오기
            answerChoices.splice(formattedQuestion.answer - 1, 0, item.correct_answer); //정답이랑 오답이랑 합치기
            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });
            formattedQuestion.choiceLength = answerChoices.length;      //정답 갯수 확인하기 

            
            if(item.hasOwnProperty("question_desc")){        //question_desc 있으면 출력
                formattedQuestion.question_desc = item.question_desc;
            }

            if(item.hasOwnProperty("desc")){        //desc가 있으면 출력
                formattedQuestion.desc = item.desc;
            }
            if(item.hasOwnProperty("keyword")){        //keyword가 있으면 출력
                formattedQuestion.keyword = item.keyword;
            }

            // console.log(formattedQuestion)
            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => console.error(err));
}

// 시작하기
const startGame = () => {   
    newQuestion();      //문제 만들기
    questionDesc();     //옵션
}

// 문제 만들기
const newQuestion = () => {
    const exam = [];
    const omr = [];

    questionAll.forEach((question, number) => {
        exam.push(`
            <div class="cbt">
                <div class="cbt__question">
                    
                    <span class="question">${question.number}. ${question.question}</span>
                    <p class="desc hide">${question.question_desc}</p>
                </div>
                
                <div class="cbt__selects">
                    <input type="radio" id="select${number}_1" class="select" name="select${number}" value="${number}_0" onclick="answerSelect2(this)">
                    <label for="select${number}_1"><span class="choice">${question.choice1}</span></label>

                    <input type="radio" id="select${number}_2" class="select" name="select${number}" value="${number}_1" onclick="answerSelect2(this)">
                    <label for="select${number}_2"><span class="choice">${question.choice2}</span></label>
                    
                    <input type="radio" id="select${number}_3" class="select" name="select${number}" value="${number}_2" onclick="answerSelect2(this)">
                    <label for="select${number}_3"><span class="choice">${question.choice3}</span></label>
                    
                    <input type="radio" id="select${number}_4" class="select" name="select${number}" value="${number}_3" onclick="answerSelect2(this)">
                    <label for="select${number}_4"><span class="choice">${question.choice4}</span></label>
                </div>
                
                <div class="cbt__desc hide">${question.desc}</div>
                <div class="cbt__keyword hide"><a href="#">${question.keyword}</a></div>
            </div> 
        `);

        omr.push(`
            <div class="omr">
                <strong>${question.number}</strong>
                <input type="radio" name="omr${number}" id="omr${number}_1" value="${number}_0" onclick="answerSelect(this)">
                <label for="omr${number}_1"><span class="label-inner">1</span></label>
                <input type="radio" name="omr${number}" id="omr${number}_2" value="${number}_1" onclick="answerSelect(this)">
                <label for="omr${number}_2"><span class="label-inner">2</span></label>
                <input type="radio" name="omr${number}" id="omr${number}_3" value="${number}_2" onclick="answerSelect(this)">
                <label for="omr${number}_3"><span class="label-inner">3</span></label>
                <input type="radio" name="omr${number}" id="omr${number}_4" value="${number}_3" onclick="answerSelect(this)">
                <label for="omr${number}_4"><span class="label-inner">4</span></label>
            </div>
        `);
    })
    
    cbtQuiz.innerHTML = exam.join('');
    cbtOmr.innerHTML = omr.join('');
}

//보기 옵션 
function questionDesc(){
    const all = document.querySelectorAll(".cbt");
    
    // all.forEach(data => {
    //     if(data.querySelector(".desc").innerText == "undefined"){
    //         data.querySelector(".desc").classList.add("hidddde");
    //     }
    // })
}

//정답 확인
function answerQuiz(){
    const quizSelects = document.querySelectorAll(".cbt__selects");   
    // alert("정답을 확인하겠습니까?")

    questionAll.forEach((question, number) => {
        const quizSelectsWrap = quizSelects[number];  
        const userSelector = `input[name=select${number}]:checked`; 
        const userAnswer = (quizSelectsWrap.querySelector(userSelector) || {}).value;

        if(userAnswer == question.answer){
            console.log("정답");
        } else {
            console.log("오답");
            const label = quizSelects[number].querySelectorAll("label");
            label[question.answer-1].classList.add("good")
        }

        //보기 옵션
        const quizKeyword = document.querySelectorAll(".cbt__keyword");
        const quizDesc = document.querySelectorAll(".cbt__desc");

        if(quizDesc[number].innerText == "undefined"){
            quizDesc[number].classList.add("hide");
        } else {
            quizDesc[number].classList.remove("hide");
        }

        if(quizKeyword[number].innerText == "undefined"){
            quizKeyword[number].classList.add("hide");
        } else {
            quizKeyword[number].classList.remove("hide");
        }
    });
    

}
cbtSubmit.addEventListener("click", answerQuiz);

//보기 체크
function answerSelect(elem){
    const answer = elem.value;
    const answerNum = answer.split("_");

    const cbt = document.querySelectorAll(".cbt__quiz .cbt");
    const label = cbt[answerNum[0]].querySelectorAll(".cbt__selects input");
    label[answerNum[1]].checked = true;
}

//보기 체크2
function answerSelect2(elem){
    const answer = elem.value;
    const answerNum = answer.split("_");

    const select = document.querySelectorAll(".cbt__omr .omr");
    const label = select[answerNum[0]].querySelectorAll(".cbt__omr .omr input");
    label[answerNum[1]].checked = true;
}