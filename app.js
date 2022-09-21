$(document).ready(function () {
    if(window.innerWidth <= 700){
        $('ul').slideUp();
    }
    $('.burger').click(function () { 
        $('.burger').hide()
        $('.close').show()
        $('ul').slideDown();
    });
    $('.close').click(function () { 
        $('.close').hide()
        $('.burger').show()
        $('ul').slideUp();
    });
});




let creations = document.querySelector('.creations')
if(window.innerWidth >= 900){
    creations.innerHTML = `    <h1>our creations</h1>
    <div class="card">
      <img src="./images/desktop/image-deep-earth.jpg" alt="earth's picture">
      <p class="cardName">Deep <br> earth</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-night-arcade.jpg" alt="earth's picture">
      <p class="cardName">night <br> arcade</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-soccer-team.jpg" alt="earth's picture">
      <p class="cardName">soccer <br> team vr</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-grid.jpg" alt="earth's picture">
      <p class="cardName">the <br> grid</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-from-above.jpg" alt="earth's picture">
      <p class="cardName">from up <br> above vr</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-pocket-borealis.jpg" alt="earth's picture">
      <p class="cardName">Pocket <br> borealis</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-curiosity.jpg" alt="earth's picture">
      <p class="cardName">the <br> curiosity</p>
    </div>

    <div class="card">
      <img src="./images/desktop/image-fisheye.jpg" alt="earth's picture">
      <p class="cardName">make it <br> fisheye</p>
    </div>
    <button>See All</button>`
}