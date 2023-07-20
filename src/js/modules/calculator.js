

const formBtn = document.querySelector('.form__btn')

formBtn.addEventListener('click', calculateBMI);


function calculateBMI() {
    let YourHeight = parseInt(document.getElementById('YourHeight').value);
    let YourWeight = parseInt(document.getElementById('YourWeight').value);
    let YourAge = parseInt(document.getElementById('YourAge').value);
    
    let result = document.getElementById('result');

    if (YourHeight === "" || isNaN(YourHeight))
        result.innerHTML = "Напишите число!";
 
    else if (YourWeight === "" || isNaN(YourWeight))
        result.innerHTML = "Напишите число!";

    else if (YourAge === "" || isNaN(YourAge))
    result.innerHTML = "Напишите число!";
    
    // If both input is valid, calculate the bmi
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (YourWeight / ((YourHeight * YourHeight)
                            / 10000)).toFixed(2);
 
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `<span>${bmi}</span> - Надо подкачаться`;
 
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `<span>${bmi}</span> - Отличный результат`;
 
        else result.innerHTML =
            `<span>${bmi}</span> - Надо похудеть`;
    }
}




export default calculateBMI;