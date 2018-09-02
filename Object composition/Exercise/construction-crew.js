function constructionCrew (worker){
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }
));