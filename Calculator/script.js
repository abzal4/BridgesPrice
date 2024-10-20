var bid=100;
document.getElementById('submit').addEventListener('click', function(){
    eduCalculate();
    famNetCalculate();
    casteCalculate();
    skillsCalculate();
    ageCalculate();
    repCalculate();

    document.getElementById('finalBid').innerHTML="  Final bid:"+bid+"$";
    bid=100;
})

function eduCalculate(){
var educationLevel=document.getElementById('education').value;
    switch(educationLevel){
        case 'bachelor':
            bid*=1.5;
            break;
        case 'college':
            bid*=1.2;
            break;
        case 'high_school':
            bid*=1.05;
            break;
        case 'middle_school':
            bid*=0.9;
            break;
    }
    document.getElementById('education').value='blank'
}

function famNetCalculate(){
    var family_Networth=document.getElementById('networth').value;
        switch(family_Networth){
            case 'upper_class':
                bid*=2;
                break;
            case 'middle_class':
                bid*=1.5;
                break;
            case 'lower_class':
                bid*=1.2;
                break;
        }
        document.getElementById('networth').value='blank'
    }

function casteCalculate(){
    var Castee=document.getElementById('caste').value;
        switch(Castee){
            case 'brahim':
                bid=bid+100;
                break;
            case 'kshatriya':
                bid+=50;
                break;
            case 'vaishya':
                bid+=20;
                break;
            case 'shudra':
                bid+=10;
                break;
            case 'varna':
                bid-=50;
                break;
            }
    document.getElementById('caste').value='blank'
        }

function skillsCalculate(){
        if (document.getElementById('music').checked){
            bid+=10;
        }
        if (document.getElementById('cooks').checked){
            bid+=20
        }
        if (document.getElementById('easygoing').checked){
            bid+=15
        }
        if (document.getElementById('sings').checked){
            bid+=10
        }
            document.getElementById('music').checked=false;
            document.getElementById('cooks').checked=false;
            document.getElementById('easygoing').checked=false;
            document.getElementById('sings').checked=false;
        }
function ageCalculate(){
    if (document.getElementById('young').checked){
        bid*=1.5;
    }
    if (document.getElementById('ok').checked){
        bid*=1.2
    }
    if (document.getElementById('old').checked){
        bid*=0.95
    }
        document.getElementById('young').checked=false;
        document.getElementById('ok').checked=false;
        document.getElementById('old').checked=false;
        }
function repCalculate(){
    if (document.getElementById('parents').checked){
        bid*=0.85;
    }
    if (document.getElementById('she').checked){
        bid*=0.9
    }
    if (document.getElementById('around').checked){
        bid*=0.95
    }
        document.getElementById('parents').checked=false;
        document.getElementById('she').checked=false;
        document.getElementById('around').checked=false;
        }



var calculate= document.getElementById(submit);