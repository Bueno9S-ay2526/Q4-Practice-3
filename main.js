function Verify() {
  var sectCode = document.getElementById('LbrStn').value;
  switch (sectCode) {
    case "FS";
      document.getElementById('DLbrStn').innerhtml="You will be directed to the Fiction Section";break;
    case "NS";
      document.getElementById('DLbrStn').innerhtml="You will be directed to the Non-Fiction Section";break;
    case "RS";
      document.getElementById('DLbrStn').innerhtml="You will be directed to the Reference Section";break;
    case "Default";
      document.getElementById('DLbrStn').innerhtml="The section that you are looking for does not exist";break;
  }
}
