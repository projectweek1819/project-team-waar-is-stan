function onMouseDown(count, args) {
    return count + 1;
}
function onMouseDown2(state, args) {
    return { count: state.count + 1 };
}
function counter3(state,args) {
    function onMouseDown(state, args) {
    return { count: state.count + 1 };}


    return { controller: { onMouseDown } };
}
function counter4() {
    function onMouseDown(state, args) {
        return { count: state.count + 1 };}

    function onKeyDown({ count }, args) {
        return { count: 0 }
    }

    return {controller:{ onMouseDown, onKeyDown }
}}
function counter5() {
    function onMouseDown(state, args) {
        if (args.shift == false) {
            return { count: state.count + 1 };
        }
        else if (args.shift == true && state.count >= 1) {
            return { count: state.count - 1 };
        }
        else return { count: 0 };
    }

    function onKeyDown(state, args) {

        if (args.key == "ArrowUp" || args.key == " ") {
            return { count: state.count + 1 };
        }
        else if (args.key == "ArrowDown" && state.count >= 1) {
            return { count: state.count - 1 };
        }
        else if (args.key == "0") {
            return { count: 0 };
        }
        else return { count: state.count };
    }
    return { controller: { onMouseDown, onKeyDown } };
}
function counter6() {
    function increment(state) {
        return { count: state.count + 1 };
    }

    function decrement(state) {
        if (state.count >= 1)
            return { count: state.count - 1 };
        else return { count: 0 };
    }

    function reset(state) {
        return { count: 0 };

    }

    function onMouseDown(state, args) {
        if (args.shift == false) {
            return increment(state);
        }
        else if (args.shift == true) {
            return decrement(state);
        }
        else return {count: state.count};
    }

    function onKeyDown(state, args) {
        if (args.key == "0") {
            return reset(state);
        }
        else if (args.key == "ArrowUp" || args.key == " ") {
            return increment(state);
        }
        else if (args.key == "ArrowDown") {
            return decrement(state);
        }
        else return { count: state.count };
    }

    const controller = { onMouseDown, onKeyDown };
    const model = { increment, decrement, reset };
    return { controller, model };
}
function counter7() {
    function add(state,amount) {
        if(state.count+amount<0){
            return {count:0}
        }
        else return {count: state.count+amount}
        }
    function reset(state) {
        return {count: 0}
    }

    function onMouseDown(state, args) {
        if (args.shift== false&& args.ctrl ==true){
           return add(state, 5)
        }
        if (args.shift== false&& args.ctrl ==false){
            return add(state, 1)}

        if (args.shift==true && state.count>=1 &&args.ctrl == true){
            return add(state,-5)
        }
        if (args.shift==true && state.count>=1 &&args.ctrl == false){
            return add(state,-1)
        }
        else return {count: state.count}
    }
    function onKeyDown(state, args) {
     
        if (args.key=="0"){ 
           return reset(state) 
        }
        if(args.key == "ArrowUp"&& args.ctrl == true){
          return add(state,5)
        }
        if(args.key == "ArrowUp"&& args.ctrl == false){
            return add(state,1)}

        if(args.key==" " && args.ctrl ==true){
            return add(state,5)
        }
        if(args.key==" " && args.ctrl ==false){
            return add(state,1)}

        if(args.key == "ArrowDown"&& args.ctrl == true){
            return add(state,-5)
        } 
        if(args.key == "ArrowDown"&& args.ctrl == false){
            return add(state,-1)
        } 
        
        else return {count: state.count} 
    }
    const controller = { onMouseDown, onKeyDown };
    const model = {add , reset };
    return { controller, model };
}
function chronometer(){
    function timePassed(state,dt){
      return{elapsedTime: state.elapsedTime+dt}  
    }
    function onTimerTick(state,dt){
        return{elapsedTime: state.elapsedTime+dt}

    }
    const controller = {onTimerTick};
    const model = {timePassed};
    return { controller, model };
}
function circle(){
    function render(state){
        return[{type: "circle", center: {x: 100, y: 100}, radius: 10, color: "red"}]
    }
    const view = {render};
    return{view}
}
function circle2(){
    function render(state){
        return[{type: "circle", center: state.position, radius: 10, color: "red"}]
    }
    function moveTo(state,position){
        
        return{position:(position)}      
    }
    function onMouseDown(state,args){
       {
            return{position:args.position}
        }
    }

    const model = {moveTo}
    const controller = {onMouseDown}
    const view = {render};
    return{view,model,controller}

}
function circle3(){
    function render(state){
        return[{type: "circle", center: state.position, radius: 10, color: "red"}]
    }
    function moveTo(state,position){
        
        return{position:(position)}      
    }
    function onMouseMove(state,args){
       {
            return{position:args.position}
        }
    }

    const model = {moveTo}
    const controller = {onMouseMove}
    const view = {render};
    return{view,model,controller}
}


   
 
function drawing() {
    let dots = [];
    function moveTo(state, position) {
        if (state.addMode == true) {
            let bolletjes = dots.concat(state.dots)
            bolletjes.push(position)
            
            return { position: position, dots: bolletjes, addMode: state.addMode }
        }
        if (state.addMode == false) {
            return { position: position, dots: dots, addMode: state.addMode }
        }
    }
    function render(state){
        
        if(state.addMode==true){
            return[{type:"circle", center: state.position, radius:2, color:'red'}]

        }
        if(state.addMode==false){
            return[{type:"circle", center: state.position, radius:5, color:'red'}]
        }
        
           

    }
        
    

        
    function onMouseMove(state, args) {
        return moveTo(state, args.position)
    }
    function onMouseDown(state, args) {
        return { position: state.position, dots: state.dots, addMode: true, }
    }
    function onMouseUp(state, args) {
        return { position: state.position, dots: state.dots, addMode: false, }
    }
    function setAddMode(state, addMode) {
        return { position: state.position, dots: state.dots, addMode: addMode }
    }
    const controller = { onMouseDown, onMouseUp, onMouseMove }
    const view = { render }
    const model = { moveTo, setAddMode }
    return { view, model, controller }
}
function random(){
    function render(state){
        return[{type: "text", center: {x: 50, y: 50}, string:"1"}]
    }
    function throwDie(state,rng){
        rng = (4578 * rng ** 2 - 976161 * rng + 6156489) % 79729693;
        return{rng:rng,dieValue:dieValue}
    }
    function onKeyDown(state,args){
        if(args.key = " "){
            return{state:state}
        }
    }
    const model = {throwDie}
    const controller = {onKeyDown}
    const view = {render}
    return{model, controller, view}
}




function spel(){
    
    let grid = [10][10];
    grid[5][5]=5


}
