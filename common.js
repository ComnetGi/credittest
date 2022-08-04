var priceTaxExcluded = 0;
var tax = 0;
var userIds = "";

function calc_price_total() {
    num = 0;
    b = document.querySelectorAll(".form-check-input");
    userIdsTemp = "";
    for (var i = 1; i < b.length; i++) {
        if (b[i].checked) {
            userIdsTemp += b[i].id + ",";
            num += 1;
            if (num < 6) {
                document.getElementById("unitPrice").innerHTML = "0";
            } else {
                document.getElementById("unitPrice").innerHTML = "300";
                priceTaxExcluded = num * b[i].value;
                tax = priceTaxExcluded * 0.1;
            }
        }
    }
    userIds = userIdsTemp;
    console.log(userIds);
    document.getElementById("licenseNum").innerHTML = num;
    document.getElementById("totalPrice").innerHTML = priceTaxExcluded.toLocaleString() + "  円 (税抜き)";

}

function payBtn() {
    document.getElementById("am").value = priceTaxExcluded;
    document.getElementById("tx").value = tax;
    document.getElementById("userIds").value = userIds;

}

function checkBtn() {
    if (document.getElementById("flexSwitchCheckChecked").checked) {
        document.getElementById("firstPay").style.display = "none";
        document.getElementById("notFirstPay").style.display = "block";
    } else {
        document.getElementById("firstPay").style.display = "block";
        document.getElementById("notFirstPay").style.display = "none";
    }
}