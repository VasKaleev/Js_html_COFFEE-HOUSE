let btn = document.querySelector(".btn")
let rez = document.querySelector(".rezult")
let rez1 = document.querySelector(".rezult1")
let fam = document.querySelector(".fam")
let ima = document.querySelector(".ima")

const products = {
    product1: {
        checkbox: document.getElementById('checkbox1'),
        quantityInput: document.getElementById('espresso')
    },
    product2: {
        checkbox: document.getElementById('checkbox2'),
        quantityInput: document.getElementById('americano')
    },
    product3: {
        checkbox: document.getElementById('checkbox3'),
        quantityInput: document.getElementById('latte')
    },
    product4: {
        checkbox: document.getElementById('checkbox4'),
        quantityInput: document.getElementById('cappuccino')
    },
    product5: {
        checkbox: document.getElementById('checkbox5'),
        quantityInput: document.getElementById('chocolate_muffin')
    },
    product6: {
        checkbox: document.getElementById('checkbox6'),
        quantityInput: document.getElementById('blueberry_muffin')
    },
    product7: {
        checkbox: document.getElementById('checkbox7'),
        quantityInput: document.getElementById('apple_tart')
    }
};
//console.log(products)
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const quantityInputs = document.querySelectorAll('input[type="number"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calcAmount);
});

quantityInputs.forEach((input) => {
    input.addEventListener('change', calcAmount);
});

/*for (const product of products) {
    let checkboxElement = product.querySelector('input[type="checkbox"]');
    let amountElement = product.querySelector('input[type="number"]');        
        if (checkboxElement.checked) {
            if (amountElement.value <= 0 || amountElement.value > 100) {
            amountElement.value = 1;
            }
        sum += parseInt(checkboxElement.dataset.price) * parseInt(amountElement.value);        
        }        
        else {       
        amountElement.value = 0;        
        }  
    resultElement.textContent = sum; }    
*/

function calcAmount() {
    totalAmount = 0;
    Object.keys(products).forEach((key) => {
        let product = products[key]
        if (product.checkbox.checked) {
            if (product.quantityInput.value <= 0 || product.quantityInput.value > 100) {
                product.quantityInput.value = 1;
            }
            totalAmount += (parseInt(product.quantityInput.value) * parseInt(product.checkbox.value));
        } else {
            product.quantityInput.value = 0;
        }
        if (fam.value) {
            rez.textContent = `Заказчик ` + `${fam.value} ${ima.value}`
            rez1.textContent = ` ${totalAmount} р.`
        } else {
            rez.textContent = `Введите фамилию и имя`
        }
    })
}

function handleClick() {
    rez1.textContent = totalAmount;
    alert(`${fam.value} ${ima.value}\n Итого: ${totalAmount} р.`);
}

btn.addEventListener("click", handleClick);

