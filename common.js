var totalprice = 0;

function calc_price_total() {
    
    unitprice = document.getElementById("lbUnitPrice").innerHTML;
    licensenum = document.getElementById("tbxLicenseNum").value;



    document.getElementById("lbLicenseNum").innerHTML = licensenum;
    totalprice = licensenum * unitprice;
    document.getElementById("lbTotalPrice").innerHTML = totalprice.toLocaleString() + "  円 (税抜き)";

}

function payBtn() {

    var billingStartDay = new Date();
    var billingDay = billingStartDay.getDate();
    billingStartDay.setDate(billingStartDay.getDate() + 7);

    console.log(billingDay);
    console.log(billingStartDay);

    document.getElementById("am").value = totalprice;
    document.getElementById("tx").value = totalprice * 0.1;
    document.getElementById("acam").value = totalprice;
    document.getElementById("actx").value = totalprice * 0.1;
    document.getElementById("ac1").value = billingDay;
    document.getElementById("ac4").value = billingStartDay;
}

