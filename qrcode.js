function generateQRCode() {
    const upiId = document.getElementById("upiId").value;
    const payeeName = document.getElementById("payeeName").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;
  
    if (!upiId || !payeeName || !amount) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const upiUri = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&tn=${note}&cu=INR`;
  
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = ""; // Clear previous QR
  
    QRCode.toCanvas(document.createElement('canvas'), upiUri, function (error, canvas) {
      if (error) console.error(error);
      qrCodeContainer.appendChild(canvas);
    });
  }
  