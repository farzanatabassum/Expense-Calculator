//for income
function getIncomeValue(){
    const incomeText=document.getElementById('income');
    const income=parseFloat(incomeText.value);
    return income;
}
//for expenses
function getExpenseValue(expenseId){
    const expenseText=document.getElementById(expenseId)
    const expense=parseFloat(expenseText.value);
    return expense;
}
//for total expense
function expenseTotalValue(id){
    //for food
    const food=getExpenseValue('food');
    //for rent
    const rent=getExpenseValue('rent');
    //for clothes
    const cloth=getExpenseValue('cloth');
    //total expense
    const result=food+rent+cloth;
    const total=document.getElementById(id);
    total.innerText=result;
    return result;

}
//for balance
function updateBalance(id){
    const result=expenseTotalValue('total');
    const left=getIncomeValue()-result;
    const balance=document.getElementById(id);
    balance.innerText=left;
    const balanceTotal=balance.innerText;
    return balanceTotal;

}
// for calculate button
document .getElementById("calculate-btn").addEventListener('click',function(){
    //for income
    const income=getIncomeValue();

    //Balance
    updateBalance('balance');


})


//for save button
document.getElementById("save-btn").addEventListener('click',function(){
    //for income
    const income=getIncomeValue();
    //for save button
    const save=document.getElementById("save");
    const saveValue=parseInt(save.value);
    const percentage=parseFloat(saveValue/100);
    const savingTotal=income*percentage;
    //Saving amount
    const saveText=document.getElementById("save-amount");
    saveText.innerText=parseFloat(savingTotal);
    const saveTotal=saveText.innerText;
    //total expenses
    const balanceTotal=updateBalance('balance');
    //remaining balance
    const remain=document.getElementById('remain');
    remain.innerText=balanceTotal-saveTotal;






})
