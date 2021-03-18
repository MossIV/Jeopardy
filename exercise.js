function getCategories(numOfCategories){
    let categories = fetchCategoriesFromAPI(numOfCategories)
    return categories
}

function getQuestions(category){
    let questionsArray = [];
    for (let i = 0; i < category.length; i+=1){
        let currentCategory = category[i];
        let questionsForThisCatogory = fetchQuestionsFromAPI(currentCategory);
        questionsArray.push(questionsForThisCatogory);
    }
    return questionsArray
}


let categoriesForGames = getCategories(5)
let questionForGames = getQuestions(categoriesForGames)
addToGame(categoriesForGames,questionForGames)