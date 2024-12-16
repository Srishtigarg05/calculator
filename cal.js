function ac()//
{
    document.getElementById("a").value="";
}
function pick(input)
{
    document.getElementById("a").value+= input;
}
function cal()
{
    var output=eval(document.getElementById("a").value);
    document.getElementById("a").value=output;
}