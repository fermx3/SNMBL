var cardDescription = document.querySelectorAll('.card-desc');

if (window.matchMedia('(max-width: 767px)').matches) {
  cardDescription.forEach(function (description) {
    var newTrimedString = description.innerText.substring(0, 50) + '...';
    description.innerText = newTrimedString;
  });
}
