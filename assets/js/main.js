$(function() {    
    nav_dropdown();
    navmenu();
    logOut();
    show_pass();
       
    
    function nav_dropdown() {
        $('.navmenu .dropdown').on('click', function(e) {
            e.preventDefault();            
        })
    }
    
    function navmenu() {
        $('.navmenu ul ul .active').closest('ul').css('display','block');
        $('.navmenu ul ul .active').closest('ul').parent().children('a').toggleClass('tampil');

        $('.navmenu-ico button').on('click', function(e) {
            e.preventDefault();

            $('body').toggleClass('showhide-nav');
        })
    }

    function logOut() {
        $('.logOut').on('click', function(e) {
            e.preventDefault();
            
            let href = $(this).attr('href');

            Swal.fire({
                icon: 'question',
                title: 'Apakah anda yakin?',
                text: 'Anda akan keluar dari akun ini.',
                showCancelButton: true,
                confirmButtonText: 'Keluar',
                cancelButtonText: 'Batal',
                confirmButtonColor: '#ff0062',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then(function(result) {
                if(result.value) {
                    window.location.href = href;
                }
            }) 
        })
    }
    
    function show_pass() {
        $('#showhide_pass').on('click', function() {
            if($(this).is(':checked')) {
                $('#password').attr('type', 'text');
                $('#showhide_pass_lab').attr('class', 'fa fa-eye');
            } else {
                $('#showhide_pass_lab').attr('class', 'fa fa-eye-slash');
                $('#password').attr('type', 'password');
                
            }
        })
    }
    
});

$(window).on('load', function() {
    $('.loading').fadeOut();
})

$(".navmenu .sembunyi, .navmenu .tampil").click(function(event) {
    event.preventDefault();
    if($(this).hasClass("tampil")){
        $(this).removeClass("tampil");
        $(this).parent().children("ul").stop(true,true).slideUp("normal");
    } else {
        $(".navmenu .sembunyi.tampil").removeClass("tampil");
        $(this).addClass("tampil");
        $(".navmenu ul ul").filter(":visible").slideUp("normal");
        $(this).parent().children("ul").stop(true,true).slideDown("normal");
    }
});

$('.select-with-src').select2();
