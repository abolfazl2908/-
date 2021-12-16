function localsteroge() {
  var email = document.forms["form_local"]["email"].value;
  var password = document.forms["form_local"]["password"].value;
  window.localStorage.setItem("yourtoken", "@ebrtfo" + password + email + "333####")
  var x = window.localStorage.getItem("yourtoken")
  alert(x)
  alert("این توکن که یک استرینگ هست سرور به ما میدهد این توکن برای ورود به سایت و دیدن صفحات آن به کار میرود ابته تازمانی که منقضی نشود")
}
