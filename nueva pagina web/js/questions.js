(function (){
    const titlequestions = [...document.querySelectorAll('.questions__title')];
    console.log(titlequestions)
    titlequestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            alert('hola');
        });
    });
})();
