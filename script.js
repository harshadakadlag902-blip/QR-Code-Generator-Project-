let qrcode = new QRCode(document.querySelector(".D"));

qrcode.makeCode("Why did you scan me?");

function generateQR() {
    let input = document.querySelector("input");

    if (input.value) {
        qrcode.makeCode(input.value);
    } else {
        alert("Please enter something!");
    }
}