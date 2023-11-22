var userinput=document.getElementById("date")
userinput.max=new Date().toISOString().split("T")[0];
var result=document.getElementById("result")

function calculateage(){
    var birthdate=new Date(userinput.value)
    var y1=birthdate.getFullYear()
    var m1=birthdate.getMonth()+1
    var d1=birthdate.getDate()
    var today=new Date()

    var y2=today.getFullYear()
    var m2=today.getMonth()+1
    var d2=today.getDate()

    var y3,m3,d3;
    y3=y2-y1
    if(m2>=m1){
        m3=m2-m1
    }
    else{
        y3--
        m3=12+m2-m1
    }
    if(d2>=d1){
        d3=d2-d1
    }
    else{
        m3--
        d3=getdaysinmonth(y1,m1)+d2-d1
    }
    if(m3<0){
        m3=11
        y3--
    }
result.innerHTML=`You are <span>${y3}</span> Years, <span>${m3}</span> months and <span>${d3}</span> days old😀😇😉`
}

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate()
}