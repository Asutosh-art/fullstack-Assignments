function ctof() {
    const celcius = document.getElementById('celcius').value;
    const result = document.getElementById('result');
    console.log(result);
    const farenheit =(celcius * 9/5)+ 32;
    result.innerText = farenheit;
}

document.getElementById('btn').addEventListener('click', ctof)