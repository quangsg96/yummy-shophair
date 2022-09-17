document.getElementById('hamburger').addEventListener('click', function() {
    var clickBtn = document.getElementById('navi-mobile');
    clickBtn.classList.toggle('slide-down');
});

// 2. DISPLAY MENU WHEN SCROLLING

// delay:
// var duration = 750;
// actions when reach offset = 178:
    // $(document).ready(function() {
        // $(function() {
            // Go to top
            // $('#navi-desktop-2').click(function () {
            //     $('body,html').animate({scrollTop: 0}, duration);
            // });
        // });
    // });

var screenWidth = screen.width;
if (screenWidth >= 768) {
    window.addEventListener('scroll' , function() {
        var naFi = document.getElementById('navi-fixed');
        var naRe = document.getElementById('navi-relative');
        var scroll = this.scrollY;
        if (scroll >= 178) {
            naFi.style.display = 'block';
            naRe.style.cssText = 'height:0; overflow: hidden;'
        } else {
            naFi.style.display = 'none';
            naRe.style.cssText = 'height: 34px; overflow: visible;'
        }
    });
}

// DISPLAY MOBILE-MENU (MMENUJS) WHEN SCROLLING
window.addEventListener('scroll' , function() {
    var mHeader = document.getElementById('header');
    var headerA = document.querySelector('#header a');

    var scroll = this.scrollY;
    if (scroll >= 50) {
        // mHeader.style.background = '#000';
        // headerA.style.cssText = 'top: 0; left: 0;';
    } else {
        // mHeader.style.background = 'transparent';
        // headerA.style.cssText = 'top: 20%; left: -2%;';
    }
});
