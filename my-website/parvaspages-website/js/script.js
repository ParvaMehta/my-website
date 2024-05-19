document.addEventListener('DOMContentLoaded', function () {
    const accountantForm = document.getElementById('accountantForm');
    const contentWriterForm = document.getElementById('contentWriterForm');

    if (accountantForm) {
        accountantForm.addEventListener('submit', function (event) {
            if (!validateForm(accountantForm)) {
                event.preventDefault();
            }
        });
    }

    if (contentWriterForm) {
        contentWriterForm.addEventListener('submit', function (event) {
            if (!validateForm(contentWriterForm)) {
                event.preventDefault();
            }
        });
    }
});

function validateForm(form) {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const resume = form.querySelector('#resume');

    if (!name.value.trim() || !email.value.trim() || !resume.value.trim()) {
        alert('Please fill in all required fields.');
        return false;
    }

    return true;
}
