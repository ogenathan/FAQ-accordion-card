//select dom elements
const questions= document.querySelectorAll(".question");

questions.forEach(function(question) {
    //const btn = question.querySelector(".question-btn")
    question.addEventListener( "click", function(){
        question.classList.toggle("show-text");
        
    })
})
