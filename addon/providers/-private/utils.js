let alternativeLoadFacebookConnectScript = false;

export function overrideLoadFacebookConnectScript(state) {
  alternativeLoadFacebookConnectScript = state;
}

export function resetLoadFacebookConnectScript() {
  alternativeLoadFacebookConnectScript = false;
}

export function loadFacebookConnectScript(src) {
  if (alternativeLoadFacebookConnectScript) { alternativeLoadFacebookConnectScript(src); }
  let scriptTag = document.createElement('script');
  let firstScriptTag = document.getElementsByTagName('script')[0];
  scriptTag.src = src;
  firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
}
