document.addEventListener("DOMContentLoaded", function(){
   
    let set = document.querySelector("#set")
    let clr = document.querySelector("#clr")
    let canvas = document.querySelector(".canvas")

    set.addEventListener("click", function (){
        let input = document.getElementById("input")
        canvas.innerHTML = "";
        let num = parseInt(input.value)
        console.log(num);
        let box_size = 530/num;

        let mouseDown = false;
        function change_color(event){
            if (!mouseDown) return;
            let c1 = Math.floor(Math.random()*255);
            let c2 = Math.floor(Math.random()*255);
            let c3 = Math.floor(Math.random()*255);
            event.target.style.backgroundColor= `rgb(${c1}, ${c2}, ${c3})`;
        }

        canvas.addEventListener("mousedown", function(event){
            mouseDown = true;
            change_color(event);
        })

        canvas.addEventListener("mouseup", function(event){
            mouseDown = false;
        })

        canvas.addEventListener("mousemove", function(event){
            change_color(event);
        })

        for (let i=0; i<num*num; i++){
            let div = document.createElement("div")
            div.style.width= `${box_size}px`;
            div.style.height = `${box_size}px`;
            div.style.boxSizing = "border-box";
            canvas.appendChild(div)

            div.addEventListener("mouseover", function(){
                
            })
        }
        
        input.value = "";
        input.focus()
        
    })

    clr.addEventListener("click", function(){
        canvas.innerHTML="";
    })

})