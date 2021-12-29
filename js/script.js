const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});



$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type:"POST",
            url:"mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
});