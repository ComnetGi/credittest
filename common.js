var totalprice = 0;

function calc_price_total() {
    
    unitprice = document.getElementById("lbUnitPrice").innerHTML;
    licensenum = document.getElementById("tbxLicenseNum").value;



    document.getElementById("lbLicenseNum").innerHTML = licensenum;
    totalprice = licensenum * unitprice;
    document.getElementById("lbTotalPrice").innerHTML = totalprice.toLocaleString() + "  円 (税抜き)";

}

function payBtn() {

    var today = new Date();
    var billingDay = today.getDate();
    today.setDate(today.getDay() + 7);
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var billingStartDay =  year + "/" + month + "/" + day;

    console.log(billingDay);
    console.log(billingStartDay);
    document.getElementById("ac1").value = billingDay;
    document.getElementById("ac4").value = billingStartDay;
    document.getElementById("acam").value = totalprice;
    document.getElementById("actx").value = totalprice * 0.1;

    // document.getElementById("tram").value = totalprice;
    // document.getElementById("trtx").value = totalprice * 0.1;

}

