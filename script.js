var lampOff = true;
var gotRabbit = true;
function curtainUp()
{
    document.querySelector(".curtain-img").style.cssText = `bottom:100%; transition: 2s;`
}
function switchDown()
{
    document.querySelector(".switch-img").style.cssText = `top: 40px; transition: 0.5s;`
}
function lightOn()
{
    if(lampOff){
        lampOff = false;
        document.querySelector(".container-magic").style.cssText = `opacity: 1;`
        document.querySelector(".light").style.cssText = `opacity: 0.5;`
        setTimeout(() => {
            document.querySelector(".switch-img").style.cssText = `top: 20px; transition: 0.5s;`
        }, 150);
    }
    else {
        lampOff = true;
        document.querySelector(".container-magic").style.cssText = `opacity: 0;`
        document.querySelector(".light").style.cssText = `opacity: 0;`
        setTimeout(() => {
            document.querySelector(".switch-img").style.cssText = `top: 20px; transition: 0.5s;`
        }, 150);
    }
}
function magic()
{
    if(gotRabbit){
        gotRabbit = false;
        document.querySelector(".rabbit-img").style.cssText = `bottom: 90px; transition: 1s;`
        setTimeout(() => {
            document.querySelector(".bird-img").style.cssText = `bottom: 220px; transition: 1s;`
        }, 500);
    }
    else{
        gotRabbit = true;
        document.querySelector(".bird-img").style.cssText = `bottom: 90px; transition: 1s;`
        setTimeout(() => {
            document.querySelector(".rabbit-img").style.cssText = `bottom: 220px; transition: 1s;`
        }, 500);
    }
}
