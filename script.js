const converter1 = document.querySelector('#converter1')
const converter2 = document.querySelector('#converter2')
const leftCategory = document.querySelector('.left-category')
const rightCategory = document.querySelector('.right-category')
const result = document.querySelector('.resultt')
const btn = document.querySelector('button')


const exchangeCurrency = () => {
    fetch(`https://api.exchangerate.host/latest?base=${leftCategory.value}&symbols=${rightCategory.value}`)

    .then(res => res.json())
    .then(data =>{

        const leftCategory1 = leftCategory.value
        const rightCategory2 = rightCategory.value

        const rate = data.rates[rightCategory2]
        result.textContent = `1 ${leftCategory1} = ${rate.toFixed(4)} ${rightCategory2}`
        converter2.value = (converter1.value * rate).toFixed(2)
       

        const sameSelectedValuesFix = () => {
            if(leftCategory.value === rightCategory.value){
                result.textContent = `1 ${leftCategory1} = ${rate} ${rightCategory2}`
            }
        }
            sameSelectedValuesFix()
    })
}


const changeValuesEachother2 = () => {
    const thirdCategory = leftCategory.value
    leftCategory.value = rightCategory.value
    rightCategory.value = thirdCategory
   
    
}






leftCategory.addEventListener('change', exchangeCurrency)
rightCategory.addEventListener('change', exchangeCurrency)
converter1.addEventListener('input', exchangeCurrency)
btn.addEventListener('click', () =>{
    changeValuesEachother2()
    exchangeCurrency()
})


exchangeCurrency()