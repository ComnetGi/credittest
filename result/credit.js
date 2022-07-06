window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('rst'));
    document.getElementById("rst1").innerHTML = urlParams.get('rst');
}
