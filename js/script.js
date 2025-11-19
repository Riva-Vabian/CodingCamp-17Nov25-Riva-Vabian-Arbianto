document.addEventListener('DOMContentLoaded', function() {

    function askAndDisplayUserName() {
        const userNameSpan = document.getElementById('userName');
        let userName = '';

        const storedName = localStorage.getItem('visitorName');

        if (storedName) {
            userName = storedName;
        } else {
            let inputName = prompt("Siapa nama Anda?");
            if (inputName === null || inputName.trim() === "") {
                userName = "Pengunjung"; 
            } else {
                userName = inputName.trim();
                localStorage.setItem('visitorName', userName);
            }
        }
        userNameSpan.textContent = userName;
    }

    askAndDisplayUserName();

    function updateCurrentTime() {
        const currentTimeSpan = document.getElementById('currentTime');
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        currentTimeSpan.textContent = now.toLocaleDateString('en-US', options);
    }
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    const messageForm = document.getElementById('messageForm');
    const formDataDisplay = document.getElementById('formDataDisplay');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;

        const gender = genderElement ? genderElement.value : 'Tidak Diisi';

        if (!name || !dob || !genderElement || !message) {
            alert('Mohon lengkapi semua kolom formulir.');
            return;
        }

        formDataDisplay.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${dob}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;

        messageForm.reset();
    });
});