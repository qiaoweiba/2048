var img=new Array();
var imgs=new Array();
	$(document).ready(function(){
		/* $("#number-1").text("1");
		$("#number-1").change(init1()); */
		init();
	});	
		function init1(){
			
			/* imgs=document.images
			alert(imgs[0]==document.images[0]);
			alert(document.images[0].src);
			alert(document.images[1].src); */
			 for(var i=0;i<document.images.length;i++){
			 img[i]=new Image();
			img[i].src="images/"+(i+1)+".jpg";
			document.images[i].src=img[i].src;
			
			
			 }
			 
			}
		
		function init2(){
			for(var i=0;i<document.images.length;i++){
			var j=document.images.length-i;
			img[i]=new Image();
			img[i].src="images/"+j+".jpg";
			 document.images[i].src=img[i].src;
			 } 
			
			
			}
		
		function init(){
			for(var i=0;i<4;i++){
				/* $("#gridContainer").append('<div class="imgCell"><img id="img-cell-'+i+'-'+j+'"></img></div>');
			theImgCell=$('#img-cell-'+i+'-'+j); */
			$("#gridContainer").append('<div class="imgCell"><img id="img-cell-'+i+'"></img></div>');
			//theImgCell=$('#img-cell-'+i);
			 /* img[i]=new Image();
			img[i].src="images/"+(i+1)+".jpg"; */
			img[i]=new Image();
			img[i].src=setImg(8);
			document.images[i].src=img[i].src;
			
			
			 }
			
		}
		
		function setImg(number){
			for(var i=0;i<4;i++){
				imgs[i]=new Image();
				imgs[i].src="images/"+(i+1)+".jpg";
			}
			switch(number){
				case 2:return imgs[0].src;break;
				case 4:return imgs[1].src;break;
				case 8:return imgs[2].src;break;
				case 16:return imgs[3].src;break;
			}
			
			return "images/0.jpg";
			
		}