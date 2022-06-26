const username = document.getElementById("username");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const date = document.getElementById("date");
const gioitinh = document.getElementById("gioitinh");
const country = document.getElementById("country");
const btn_register = document.getElementById("btn_register");
const body = document.querySelectorAll('body');
body[0].setAttribute('style','background:#ccc')

function validate() {
  let name = document.myform.username.value;
  let pass1 = document.myform.password1.value;
  let pass2 = document.myform.password2.value;
  let emaill = document.myform.email.value;
  let myPhone = document.myform.phone.value;
  let myDate = document.myform.date.value;
  let sexual = document.myform.gioitinh.value;
  let location = document.myform.country.value;
  let status = false;

  if (name == "") {
    document.getElementById("error1").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Bạn chưa nhập tên đăng nhập !";
    status = false;
  } else if (name.length < 8) {
    document.getElementById("error1").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Tên đăng nhập phải có 8 ký tự trở lên!";
    status = false;
  } else {
    document.getElementById("error1").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp Lệ";
    status = true;
  }
  if (pass1 == "") {
    document.getElementById("error2").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Mật khẩu không được để trống !";
    status = false;
  } else if (pass1.length < 8 || pass1.length > 16) {
    document.getElementById("error2").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Mật khẩu phải dài 8 ký tự tối đa 16 ký tự!";
    status = false;
  } else {
    document.getElementById("error2").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (pass2 == "") {
    document.getElementById("error3").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Mật khẩu nhập lại không được để trống !";
    status = false;
  } else if (pass1 != pass2) {
    document.getElementById("error3").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Mật khẩu nhập lại không đúng !";
    status = false;
  } else {
    document.getElementById("error3").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (emaill == "") {
    document.getElementById("error4").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Không được để trống Email !";
    status = false;
  } else if (!isEmail(emaill)) {
    document.getElementById("error4").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Email không đúng định dạng !";
    status = false;
  } else {
    document.getElementById("error4").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (myPhone == "") {
    document.getElementById("error5").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Không được để trống SĐT !";
    status = false;
  } else if (!isPhone(myPhone)) {
    document.getElementById("error5").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> SĐT không đúng định dạng !";
    status = false;
  } else {
    document.getElementById("error5").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (myDate == "") {
    document.getElementById("error6").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Không được bỏ năm sinh !";
    status = false;
  } else {
    document.getElementById("error6").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (sexual == "") {
    document.getElementById("error7").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Không được bỏ trống giới tính !";
    status = false;
  } else {
    document.getElementById("error7").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }
  if (location == "") {
    document.getElementById("error8").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Không được bỏ trống quê quán!";
    status = false;
  } else if (location.length < 5) {
    document.getElementById("error8").innerHTML =
      " <img src='https://viettuts.vn/example-php/javascript/unchecked.gif'/> Nhập sai kí tự!";
    status = false;
  } else {
    document.getElementById("error8").innerHTML =
      " <img src='https://ooc.vn/wp-content/uploads/2021/07/checked-300x300.png'/> Hợp lệ";
    status = true;
  }

  return status;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
