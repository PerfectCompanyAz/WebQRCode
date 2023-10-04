document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const textInput = document.getElementById("text-input");
    const qrCodeImage = document.getElementById("qr-code");

    generateButton.addEventListener("click", function () {
        const inputValue = textInput.value;
        if (inputValue.trim() !== "") {
            const qr = qrcode(0, 'M');
            qr.addData(inputValue);
            qr.make();
            const qrDataURL = qr.createDataURL(4);
            qrCodeImage.src = qrDataURL;
        }
    });
});
