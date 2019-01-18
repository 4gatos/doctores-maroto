window.onload = function() {
  function linkScroll(linkId, containerId) {
    var link = document.getElementById(linkId);
    var containerId = document.getElementById(containerId);

    window.scrollTo({
      top: containerId.offsetTop,
      behavior: 'smooth'
    });
  }
  var links = document.querySelectorAll('header ul li');
  links.forEach(function(element) {
    element.addEventListener(
      'click',
      function(){
        linkScroll(element.id, element.id + '-container');
      },
      false);
  });
}