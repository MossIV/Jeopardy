function getCategories(numOfCategories){
    let categories = fetchCategoriesFromAPI(numOfCategories)
    return categories
}

function getQuestions(category){
    for (let i = 0; i < length(category); i+=1){
        question[i] = fetchQuestionsFromAPI(category)
    }
    return question
}