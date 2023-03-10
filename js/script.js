//  open box notif ......................................................

var iconnotif = document.getElementById("icon-notif");
var boxnotif = document.getElementById("box-show-notif");
var boxnotifclo = document.getElementById("box-notif-clothe");
var boxnotifclo = document.getElementById("box-notif-clothe");
var  txtmessagenotifone = document.getElementById("header-one-notif");
var  txtmessagenotiftwo = document.getElementById("header-two-notif");
var  txtmessagenotifthree = document.getElementById("header-three-notif");
var  txtmessagenotiffour = document.getElementById("header-four-notif");
var  boxnotifmobile = document.getElementById("box-notif-mobile");
var  messagenotifpersonal = document.getElementById("message-notif-personal");
var  messagenotifgeneral = document.getElementById("message-notif-general");
var  messagenotifpersonalM = document.getElementById("message-notif-personal-mobile");
var  messagenotifgeneralM = document.getElementById("message-notif-general-mobile");
var  numbernotifcartpc = document.getElementById("number-notif-cart-pc");
var  numbernotifcartmobile = document.getElementById("number-notif-cart-mobile")

var openmenu = document.querySelectorAll(".open-menu");

openmenu.forEach(openmenu => {
    openmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotif.classList.remove("hide-item");
        iconnotif.classList.add("nav-right-icon-active");
    });
});


var overmenu = document.querySelectorAll(".over-menu");

overmenu.forEach(overmenu => {
    overmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotifclo.classList.remove("hide-item");
    });
});


var exitmenu = document.querySelectorAll(".exit-menu");

exitmenu.forEach(exitmenu => {
    exitmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotifclo.classList.add("hide-item");
        boxnotif.classList.add("hide-item");
        iconnotif.classList.remove("nav-right-icon-active");
        numbernotifcartpc.classList.add("hide-item");
    });
});


var clothemenu = document.querySelectorAll(".clothe-menu");

clothemenu.forEach(clothemenu => {
    clothemenu.addEventListener('click', function handleClick(event) {
        boxnotifclo.classList.add("hide-item");
        boxnotif.classList.add("hide-item");
        iconnotif.classList.remove("nav-right-icon-active");
        numbernotifcartpc.classList.add("hide-item");
    });
});


var personal = document.querySelectorAll(".personal");

personal.forEach(personal => {
    personal.addEventListener('click', function handleClick(event) {
        txtmessagenotifone.classList.add("item-notif-active");
        txtmessagenotiftwo.classList.remove("item-notif-active");
        messagenotifpersonal.classList.remove("hide-item");
        messagenotifgeneral.classList.add("hide-item");
    });
});


var general = document.querySelectorAll(".general");

general.forEach(general => {
    general.addEventListener('click', function handleClick(event) {
        txtmessagenotifone.classList.remove("item-notif-active");
        txtmessagenotiftwo.classList.add("item-notif-active");
        messagenotifpersonal.classList.add("hide-item");
        messagenotifgeneral.classList.remove("hide-item");
    });
});



var personalM = document.querySelectorAll(".personal-mobile");

personalM.forEach(personalM => {
    personalM.addEventListener('click', function handleClick(event) {
        txtmessagenotifthree.classList.add("item-notif-active");
        txtmessagenotiffour.classList.remove("item-notif-active");
        messagenotifpersonalM.classList.remove("hide-item");
        messagenotifgeneralM.classList.add("hide-item");
    });
});


var generalM = document.querySelectorAll(".general-mobile");

generalM.forEach(generalM => {
    generalM.addEventListener('click', function handleClick(event) {
        txtmessagenotifthree.classList.remove("item-notif-active");
        txtmessagenotiffour.classList.add("item-notif-active");
        messagenotifpersonalM.classList.add("hide-item");
        messagenotifgeneralM.classList.remove("hide-item");
    });
});


var clothemenuM = document.querySelectorAll(".clothe-menu-mobile");

clothemenuM.forEach(clothemenuM => {
    clothemenuM.addEventListener('click', function handleClick(event) {
        boxnotifmobile.classList.toggle("hide-item");
        numbernotifcartmobile.classList.add("hide-item");
    });
});



//  hover menu .....................................................................


var  iconmenu1 = document.getElementById("icon-menu1");
var  iconmenu2 = document.getElementById("icon-menu2");
var  iconmenu3 = document.getElementById("icon-menu3");
var  iconmenu4 = document.getElementById("icon-menu4");
var  iconmenu5 = document.getElementById("icon-menu5");
var  iconmenu6 = document.getElementById("icon-menu6");
var  iconmenu7 = document.getElementById("icon-menu7");
var  iconmenu8 = document.getElementById("icon-menu8");
var  iconmenu9 = document.getElementById("icon-menu9");
var  iconmenu10 = document.getElementById("icon-menu10");
var  iconmenu11 = document.getElementById("icon-menu11");
var  iconmenu12 = document.getElementById("icon-menu12");
var  iconmenu13 = document.getElementById("icon-menu13");
var  iconmenu14 = document.getElementById("icon-menu14");
var  iconmenu15 = document.getElementById("icon-menu15");
var  iconmenu16 = document.getElementById("icon-menu16");
var  iconmenu17 = document.getElementById("icon-menu17");
var  iconmenu18 = document.getElementById("icon-menu18");
var  iconmenu19 = document.getElementById("icon-menu19");
var  iconmenu20 = document.getElementById("icon-menu20");
var  iconmenu22 = document.getElementById("icon-menu22");
var  iconmenu23 = document.getElementById("icon-menu23");

var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");
var menu7 = document.getElementById("menu7");
var menu8 = document.getElementById("menu8");
var menu9 = document.getElementById("menu9");
var menu10 = document.getElementById("menu10");

var righticonnavmenu1 = document.getElementById("right-icon-nav-menu1");
var righticonnavmenu2 = document.getElementById("right-icon-nav-menu2");
var righticonnavmenu3 = document.getElementById("right-icon-nav-menu3");
var righticonnavmenu4 = document.getElementById("right-icon-nav-menu4");
var righticonnavmenu5 = document.getElementById("right-icon-nav-menu5");
var righticonnavmenu6 = document.getElementById("right-icon-nav-menu6");
var righticonnavmenu7 = document.getElementById("right-icon-nav-menu7");
var righticonnavmenu8 = document.getElementById("right-icon-nav-menu8");
var righticonnavmenu9 = document.getElementById("right-icon-nav-menu9");


if(menu2 != undefined)
{
    menu2.addEventListener('mouseover', function handleClick(event) {
        iconmenu2.classList.remove("hide-item");
        iconmenu1.classList.add("hide-item");
        righticonnavmenu1.classList.remove("hide-item");
    });


    menu2.addEventListener('mouseout', function handleClick(event) {
        iconmenu2.classList.add("hide-item");
        iconmenu1.classList.remove("hide-item");
        righticonnavmenu1.classList.add("hide-item");
    });
}


if(menu3 != undefined)
{
    menu3.addEventListener('mouseover', function handleClick(event) {
        iconmenu4.classList.remove("hide-item");
        iconmenu3.classList.add("hide-item");
        righticonnavmenu2.classList.remove("hide-item");
    });


    menu3.addEventListener('mouseout', function handleClick(event) {
        iconmenu4.classList.add("hide-item");
        iconmenu3.classList.remove("hide-item");
        righticonnavmenu2.classList.add("hide-item");
    });
}

if(menu4 != undefined)
{
    menu4.addEventListener('mouseover', function handleClick(event) {
        iconmenu6.classList.remove("hide-item");
        iconmenu5.classList.add("hide-item");
        righticonnavmenu3.classList.remove("hide-item");
    });


    menu4.addEventListener('mouseout', function handleClick(event) {
        iconmenu6.classList.add("hide-item");
        iconmenu5.classList.remove("hide-item");
        righticonnavmenu3.classList.add("hide-item");
    });
}

if(menu5 != undefined)
{
    menu5.addEventListener('mouseover', function handleClick(event) {
        iconmenu8.classList.remove("hide-item");
        iconmenu7.classList.add("hide-item");
        righticonnavmenu4.classList.remove("hide-item");
    });


    menu5.addEventListener('mouseout', function handleClick(event) {
        iconmenu8.classList.add("hide-item");
        iconmenu7.classList.remove("hide-item");
        righticonnavmenu4.classList.add("hide-item");
    });
}

if(menu6 != undefined)
{
    menu6.addEventListener('mouseover', function handleClick(event) {
        iconmenu23.classList.remove("hide-item");
        iconmenu22.classList.add("hide-item");
        righticonnavmenu5.classList.remove("hide-item");
    });


    menu6.addEventListener('mouseout', function handleClick(event) {
        iconmenu23.classList.add("hide-item");
        iconmenu22.classList.remove("hide-item");
        righticonnavmenu5.classList.add("hide-item");
    });
}

if(menu7 != undefined)
{
    menu7.addEventListener('mouseover', function handleClick(event) {
        iconmenu10.classList.remove("hide-item");
        iconmenu9.classList.add("hide-item");
        righticonnavmenu6.classList.remove("hide-item");
    });


    menu7.addEventListener('mouseout', function handleClick(event) {
        iconmenu10.classList.add("hide-item");
        iconmenu9.classList.remove("hide-item");
        righticonnavmenu6.classList.add("hide-item");
    });
}

if(menu8 != undefined)
{
    menu8.addEventListener('mouseover', function handleClick(event) {
        iconmenu12.classList.remove("hide-item");
        iconmenu11.classList.add("hide-item");
        righticonnavmenu7.classList.remove("hide-item");
    });


    menu8.addEventListener('mouseout', function handleClick(event) {
        iconmenu12.classList.add("hide-item");
        iconmenu11.classList.remove("hide-item");
        righticonnavmenu7.classList.add("hide-item");
    });
}

if(menu9 != undefined)
{
    menu9.addEventListener('mouseover', function handleClick(event) {
        iconmenu14.classList.remove("hide-item");
        iconmenu13.classList.add("hide-item");
        righticonnavmenu8.classList.remove("hide-item");
    });


    menu9.addEventListener('mouseout', function handleClick(event) {
        iconmenu14.classList.add("hide-item");
        iconmenu13.classList.remove("hide-item");
        righticonnavmenu8.classList.add("hide-item");
    });
}

if(menu10 != undefined)
{
    menu10.addEventListener('mouseover', function handleClick(event) {
        iconmenu16.classList.remove("hide-item");
        iconmenu15.classList.add("hide-item");
        righticonnavmenu9.classList.remove("hide-item");
    });


    menu10.addEventListener('mouseout', function handleClick(event) {
        iconmenu16.classList.add("hide-item");
        iconmenu15.classList.remove("hide-item");
        righticonnavmenu9.classList.add("hide-item");
    });
}


//  gift box script ................................................................

var fileuploadinput = document.querySelectorAll(".file-upload-input");

if(fileuploadinput.length != 0)
{
    function readURL(input) {
        if (input.files && input.files[0]) {

            var reader = new FileReader();

            reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
        };

        reader.readAsDataURL(input.files[0]);

        } else {
            removeUpload();
        }
    }

    function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-content').hide();
        $('.image-upload-wrap').show();
        }
        $('.image-upload-wrap').bind('dragover', function () {
            $('.image-upload-wrap').addClass('image-dropping');
        });
        $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
    });
}

//  toggle menu mobile ................................................................


var sidebarpc = document.getElementById("sidebar-pc");
var messagefortnitestoremobile = document.getElementById("message-fortnite-store-mobile");
var messagegamingstoremobile = document.getElementById("message-gaming-store-mobile");
var boxclothemenumobile = document.getElementById("box-clothe-menu-mobile");
var iconforniteheaderstore = document.getElementById("icon-fornite-header-store");
var icongamingheaderstore = document.getElementById("icon-gaming-header-store");
var sizeWidth = document.body.offsetWidth;


if(sidebarpc != undefined)
{
    window.onresize = function (){
        var sizeWidth = document.body.offsetWidth;
        
        if(sizeWidth < 1025)
        {
            sidebarpc.classList.add("hide-item");
            boxclothemenumobile.classList.add("hide-item");
        }else
        {
            sidebarpc.classList.remove("hide-item");
        }
    }

    if(sizeWidth < 1025)
    {
        sidebarpc.classList.add("hide-item");
        boxclothemenumobile.classList.add("hide-item");
    }else
    {
        sidebarpc.classList.remove("hide-item");
    }
}



var openmenuM = document.querySelectorAll(".open-menu-mobile");

openmenuM.forEach(openmenuM => {
    openmenuM.addEventListener('click', function handleClick(event) {
        sidebarpc.classList.toggle("hide-item");
        boxclothemenumobile.classList.toggle("hide-item");
    });
});

//   script fake address page  .......................................................

var morefakeaddress = document.getElementById("more-fake-address");

var logofakeaddress = document.getElementsByClassName("logo-fake-address");

var menufakeaddress = document.getElementsByClassName("menu-fake-address");

var showfakeaddress = document.getElementsByClassName("show-fake-address");

var copytextclipboard = document.querySelectorAll(".copy-text-clipboard");


if(morefakeaddress != undefined)
{
    copytextclipboard.forEach(copytextclipboard => {
        copytextclipboard.addEventListener('click', function handleClick(event) {
            navigator.clipboard.writeText(copytextclipboard.innerHTML);
            var x = document.getElementById("toast-copy");
            var timetoastcopy = document.getElementById("time-toast-copy");
            x.className = "show";
            timetoastcopy.className = "time-toast-copy";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
            setTimeout(function(){ timetoastcopy.className = timetoastcopy.className.replace("time-toast-copy", ""); }, 5000);
        });
    });

    menufakeaddress[0].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.remove("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.remove("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[1].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.remove("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.remove("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[2].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.remove("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.remove("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[3].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.remove("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.remove("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[4].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.remove("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.remove("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[5].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.remove("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.remove("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[6].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.remove("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.remove("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[7].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.remove("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.remove("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[8].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.remove("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.remove("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[9].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.remove("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.remove("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[10].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.remove("hide-item");
        logofakeaddress[11].classList.add("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.remove("hide-item");
        showfakeaddress[11].classList.add("hide-item");
    });

    menufakeaddress[11].addEventListener('click', function handleClick() {
        logofakeaddress[0].classList.add("hide-item");
        logofakeaddress[1].classList.add("hide-item");
        logofakeaddress[2].classList.add("hide-item");
        logofakeaddress[3].classList.add("hide-item");
        logofakeaddress[4].classList.add("hide-item");
        logofakeaddress[5].classList.add("hide-item");
        logofakeaddress[6].classList.add("hide-item");
        logofakeaddress[7].classList.add("hide-item");
        logofakeaddress[8].classList.add("hide-item");
        logofakeaddress[9].classList.add("hide-item");
        logofakeaddress[10].classList.add("hide-item");
        logofakeaddress[11].classList.remove("hide-item");

        showfakeaddress[0].classList.add("hide-item");
        showfakeaddress[1].classList.add("hide-item");
        showfakeaddress[2].classList.add("hide-item");
        showfakeaddress[3].classList.add("hide-item");
        showfakeaddress[4].classList.add("hide-item");
        showfakeaddress[5].classList.add("hide-item");
        showfakeaddress[6].classList.add("hide-item");
        showfakeaddress[7].classList.add("hide-item");
        showfakeaddress[8].classList.add("hide-item");
        showfakeaddress[9].classList.add("hide-item");
        showfakeaddress[10].classList.add("hide-item");
        showfakeaddress[11].classList.remove("hide-item");
    });
}


//   script notifiction page  .......................................................

var toggleboxnotif = document.getElementsByClassName("toggle-box-notif");
var boxnotifmassage = document.getElementsByClassName("box-notif-massage");

for(var xy = 0; xy < toggleboxnotif.length ; xy++)
{
    toggleboxnotif[xy].addEventListener("click",function handleClick()
    {
        this.nextElementSibling.classList.toggle("hide-item");
        this.classList.toggle("open-box-notif");
    });
}

//  modal script   ................................................................

var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var btndisablemodal1 = document.getElementById("btn-disable-modal1");
var btnnextmodal = document.getElementById("btn-next-modal");
var btnpaymodal1 = document.getElementById("btn-pay-modal1");
var btnpaymodal2 = document.getElementById("btn-pay-modal2");
var btndisablemodal2 = document.getElementById("btn-disable-modal2");
var btnpaymodal3 = document.getElementById("btn-pay-modal3");
var btndisablemodal3 = document.getElementById("btn-disable-modal3");
var tickcircleradio1 = document.getElementById("tick-circle-radio1");
var tickcircleradio2 = document.getElementById("tick-circle-radio2");

if(radio1 != undefined)
{
    radio1.addEventListener('click', function handleClick(event) {
        btndisablemodal1.classList.add("hide-item");
        btnnextmodal.classList.remove("hide-item");
        btnpaymodal1.classList.add("hide-item");
        tickcircleradio1.classList.remove("hide-item");
        tickcircleradio2.classList.add("hide-item");
    });

    radio2.addEventListener('click', function handleClick(event) {
        btndisablemodal1.classList.add("hide-item");
        btnnextmodal.classList.add("hide-item");
        btnpaymodal1.classList.remove("hide-item");
        tickcircleradio1.classList.add("hide-item");
        tickcircleradio2.classList.remove("hide-item");
    });


    var selectpricecarts = document.querySelectorAll(".select-price-carts");

    selectpricecarts.forEach(selectpricecarts => {
        selectpricecarts.addEventListener('click', function handleClick(event) {
            btnpaymodal2.classList.remove("hide-item");
            btndisablemodal2.classList.add("hide-item");
        });
    });
}


var selectpricecarts2 = document.querySelectorAll(".select-price-carts2");

selectpricecarts2.forEach(selectpricecarts2 => {
    selectpricecarts2.addEventListener('click', function handleClick(event) {
        btnpaymodal3.classList.remove("hide-item");
        btndisablemodal3.classList.add("hide-item");
    });
});

//  timre payment script   ................................................................

//  برای هر باکس تایمر باید جدا این ها فراخانی بشه

var Numberitempaysoon = document.getElementsByClassName("number-item-pay-soon");

if(Numberitempaysoon !=undefined)
{
    setInterval(function () {
        for(var xyz = 0; xyz < Numberitempaysoon.length ; xyz++)
        {
            var counter = Numberitempaysoon[xyz].innerHTML;
            Numberitempaysoon[xyz].innerHTML = counter;
            counter--;
            Numberitempaysoon[xyz].innerHTML = counter;
        }
        
    }, 3600000);
}

//  تایمر پنل  ......................................

var numberrestpanel = document.getElementById("number-rest-panel");

var CunterRestPanel = numberrestpanel.innerHTML;
numberrestpanel.innerHTML = CunterRestPanel;

var x = setInterval(function () {
    if(CunterRestPanel != 0)
    {
        CunterRestPanel--;
        if(numberrestpanel != undefined)
        {
            numberrestpanel.innerHTML = CunterRestPanel;
        }
    }
}, 86400000);

//  sliders script   ................................................................

var swiper = new Swiper(".mySwiper-cards-home", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination-cards",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev-cards",
        prevEl: ".swiper-button-next-cards",
    },
});

var swiper = new Swiper(".mySwiper-trainings-home", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination-trainings",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev-trainings",
        prevEl: ".swiper-button-next-trainings",
    },
});


var swiper = new Swiper(".mySwiper-trainings-mobile", {
    slidesPerView: "auto",
    spaceBetween: 15,
});