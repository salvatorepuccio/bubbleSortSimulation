let next = document.getElementById('next');
let a = [];
let s = [];
let min=0, posmin=0;
let flag = false;
let temp;
let iter=0;
//random array generation
for(let i=0;i<10;i++){
    a[i] = Math.trunc(Math.random()*100);
}
//acquisizione degli elementi da html
for(let i=0;i<10;i++){
    s[i] = document.getElementById('a'+i);
}
for(let i=0;i<10;i++){
    s[i].innerText = a[i];
}
/*
for(let i=0;i<10;i++){
    next.addEventListener('click', function(){
        console.log("questo "+i);
        min=a[i];
        posmin=i;
        for(let j=i+1;j<10;j++){
            if(a[j]<min) {min=a[j]; posmin=j; flag=true;}
        }
        if(flag){
            temp=a[i];
            a[i]=min;
            a[posmin]=temp;
            flag=false;
        }
        for(let r=0;r<10;r++){
            s[r].innerText = a[r];
        }
        });    
}
*/
let i=0;
    
    next.addEventListener('click', function(){
            min=a[i];
            posmin=i;
            for(let j=i+1;j<10;j++){
                if(a[j]<min) {min=a[j]; posmin=j; flag=true;}
            }
            if(flag){
                temp=a[i];
                a[i]=min;
                a[posmin]=temp;
                flag=false;
            }
            for(let r=0;r<10;r++){
                s[r].innerText = a[r];
            }
            i++;
        });
        




