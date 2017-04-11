//webapp处理，注意取整，不然不同屏幕可能出现小数跳动
var documentWidth=window.screen.availWidth;//移动设备
var gridContainerWidth=parseInt(documentWidth*0.92);//内同宽度
var cellSideLength=parseInt(documentWidth*0.18);//小方格边长
var cellSpace=parseInt(documentWidth*0.04);//间距




function getPosTop(i,j){
	//return 20+120*i;
	return cellSpace+(cellSideLength+cellSpace)*i;
}

function getPosLeft(i,j){
	//return 20+120*j;
	return cellSpace+(cellSideLength+cellSpace)*j;
}

function getNumberBackgroundColor(number){
	switch(number){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
		/* case 2:return "images/1.jpg";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break; */
	}
	return "black";
 } 

/* function getImg(number){
	switch(number){
		
		case 2:return "images/1.jpg";break;
        case 4:return "images/2.jpg";break;
        case 8:return "images/3.jpg";break;
        case 16:return "images/4.jpg";break;
        case 32:return "images/5.jpg";break;
        case 64:return "images/6.jpg";break;
        case 128:return "images/7.jpg";break;
        case 256:return "images/8.jpg";break;
        case 512:return "images/9.jpg";break;
        case 1024:return "images/10.jpg";break;
        case 2048:return "images/11.jpg";break;
        case 4096:return "images/12.jpg";break;
        case 8192:return "images/13.jpg";break;
	}
	return "black"; 
}*/

function getNumberColor(number){
	if(number<=4)
		return "#776e65";
	
	return "white";
}

function getNumberText(number){
	switch( number ){
		//企业版
        /* case 2:return "小白";break;
        case 4:return "实习生";break;
        case 8:return "程序猿";break;
        case 16:return "项目经理";break;
        case 32:return "架构师";break;
        case 64:return "技术经理";break;
        case 128:return "高级经理";break;
        case 256:return "技术总监";break;
        case 512:return "副总裁";break;
        case 1024:return "CTO";break;
        case 2048:return "总裁";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break; */
		/* //魔道祖师版
		case 2:return "小思追";break;
        case 4:return "温宁";break;
        case 8:return "大小姐";break;
        case 16:return "姐姐";break;
        case 32:return "姐夫";break;
        case 64:return "宋基友";break;
        case 128:return "晓真人";break;
        case 256:return "垃圾洋";break;
        case 512:return "大哥";break;
        case 1024:return "瑶妹";break;
        case 2048:return "江澄";break;
        case 4096:return "汪叽";break;
        case 8192:return "WIFI";break; */
		//乔振宇版
		case 2:
		
		return "images/1.jpg";break;
        case 4:return "images/2.jpg";break;
        case 8:return "images/3.jpg";break;
        case 16:return "images/4.jpg";break;
        case 32:return "images/5.jpg";break;
        case 64:return "images/6.jpg";break;
        case 128:return "images/7.jpg";break;
        case 256:return "images/8.jpg";break;
        case 512:return "images/9.jpg";break;
        case 1024:return "images/10.jpg";break;
        case 2048:return "images/11.jpg";break;
        case 4096:return "images/12.jpg";break;
        case 8192:return "images/13.jpg";break;
    }

    return "black";
}

/* function setImg(number){
	for(var i=0;i<13;i++){
		imgs[i]=new Image();
		imgs[i].src="images/"+(i+1)+".jpg";
	}
	switch(number){
		case 2:return imgs[0].src;break;
		case 4:return imgs[1].src;break;
		case 8:return imgs[2].src;break;
		case 16:return imgs[3].src;break;
		case 32:return imgs[4].src;break;
		case 64:return imgs[5].src;break;
		case 128:return imgs[6].src;break;
		case 256:return imgs[7].src;break;
		case 512:return imgs[8].src;break;
		case 1024:return imgs[9].src;break;
		case 2048:return imgs[10].src;break;
		case 4096:return imgs[11].src;break;
		case 8192:return imgs[12].src;break;
		
	}
	
	return "images/0.jpg";		
}
 */

function setImg(number){
	for(var i=0;i<13;i++){
		imgs[i]=new Image();
		imgs[i].src="images/"+(i+1)+".jpg";
	}
	switch(number){
		case 2:return imgs[0];break;
		case 4:return imgs[1];break;
		case 8:return imgs[2];break;
		case 16:return imgs[3];break;
		case 32:return imgs[4];break;
		case 64:return imgs[5];break;
		case 128:return imgs[6];break;
		case 256:return imgs[7];break;
		case 512:return imgs[8];break;
		case 1024:return imgs[9];break;
		case 2048:return imgs[10];break;
		case 4096:return imgs[11];break;
		case 8192:return imgs[12];break;
		
	}
	/* var initImg=new Image();
	initImg.src="images/0.jpg";
	return initImg;		 */
	return "";
}

		
function nospace(board){
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++)
			if(board[i][j]==0)
				return false;
			
	return true;
}

function canMoveLeft(board){
	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++){
			if(board[i][j]!=0)
				if(board[i][j-1]==0||board[i][j-1]==board[i][j])
					return true;
		}
		
	return false;
}

function canMoveUp(board){
	for(var j=0;j<4;j++)
		for(var i=1;i<4;i++){
			if(board[i][j]!=0)
				if(board[i-1][j]==0||board[i-1][j]==board[i][j])
					return true;
		}
		
	return false;
}

function canMoveRight(board){
	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--){
			if(board[i][j]!=0)
				if(board[i][j+1]==0||board[i][j+1]==board[i][j])
					return true;
		}
		
	return false;
}

function canMoveDown(board){
	for(var j=0;j<4;j++)
		for(var i=2;i>=0;i--){
			if(board[i][j]!=0)
				if(board[i+1][j]==0||board[i+1][j]==board[i][j])
					return true;
		}
		
	return false;
}

function noBlockHorizontal(row,col1,col2,board){
	for(var i=col1+1;i<col2;i++)
		if(board[row][i]!=0)
			return false;
	return true;
}

function noBlockVertical(col,row1,row2,board){
	for(var i=row1+1;i<row2;i++)
		if(board[i][col]!=0)
			return false;
	return true;
}

function nomove(board){
	if(canMoveLeft(board)||canMoveUp(board)||
		canMoveRight(board)||canMoveDown(board)){
			return false;
		}
	
	return true;
}


//设置cookie
function setCookie(name, value, iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);//N天以后日期
	document.cookie=name+'='+value+';expires='+oDate;
}

//获取cookie
function getCookie(name){
	//'username=abc; password=123456; aaa=123; bbb=4r4er'
	var arr=document.cookie.split('; ');
	var i=0;
	
	//arr->['username=abc', 'password=123456', ...]
	
	for(i=0;i<arr.length;i++){
		//arr2->['username', 'abc']
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	
	return '';
}