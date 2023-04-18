function store() {
    var name = document.getElementById('user_name');
    var email = document.getElementById('email_');
    var tel = document.getElementById('phone_');
    var pw = document.getElementById('password_');

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Vui lòng nhập họ và tên');
    } else if (email.value.length == 0) {
        alert('Vui lòng nhập email');
    } else if (tel.value.length == 0) {
        alert('Vui lòng nhập số điện thoại');
    } else if (pw.value.length == 0) {
        alert('Vui lòng nhập mật khẩu');
    } else if (name.value.length == 0 && email.value.length == 0 && tel.value.length == 0 && pw.value.length == 0) {
        alert('Vui lòng điền mọi thông tin đăng ký');
    } else if (pw.value.length > 8) {
        alert('Mật khẩu chỉ được tối đa 8 ký tự');
    } else if (!pw.value.match(numbers)) {
        alert('Vui lòng nhập đúng định dạng số');
    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('Mật khẩu cần phải có ít nhất 1 ký tự thường, 1 ký tự hoa và 1 số');
    } else if (!pw.value.match(upperCaseLetters)) {
        alert('Mật khẩu cần phải có ít nhất 1 ký tự thường, 1 ký tự hoa và 1 số');
    } else {
        localStorage.setItem('username', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('telephone', tel.value);
        localStorage.setItem('password', pw.value);
        alert('Tài khoản của bạn đã được tạo thành công!');
    }
}

function check() {
    var storedEmail = localStorage.getItem('email');
    var storeTel = localStorage.getItem('telephone');
    var storedPassword = localStorage.getItem('password');

    var loginid = document.getElementById('login_id');
    var password = document.getElementById('user_password');

    if ((loginid.value == storedEmail  && password.value == storedPassword) || (loginid.value == storeTel && password.value == storedPassword)) {
        alert('Đăng nhập thành công');
        window.location.href = "https://www.youtube.com/";
    } else if (loginid.value.length == 0 && password.value.length == 0) {
        alert('Vui lòng nhập đầy đủ');
    } else if (loginid.value.length == 0) {
        alert('Vui lòng nhập tài khoản');
    } else if (password.value.length == 0) {
        alert('Vui lòng nhập mật khẩu');
    } else if (loginid.value != storedEmail || password.value != storedPassword || loginid.value != storeTel) {
        alert('Đăng nhập thất bại');
    }
}