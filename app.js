// for calculate button
document .getElementById("calculate-btn").addEventListener('click',function(){
//for income
const incomeText=document.getElementById('income');
const income=parseFloat(incomeText.value);
//for food
const foodText=document.getElementById('food');
const food=parseFloat(foodText.value);
//for rent
const rentText=document.getElementById("rent");
const rent=parseFloat(rentText.value);
//for clothes
const clothText=document.getElementById('cloth');
const cloth=parseFloat(clothText.value);
const result=food+rent+cloth;
//total expenses
const total=document.getElementById('total');
total.innerText=result;
//Balance
const left=income-result;
const balance=document.getElementById("balance");
balance.innerText=left;
})
//for save button
document.getElementById("save-btn").addEventListener('click',function(){
    //for income
const incomeText=document.getElementById('income');
const income=parseFloat(incomeText.value);
const save=document.getElementById("save");
const saveValue=parseInt(save.value);
const percentage=parseFloat(saveValue/100);
const savingTotal=income*percentage;
//Saving amount
const saveText=document.getElementById("save-amount");
saveText.innerText=parseFloat(savingTotal);

const saveTotal=saveText.innerText;
//remaining balance
//for food
const foodText=document.getElementById('food');
const food=parseFloat(foodText.value);
//for rent
const rentText=document.getElementById("rent");
const rent=parseFloat(rentText.value);
//for clothes
const clothText=document.getElementById('cloth');
const cloth=parseFloat(clothText.value);
const result=food+rent+cloth;
//total expenses
const total=document.getElementById('total');
total.innerText=result;
const left=income-result;
const balance=document.getElementById("balance");
balance.innerText=left;

const remain=document.getElementById('remain');
remain.innerText=balance.innerText-saveTotal;






})
