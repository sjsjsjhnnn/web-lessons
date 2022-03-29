function watCounting(){
    let wat = prompt("Ведіть кількість ват для конвертації");

    //1 Вт= 0.001 кВт=0.0000010 МВт=0.00135962162 к.с.

    let kWat = wat *  0.001;
    let mWat = wat / 1e+6;
    let csWat = wat / 735;

    alert(`Ват: ${wat}. Кіловат: ${kWat}. Мегават: ${mWat}. Кінські сили: ${csWat}`)
}

function scholarship(){
    /*З клавіатури вводяться оцінки студента з іспитів по трьом дисциплінам. З’ясувати, 
    чи буде він отримувати стипендію, якщо вона нараховується всім студентам з середнім балом не менше 4 (по п’ятибальній системі)*/

    let tf = 1;
    while(tf == 1){
        var gradeOne = 1 * prompt("Ведіть оцінку за перший іспит");

        if(gradeOne < 6){
            tf = 2;
        }else{
            alert("Вибачте, але ви ввели некоректну оцінку, введіть її ще раз");
        }
    }
    while(tf == 2){
        var gradeTwo = 1 * prompt("Ведіть оцінку за другий іспит");

        if(gradeTwo < 6){
            tf = 1;
        }else{
            alert("Вибачте, але ви ввели некоректну оцінку, введіть її ще раз");
        }
    }
    while(tf == 1){
        var gradeTree = 1 * prompt("Ведіть оцінку за третій іспит");

        if(gradeTree < 6){
            tf = 2;
        }else{
            alert("Вибачте, але ви ввели некоректну оцінку, введіть її ще раз");
        }
    }

    let averageScore = (gradeOne + gradeTwo + gradeTree) / 3;

    console.log(gradeTree)

    if(averageScore >= 4){
        alert("Вітаю ви отримуватиме стипендію!")
    }else{
         alert("Нажаль вам не вистачило балів для отримування стипендії")
    }
}