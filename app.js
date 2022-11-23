let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let div = document.getElementById("div");
let btn = document.getElementById("btn");



btn.addEventListener("click",function(){
    btn.style.display = "none"
    function func(){
        let y = 10;
        let z = setInterval(() => {
            h1.innerText = `Ժամանակ : ${y}`
            y = y - 1        
            if(y == -1){
                clearInterval(z);
                h2.innerText = `Ժամանակն ավարտվեց դուք ունեք ${x} միավոր`
                h2.style.color = "red"
                h2.style.fontSize = "50px"
                h2.style.marginLeft = "50px"
                div.style.display = "none"
            }
        }, 1000);

    }

    func()


    let x = 0;
    let arr = [`purple`,`red`,`violet`,`blue`,`orange`,`yellow`,`green`,`pink`,`lightgreen`,`lightblue`,`aqua`];
    function func2(){
        div.addEventListener("click", function(){
                    x = x + 1
                    h2.innerText = `Միավոր : ${x}`
                    let color = arr[Math.floor(Math.random()* arr.length)]  ;
                    div.style.backgroundColor = `${color}`
                    div.style.margin = `${Math.floor(Math.random()*300)}px ${Math.floor(Math.random()*900)}px`
                    div.style.transition = `margin 0.2s ` ;
            })
    }

    func2()
})





// btn.addEventListener("click",function(){
//     function func(){
//         let y = 10;
//         let z = setInterval(() => {
//             h1.innerText = `Ժամանակ : ${y}`
//             y = y - 1        
//             if(y == -1){
//                 clearInterval(z);
//                 h2.innerText = `Ժամանակն ավարտվեց դուք ունեք ${x} միավոր`
//                 h2.style.color = "red"
//                 h2.style.fontSize = "50px"
//                 h2.style.marginLeft = "50px"
//                 div.style.display = "none"
//             }
//         }, 1000);

//     }

//     func()


//     let x = 0;
//     let arr = [`purple`,`red`,`violet`,`blue`,`orange`,`yellow`,`green`,`pink`,`lightgreen`,`lightblue`,`aqua`];
//     function func2(){
        
//         div.addEventListener("click", function(){
//                     x = x + 1
//                     h2.innerText = `Միավոր : ${x}`
//                     let color = arr[Math.floor(Math.random()* arr.length)]  ;
//                     div.style.backgroundColor = `${color}`
//                     div.style.margin = `${Math.floor(Math.random()*300)}px ${Math.floor(Math.random()*300)}px`
//                     div.style.transition = `margin 0.2s ` ;
//             })
//     }

//     func2()
// })





