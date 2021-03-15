var analyzeBtn = document.getElementById("analyzeBtn")
analyzeBtn.addEventListener("click", analyze)
 
function analyze(){
    var size=""
    var risk=""
    var difficult=""
    var numberUseCase=""
    var category = ""

    var sizeElements = document.getElementsByName("size")
    for(i = 0; i<sizeElements.length; i++)
    {
        if(sizeElements[i].checked)
        {
            console.log(sizeElements[i])
            size = sizeElements[i].value
        }
    }

    var riskElements = document.getElementsByName("risk")
    for(i = 0; i<riskElements.length; i++)
    {
        if(riskElements[i].checked)
        {
            risk = riskElements[i].value
        }
    }

    var difficultyElements = document.getElementsByName("difficulty")
    for(i = 0; i<difficultyElements.length; i++)
    {
        if(difficultyElements[i].checked)
        {
            console.log(difficultyElements[i])
            difficult = difficultyElements[i].value
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
            numberUseCase = numberUseCaseElements[i].value
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
    //Deimos
    //Ganymede
    //Herimppe
    //Mars
    //Jupiter
    //Tebe
    console.log(size + risk + difficult + numberUseCase)
    console.log("AWSD")
    if(size=="small")
    {
        if(difficult=="easy")
        {
            if(risk=="small")
            {
                console.log("Deimos")
                category = "Deimos"
            }
            else
            {
                console.log("Ganymede")
                category = "Ganymede"
            }
        }
        else
        {
            console.log("Herimppe")
            category="Herimppe"
        }
    }
    else 
    {
        if(difficult=="easy")
        {
            console.log("Jupiter")
            category="Jupiter"
        }
        else
        {
            if(numberUseCase=="more")
            {
                console.log("Mars")
                category="Mars"
            }
            else
            {
                console.log("Tebe")
                category="Tebe"
            }
        }
    }
    var textResult = document.getElementById("textResult")
    textResult.textContent="Projekt należy do kategorii "+category+"."

}