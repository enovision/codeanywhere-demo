/* auto refresh on blur */

function onBlur() {
  frontEditButton_refreshMe = true;
}

function onFocus() {
  if (frontEditButton_refreshMe) {
    window.location.reload(true);
  }
}

// check for Internet Explorer
if ( /*@cc_on!@*/ false) {
  document.onfocusin = onFocus;
  document.onfocusout = onBlur;
} else {
  window.onfocus = onFocus;
  window.onblur = onBlur;
}