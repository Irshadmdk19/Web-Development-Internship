const currency1=document.getElementById('currency-one')
const currency2 = document.getElementById('currency-two')

const amount1=document.getElementById('amount-one')
const amount2=document.getElementById('amount-two')

const rate_display=document.getElementById('rate')
const swap=document.getElementById('btn')

function calculate(){
    const currencyOne=currency1.value;
    const currencytwo=currency2.value;
    fetch(` https://v6.exchangerate-api.com/v6/dc696608bcf623543f273943/latest/${currencyOne}`)
    .then((response)=> response.json())
    .then((data)=>{
        // console.log(data)
        const rate=data.conversion_rates[currencytwo]
        rate_display.innerText=`1 ${currencyOne}= ${rate} ${currencytwo}`;
        amount2.value = (amount1.value * rate).toFixed(2);
    })
}


currency1.addEventListener('change',calculate)
currency2.addEventListener('change',calculate)
amount1.addEventListener('input',calculate)
amount2.addEventListener('input',calculate)

swap.addEventListener('click', () => {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
  });

  calculate()