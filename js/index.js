//banner
{
    const imgs=document.querySelectorAll(".banner_tu li");
    const pagers=document.querySelectorAll(".lunbo_dian li");
    const banner_tu=document.querySelector(".banner_tu");
    const banner_lbtn=document.querySelector(".banner_lbtn");
    const banner_rbtn=document.querySelector(".banner_rbtn");
    pagers.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<pagers.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]指的都是一个
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<pagers.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner_tu.onmouseenter=function () {
        clearInterval(t)
    };
    banner_tu.onmouseleave=function () {
        t=setInterval(move,3000);
    };
    let flag=true;
    banner_rbtn.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    }
    banner_lbtn.onclick=function () {
        if(flag){
            flag=false;
            n-=2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//li_word
{
    let li_words=document.querySelectorAll(".li_word");
    let lixiangqings=document.querySelectorAll(".lixiangqing");
    let obj=lixiangqings[0];
    li_words.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            lixiangqings[index].style.display="block";
            obj=lixiangqings[index];
        };
        ele.onmouseleave=function () {
            lixiangqings[index].style.display="none";
        }
    });

}
//djh
{
    let djhleft_lunbo=document.querySelector(".djhleft_lunbo");
    let djh_lbtn=document.querySelector(".djh_lbtn");
    let djh_rbtn=document.querySelector(".djh_rbtn");
    let djhleft_lunbouls=document.querySelectorAll(".djhleft_lunboul");
    let n=0;
    djh_rbtn.onclick=function () {
        n++;
        if(n%2!==0){
            djhleft_lunbo.style.marginLeft=-1000+"px";
        }
        if(n%2===0){
            djhleft_lunbo.style.marginLeft=0+"px";
        }
    };
    djh_lbtn.onclick=function () {
        n++;
        if(n%2!==0){
            djhleft_lunbo.style.marginLeft=-1000+"px";
        }
        if(n%2===0){
            djhleft_lunbo.style.marginLeft=0+"px";
        }
        // djhleft_lunbo.style.marginLeft=-1000*n+"px";

    }
    // function move() {
    //     n++;
    //     if(n===djhleft_lunbouls.length){
    //         n=0;
    //     }
    //     if(n<0){
    //         n=djhleft_lunbouls.length-1;
    //     }
    //     djhleft_lunbo.style.left=-1000+"px";
    // }
    // let flag=true;
    // djh_rbtn.onclick=function () {
    //     if(flag){
    //         flag=false;
    //         move();
    //     }
    // }
    // djh_lbtn.onclick=function () {
    //     if(flag){
    //         flag=false;
    //         n-=2;
    //         move();
    //     }
    // };
}
//topbar
{
    let position=document.querySelector(".position");
    let floatbar=document.querySelector(".floatbar");
    let fixed1=document.querySelector(".fixed1 ");
    let caidan=document.querySelector(".caidan ");
    let denglu=document.querySelector(".denglu ");
    let buycar=document.querySelector(".buycar");
    let left_daohang=document.querySelector(".left_daohang");
    fixed1.classList.remove("active1");
    caidan.classList.remove("active2");
    denglu.classList.remove("active3");
    buycar.classList.remove("active4");
    left_daohang.classList.remove(".active6");

    window.onscroll=function () {
        let bt=document.documentElement.scrollTop;
        if(bt>1250){
            fixed1.classList.add("active1");
            caidan.classList.add("active2");
            denglu.classList.add("active3");
            buycar.classList.add("active4");
            position.style.display="block";
            caidan.onmouseenter=function () {
                left_daohang.classList.add("active6");
            };
            // caidan.onmouseleave=function () {
            //     left_daohang.classList.remove("active6");
            // };
            left_daohang.onmouseleave=function () {
                left_daohang.classList.remove("active6");
            };
        }else{
            fixed1.classList.remove("active1");
            caidan.classList.remove("active2");
            denglu.classList.remove("active3");
            buycar.classList.remove("active4");
            left_daohang.classList.remove("active6");
            position.style.display="none";

        }
        if(bt>2450){
            floatbar.style.display="block";
        }else{
            floatbar.style.display="none";
        }
    }


}
//leftbar
{
    let floattop=document.querySelector(".floattop");
    floattop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        // console.log(st);

        let t=setInterval(function () {
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    };

    //左边list
    let floatbarlis=document.querySelectorAll(".floatbarli");
    let containers=document.querySelectorAll(".container");
    floatbarlis.forEach(function (ele,index) {
        ele.onclick=function () {
            let ot=containers[index].offsetTop-100;
            // console.log(ot);
            // document.documentElement.scrollTop=ot;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)/10;
            let time=0;
            let t=setInterval(function () {
                time+=25;
                now+=speed;
                if(time===250){
                    clearInterval(t);
                }
                document.documentElement.scrollTop=now;
            },25);
            for(let i=0;i<floatbarlis.length;i++){
                floatbarlis[i].classList.remove("active5")
            }
            floatbarlis[index].classList.add("active5")
        };
    })
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < containers.length; i++) {
            if (st > containers[i].offsetTop - 200) {
                for (let i = 0; i < floatbarlis.length; i++) {
                    floatbarlis[i].classList.remove("active5");
                }
                floatbarlis[i].classList.add("active5");
            }
        }
    })
}
//xinwengengxin
// {
//     const rdhc_wenzis=document.querySelectorAll(".rdhc_wenzi");
//     setInterval(function () {
//         let i;
//         for(let i=0;i<rdhc_wenzis.length;i++){
//             if(i=1){
//                 i=0;
//                 rdhc_wenzis[0].style.Top=0+"px";
//             }
//             rdhc_wenzis[0].style.marginTop=i*-96+"px";
//         }
//     },2000)
// }
//dingbuwenzi
{
    let words=document.querySelectorAll(".head_lefticon");
    let contents=document.querySelectorAll(".head_onmouseenter");
    let opaactives=document.querySelectorAll(".opaactive");
    words.forEach(function (ele,index) {
        for(let i=0;i<contents.length;i++){
            contents[i].style.height="0";
            opaactives[i].classList.remove("opactive");
        }
        // opaactives[index].classList.add("opactive");
        ele.onmouseenter=function () {
            contents[index].style.height="200px";
            opaactives[index].classList.add("opactive");
        };
        ele.onmouseleave=function () {
            contents[index].style.height="0";
            opaactives[index].classList.remove("opactive");
        }
    });

}
//panghangbang
{
    let next=document.querySelector(".hh_btnsright");
    let prev=document.querySelector(".hh_btnsleft");
    let shop=document.querySelector(".shangpin_changtu");
    let lunbos=document.querySelectorAll(".ts_lunbo1");
    let shangpins=document.querySelectorAll(".hh_shangpin");
    let n=0;
    next.onclick=function () {
        n++;
        // if(n=2){
        //     n=0;
        // }
        shop.style.marginLeft=n*-380+"px";
    };
    prev.onclick=function () {
        n--;
        // if(n<0){
        //     n=2;
        // }
        shop.style.marginLeft=n*-380+"px";
    };
    lunbos.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<lunbos.length;i++){
                lunbos[i].remove("active7");
            }
            this.classList.add("active7");
            shop.style.marginLeft=-380*(index-1)+"px";
        }
    })
}