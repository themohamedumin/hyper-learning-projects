function togglePassword() {
    const pwd = document.getElementById('password');
    const btn = document.getElementById('eyeBtn');
    const icon = btn.querySelector('img');

    if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.src = 'Assets/hide.png';
        btn.setAttribute('aria-label', 'Hide password');
        icon.alt = 'Hide';
    } else {
        pwd.type = 'password';
        icon.src = 'Assets/view.png';
        btn.setAttribute('aria-label', 'Show password');
        icon.alt = 'Show';
    }
}