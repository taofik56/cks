const generateQrBtn = document.getElementById("generateQrBtn");
    const phoneInput = document.getElementById("phone");
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const errorMessage = document.getElementById("errorMessage");

    generateQrBtn.addEventListener("click", () => {
      const phone = phoneInput.value;

      // Validate phone number
      if (!phone || phone.length < 10 || phone.length > 15 || isNaN(phone)) {
        errorMessage.textContent = "Masukkan nomor telepon yang valid!";
        qrCodeContainer.style.display = "none"; // Hide QR code if error
        return;
      }

      errorMessage.textContent = ""; // Clear previous error
      qrCodeContainer.style.display = "block"; // Show QR code
    });
