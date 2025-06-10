 let imgbox = document.getElementById("imgbox");
        let qrImg = document.getElementById("qrImg");
        let qrtext = document.getElementById("qrtext");

        function generateQR() {
            if(qrtext.value.length > 0){
                qrImg.src = "https://quickchart.io/qr?text=" + encodeURIComponent(qrtext.value);
                imgbox.classList.add("show-img");
            } else {
                qrtext.classList.add('error');
                setTimeout(() => {
                    qrtext.classList.remove('error');
                }, 500);
            }
        }