
function myFunction(){
    var sizeElements = document.getElementsByName("size")
    for(i = 0; i<sizeElements.length; i++)
    {
        if(sizeElements[i].checked)
        {
            console.log(sizeElements[i])
        }
    }

    var riskElements = document.getElementsByName("risk")
    for(i = 0; i<riskElements.length; i++)
    {
        if(riskElements[i].checked)
        {
            console.log(riskElements[i])
        }
    }

    var difficultyElements = document.getElementsByName("difficulty")
    for(i = 0; i<difficultyElements.length; i++)
    {
        if(difficultyElements[i].checked)
        {
            console.log(difficultyElements[i])
        }
    }

    var startLevelElements = document.getElementsByName("startLevel")
    for(i = 0; i<startLevelElements.length; i++)
    {
        if(startLevelElements[i].checked)
        {
            console.log(startLevelElements[i])
        }
    }

    var numberUseCaseElements = document.getElementsByName("numberUseCase")
    for(i = 0; i<numberUseCaseElements.length; i++)
    {
        if(numberUseCaseElements[i].checked)
        {
            console.log(numberUseCaseElements[i])
        }
    }

    var numberCriticalUseCaseElements = document.getElementsByName("numberCriticalUseCase")
    for(i = 0; i<numberCriticalUseCaseElements.length; i++)
    {
        if(numberCriticalUseCaseElements[i].checked)
        {
            console.log(numberCriticalUseCaseElements[i])
        }
    }

}