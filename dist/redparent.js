var redparent = function (uri) {
  if (window.opener && !(navigator.userAgent.indexOf('Opera Mini') > -1)) {
    window.opener.location = uri
    window.close()
  } else {
    window.location.href = uri
  }
}