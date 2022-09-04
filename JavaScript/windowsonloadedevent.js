alert("Hi");
var body = document.getElementsById("body");
var buttom = document.getElementsById("buttom");
buttom.onclick = function ()
{
    if (body.classname == "black")
    {
        body.classname = "white";
        buttom.classname = "black";
    }
    else
    {
        body.classname = "black";
        buttom.classname = "white";
    }
};   
