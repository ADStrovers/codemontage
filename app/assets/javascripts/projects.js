window.onload = function() {
  var tags = [];
  var href = window.location.origin + window.location.pathname
  console.log(href)
  
  tags = document.getElementsByClassName("tag_radio");
  
  for (i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", function() {
      if (this.value === "all") {
        window.location.href = href;
      } else {
        window.location.href = href +"?tags=" + this.value;
      };
    });
  };
  
};