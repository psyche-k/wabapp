function showWin(){
    /*找到div节点并返回*/
    var winNode = $("#win");
   //方法一：利用js修改css的值，实现显示效果
   // winNode.css("display", "block");
   //方法二：利用jquery的show方法，实现显示效果
   // winNode.show("slow");
    //方法三：利用jquery的fadeIn方法实现淡入
    winNode.fadeIn("slow");
    var winNode = $("#login_link");
    winNode.fadeOut("slow");
}
function hide(){
    var winNode = $("#win");
    //方法一：修改css的值
    //winNode.css("display", "none");
    //方法二：jquery的fadeOut方式
    winNode.fadeOut("slow");
    //方法三：jquery的hide方法
    //winNode.hide("slow");
    var winNode = $("#login_link");
    winNode.fadeIn("slow");
}

function logout() {
  var winNode = $("#login_link");
  winNode.fadeIn("slow");
  winNode = $("#loginsuccess");
  winNode.fadeOut("slow");
  document.getElementById("welcome").innerHTML = "visitor";
}

function loginsuccess(phone) {
  var winNode = $("#login_link");
  winNode.fadeOut("slow");
  document.getElementById("welcome").innerHTML = phone;
  winNode = $("#loginsuccess");
  winNode.fadeIn("slow");
}

function validateCode() {
  var code_input = document.getElementById("code_input").value;
  if(code_input.length <= 0) {
      alert("请输入验证码！");
      return false;
  } else if (code_input.toUpperCase() != code.toUpperCase()) {
      alert("验证码输入有误！");
      createCode();
      return false;
  } else {
      return true;
  }    
} 


function validate_phone(szphone) {
  var testphone = /^(13|15|17|18)\d{9}$/;
  return testphone.test(szphone);
}

function check () {
  if (phone == "") {
    alert("请输入正确的手机号码");
    return false;
  };
  if (password == "") {
    alert("请输入对应的密码");
    return false;
  }
  return true;
}

function login_denglu (argument) {
  phone = document.getElementById("phone_input").value;
  password = document.getElementById("password_input").value;
  if (check()) {
    if(validateCode()) {
      if (password == localStorage.getItem(document.getElementById("phone_input").value)) {
        document.getElementById("phone_input").value = "";
          document.getElementById("password_input").value = "";
        hide();
        loginsuccess(phone);
      } else {
        alert("用户未注册或输入的密码有误");
        document.getElementById("password_input").value = "";
        createCode();
        return false;
      }
    }
  }
  createCode();
}
