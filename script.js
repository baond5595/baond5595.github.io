window.onload = function() {

  var current,screen,output,cham,thucthi;

  screen = document.getElementById("result");

  var ele = document.querySelectorAll(".num");
  var l = ele.length;
  for(var i = 0; i < l; i++ ) {
    ele[i].addEventListener("click",function() {      
      num = this.value;    
      output = screen.innerHTML +=num;
   },false);
    }// Nhập số từ 1-9
    document.querySelector(".num-c").addEventListener("click",function() {        
      screen.innerHTML = "";        
    },false);  // Xóa màn hình

    document.querySelector(".cham").addEventListener("click",function() {
      cham = this.value;
      if(screen.innerHTML === "") {
       output = screen.innerHTML = screen.innerHTML.concat("0.");
     }
     else if(screen.innerHTML === output) {
      screen.innerHTML = screen.innerHTML.concat(".");
    }
    },false);// thuc thi dấu chấm"."
    
    document.querySelector("#kq").addEventListener("click",function() {   
      if(screen.innerHTML === output) {      
        screen.innerHTML = eval(output);
      }       
      else {
        screen.innerHTML = "";
      }         
    },false); // thuc thi dấu "="
    
    var elem = document.querySelectorAll(".thucthi");
    var l1 = elem.length;   
    for(var i = 0; i < l1; i++ ) {  
      elem[i].addEventListener("click",function() {      
        thucthi = this.value;        
        if(screen.innerHTML === "") {            
          screen.innerHTML = screen.innerHTML.concat("");   
        }
        else if(output) {
          screen.innerHTML = output.concat(thucthi);
        }
      },false);
      }       // Thực thi phép toán + - * /
       document.querySelector("#gt").addEventListener("click",function() {        
        var x=screen.innerHTML;
        var j=1; 
        for(var i=1; i<=x; i++){
          j*=i;
        }
        screen.innerHTML=j;     
    },false);
       //Thuc thi tinh giai thua
     document.querySelector("#can").addEventListener("click",function() {        
        var y=screen.innerHTML;
     screen.innerHTML = Math.sqrt(y); 
    },false);
     // Tinh can bac 2
      document.querySelector("#binhphuong").addEventListener("click",function() {        
        var z=screen.innerHTML;
      screen.innerHTML= (z * z);
    },false);
    // Tinh binhphuong
    document.querySelector("#phantram").addEventListener("click",function() {        
        var k=screen.innerHTML;
      screen.innerHTML= (k / 100);
    },false);
      // Thuc thi phep toan %
      document.querySelector("#del").addEventListener("click",function() { 
     var  str=screen.innerHTML; 
        screen.innerHTML = str.substring(0, str.length - 1);
    },false);
      // Thuc thi nut del
    }