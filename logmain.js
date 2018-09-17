$("document").ready(function() {
    $("<div/>", {
        "appendTo": "#log",
        "class": "container"
    });
    $("<div/>", {
        "appendTo": ".container",
        "class": "rowCo"
    });
    $("<div/>", {
        "appendTo": ".rowCo",
        "class": "ctd",
        html: "<img><h1/><input/><input/><a><p/></a><a><div/></a><p/><p/>"
    });
    $(".ctd").find("img").attr({
        src: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/logo/Logoedited.png",
        "class": "ctdimg"
    });
    $(".ctd").find("h1").eq(0).html("Hoşgeldiniz").attr({
        "class": "ctdh1",
    });
    $(".ctd").find("input").eq(0).attr({
        "class": "input-one",
        "placeHolder": "Kullanıcı adı veya mail",
        "name": "email",
        "type": "email",
        "autocomplete": "on",
        "required": "yes",
    });
    $(".ctd").find("input").eq(1).attr({
        "class": "input-one space15",
        "placeHolder": "Şifre",
        "name": "password",
        "type": "password",
    });
    $(".ctd").find("a").eq(0).attr({
        href: "#",
    });
    $(".ctd").find("p").eq(0).html("Şifrenizi mi unuttunuz?").attr({
        "class": "ctdp1",
    });
    $(".ctd").find("a").eq(1).insertAfter(".ctdp1").attr({
        href: "#",
        "class": "alog",
    });
    $(".ctd").find("div").eq(0).html("Giriş Yap").attr({
        "class": "logdiv top15",
    });
    $(".ctd").find("p").eq(1).html("Hala bir hesabınız yok mu?").attr({
        "class": "ctdp2",
    });
    /*click here and show ctd2*/
    $(".ctd").find("p").eq(2).html("Kayıt ol").attr({
        "class": "ctdp3",
    });

    $("<div/>", {
        "appendTo": ".footer",
        "class": "ctdp4 top1",
        html: "Telif Hakkı &#174 Enes Demir. Tüm hakları saklıdır.",
    });
   
   
    /*
    KAYIT OLMA CONTAİNER
    */
    $("<div/>", {
        "appendTo": ".rowCo",
        "class": "ctd2",
        html: "<img><h1/><input/><input/><input/><input/><a><div/></a><p/>"
    });
    $(".ctd2").find("img").attr({
        src: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/logo/Logoedited.png",
        "class": "ctdimg"
    });
    $(".ctd2").find("h1").eq(0).html("Kayıt Ol").attr({
        "class": "ctdh1",
    });
    $(".ctd2").find("input").eq(0).attr({
        "class": "input-one",
        "placeHolder": "isim",
        "name": "name",
        "type": "text",
        "autocomplete": "off",
        "required": "yes",
    });
    $(".ctd2").find("input").eq(1).attr({
        "class": "input-one top5",
        "placeHolder": "email",
        "name": "email",
        "type": "email",
        "autocomplete": "off",
        "required": "yes",
    });
    $(".ctd2").find("input").eq(2).attr({
        "class": "input-one top5",
        "placeHolder": "şifre",
        "name": "password",
        "type": "password",
        "required": "yes",
    });
    $(".ctd2").find("input").eq(3).attr({
        "class": "input-one top5",
        "placeHolder": "şifreyi tekrarla",
        "name": "password",
        "type": "password",
    });
    $(".ctd2").find("a").eq(0).attr({
        href: "#",
        "class": "alog",
    });
    $(".ctd2").find("div").eq(0).html("Oturum aç").attr({
        "class": "logdiv top5",
    });
    $(".ctd2").find("p").eq(0).html("Zaten bir tane var").attr({
        "class": "ctdp5",
    });
    $("#").click(function(event){
        alert("Teşekkürler");
    });
    $(".ctdp3").click(function(event){
        $(".ctd, .ctdp4").fadeOut("slow");
        $(".ctd2").delay(600).fadeIn("slow");
    });
    $(".ctdp5").click(function(event){
        $(".ctd2, .ctdp4").fadeOut("slow");
        $(".ctd, .ctdp4").delay(600).fadeIn("slow");
    });
});
