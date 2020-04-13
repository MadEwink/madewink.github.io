var style_cookie_name = "style";

/*
 * In order to change style through a button,
 * if I use the disabled attribute, it prevents browser options
 * I haven't found a method that does not use this attribute yet
 */

function activateAlternate(title) {
  var links = document.getElementsByTagName("link");
  for (var link of links) {
    if (!link.hasAttribute("title")) continue;
    if (link.getAttribute("title") != title)
      link.disabled = true;
    else
      link.disabled = false;
  }
}

function setDarkTheme() {
  activateAlternate("Dark");
  document.getElementById('light-theme-button').style="display:block";
  document.getElementById('dark-theme-button').style="display:none";
  setStyleCookie("dark");
}

function setLightTheme() {
  activateAlternate("Light");
  document.getElementById('dark-theme-button').style="display:block";
  document.getElementById('light-theme-button').style="display:none";
  setStyleCookie("light");
}

function setStyleFromCookie() {
  setDarkTheme();
  var cookies = document.cookie;
  if (cookies.length == 0) return;
  var array = cookies.split('; ');
  for (i = 0 ; i < array.length ; i++)
  {
    var matches = array[i].match(style_cookie_name+'=.*');
    if (matches == null) return;
    var value_index = matches[0].indexOf('=');
    if (value_index == -1) return;
    var value = matches[0].substr(value_index+1);
    if (value.localeCompare("light") == 0)
      setLightTheme();
  }
}

function setStyleCookie(style_name) {
  document.cookie = style_cookie_name+'='+style_name;
}
