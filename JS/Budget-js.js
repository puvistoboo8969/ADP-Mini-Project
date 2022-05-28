var balance = 25000;

document.getElementById("Add_Income").addEventListener("click", Calc_Inc);
document.getElementById("Add_Expence").addEventListener("click", Calc_Exp);

function Calc_Inc(){

    var inc_amt = document.forms["income-form"]["Income-amt"].value;

    inc_amt = parseInt(inc_amt);
    balance += inc_amt;

    document.getElementById("Balance-Budget").innerHTML = balance + " ₹";
    var inc_mode = document.forms["income-form"]["Income-mode"].value;

    // update history
    const para = document.createElement("h3");
    const node = document.createTextNode("Income:      "+ inc_mode +"    "+ inc_amt);
    para.appendChild(node);
    const element = document.getElementById("history");
    element.appendChild(para);
}

function Calc_Exp(){

    var exp_amt = document.forms["expence-form"]["Expence-amt"].value;
    exp_amt = parseInt(exp_amt);
    balance -= exp_amt;

    document.getElementById("Balance-Budget").innerHTML = balance + " ₹";
    var exp_mode = document.forms["expence-form"]["Expence-mode"].value;

    // update history
    const para = document.createElement("h3");
    const node = document.createTextNode("Expence:   " +"    "+ exp_mode +"    " + exp_amt);
    para.appendChild(node);
    const element = document.getElementById("history");
    element.appendChild(para);
}
