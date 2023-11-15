function formatText(command, value = null) {
  document.execCommand(command, false, value);
}

let btn = document.getElementsByTagName("button");
