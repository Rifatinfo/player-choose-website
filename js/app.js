

const allBtn = document.getElementsByClassName('btn-add');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const name = e.target.parentNode.parentNode.childNodes[1].innerText;
        const playerPrice = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        
       
        e.target.setAttribute('disabled', false);
        
        
        // Validation check 
        const firstCountCard = getConvertedValue('card');
        const leftCountCheck = getConvertedValue('left');
        
        if (firstCountCard + 1 > 2 || leftCountCheck - 1 < 0) {
            alert('Limit exceeded: Only 4 seats allowed.');
            return;
        }
        e.target.parentNode.parentNode.parentNode.style.backgroundColor = 'gray'; 
    

        // update budget 
        
        const Price = getConvertedValue('budget');
        document.getElementById('budget').innerText = Price - parseInt(playerPrice);
        
        // update cardCount
        const cardCount = getConvertedValue('card');
        document.getElementById('card').innerText = cardCount + 1;
        
        // update leftCount 
        const leftCount = getConvertedValue('left');
        document.getElementById('left').innerText = leftCount - 1;


       
        const selectedContainer = document.getElementById('selected-player-container');

        const div = document.createElement('div');
        // div.classList.add('selected-div');
        div.classList.add('flex');
        div.classList.add('p-4');
        
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        
        p1.innerText = name;
        p2.innerText = playerPrice;
        p3.innerText = category;
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        
        selectedContainer.appendChild(div);
        
        
        
        
        updateTotalCost(playerPrice);
        grandTotal();



    })
}


function grandTotal(status){
    const totalCost =  getConvertedValue('total-cost');
    if(status == undefined){
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
    const couponCode = document.getElementById('coupon-code').value;
        if(couponCode == 'couple24' || couponCode == 'new24'){
            const grandTotals = totalCost * 0.2 ;
            document.getElementById('grand-total').innerText = grandTotals;
            document.getElementById('coupon-code').value = '';
        }
        else{
            alert('Please Enter valid coupon code');
        }
    }

}



function updateTotalCost(value){
   const totalCost =  getConvertedValue('total-cost');          // value - 0
   const sum = totalCost + parseInt(value);
   document.getElementById('total-cost').innerText = sum;
}



function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
    
}