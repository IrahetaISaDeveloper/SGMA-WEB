document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email-input').value;  // Adjusted to get value from an input field with a correct ID
    const password = document.getElementById('password-input').value;  // Adjusted to get value from an input field with a correct ID

    // Dummy authentication logic
    if (email && password) {
        // Simulated role assignment based on email format
        let role = '';

        const studentRegex = /^\d+@ricaldone\.edu\.sv$/;        // Regex for students
        const leaderRegex = /^_.*@ricaldone\.edu\.sv$/;        // Regex for leaders
        const coordinatorRegex = /^[^_]+_.*@ricaldone\.edu\.sv$/;   // Same regex for coordinators, can be adjusted if needed

        if (studentRegex.test(email)) {
            role = 'student';
        } else if (leaderRegex.test(email)) {
            role = 'leader';
        } else if (coordinatorRegex.test(email)) {
            role = 'coordinator';
        } else {
            alert('Role not recognized.');
            return;
        }

        // Redirect based on role
        switch(role) {
            case 'student':
                window.location.href = 'student-index.html'; // Student home page
                break;
            case 'leader':
                window.location.href = 'coordinator-index.html'; // Leader home page
                break;
            case 'coordinator':
                window.location.href = 'coordinator-index.html'; // Coordinator home page
                break;
            default:
                alert('Por favor, verifica tus credenciales.');
        }
    } else {
        alert('Por favor, ingresa tus credenciales.');
    }
});

