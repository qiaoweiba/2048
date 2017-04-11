var board=new Array();	//4*4数组存放数字
var score=0;
var hasConflicted=new Array();	//记录某元素是否冲突
var maxScore=0;

//webapp处理，记录开始和结束的坐标，用于计算方向
var startx=0;
var starty=0;
var tox=0;
var toy=0;

var img=new Array();
var imgs=new Array();

var documentWidth=window.screen.availWidth;//移动设备
var gridContainerWidth = documentWidth;
$(document).ready(function(){
	prepareForMobile();
	newGame();
});


function prepareForMobile(){
	if(documentWidth>500){
		//电脑端，大于500px就设置成为500
		gridContainerWidth=500;
		cellSpace=20;
		cellSideLength=100;
	}
	//移动端设置container区域
	$("#gridContainer").css("width",gridContainerWidth-2*cellSpace);
	$("#gridContainer").css("height",gridContainerWidth-2*cellSpace);
	$("#gridContainer").css("padding",cellSpace);
	$("#gridContainer").css("borderRadius",0.02*gridContainerWidth+"px");
	//设置所有小格子
	$(".gridCell").css("width",cellSideLength);
	$(".gridCell").css("height",cellSideLength);
	$(".gridCell").css("borderRadius",0.06*cellSideLength+"px");

}

function newGame(){
	//初始化棋盘格
	init();
	//在随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function init(){
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	
	for(var i=0;i<4;i++){
		board[i]=new Array();
		hasConflicted[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
			hasConflicted[i][j]=false;
		}
	}
		
		
	updateBoardView();
	
	score=0;
	$("#score").text(score);
	 maxScore=$("#maxScore");
	//读取cookie中的score
	var cookie_score=getCookie("score");
	if(cookie_score){
	
		//maxScore.innerHTML=cookie_score;
		maxScore.text(cookie_score);
	}else{
		//maxScore.innerHTML=0;
		maxScore.text(0);
	}
	
}

function updateBoardView(){
	$(".numberCell").remove();
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			$("#gridContainer").append('<div class="numberCell" id="number-cell-'+i+'-'+j+'"><img class="imgCell" alt="" id="img-cell-'+i+'-'+j+'"></img></div>');
			
			theNumberCell=$('#number-cell-'+i+'-'+j);
			
			/* img[i]=new Array();
			img[i][j] = new Image();
			img[i][j].src=setImg(board[i][j]);
			document.images[3*i+j].width=cellSideLength;
			document.images[3*i+j].height=cellSideLength;
			document.images[3*i+j].src=img[i][j].src; */
			img[4*i+j] = new Image();
			img[4*i+j]=setImg(board[i][j]);
			
			document.images[4*i+j].src=img[4*i+j].src;
		
			if(board[i][j]===0){
				theNumberCell.css("width","0px");
				theNumberCell.css("height","0px");
				theNumberCell.css("top",getPosTop(i,j));
				theNumberCell.css("left",getPosLeft(i,j));
				theNumberCell.css("font-size","40px");
				document.images[4*i+j].width=0;
			document.images[4*i+j].height=0;
			}else{
				/* theNumberCell.css("width","100px");
				theNumberCell.css("height","100px"); */
				theNumberCell.css("width",cellSideLength);
				theNumberCell.css("height",cellSideLength);
				theNumberCell.css("top",getPosTop(i,j));
				theNumberCell.css("left",getPosLeft(i,j));
				theNumberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
				theNumberCell.css("background",getNumberBackgroundColor(board[i][j]));
				theNumberCell.css("color",getNumberColor(board[i][j]));
				//theNumberCell.text(getNumberText(board[i][j]));
				
				//theNumberCell.css("font-size",0.6*cellSideLength+"px"); 若font-size出现在这里，只对board[i][j]不为零的情况设置CSS，为零时产生的新值font-size认为40px
				
				/* theNumberCell.css("line-height",cellSideLength+"px");
				theNumberCell.css("borderRadius",0.06*cellSideLength+"px"); */
				 // theNumberCell.innerHTML=board[i][j];
				 
				//theNumberCell.text(board[i][j]);
				//theImgCell("src",getImg(board[i][j]));
				document.images[4*i+j].width=cellSideLength;
			    document.images[4*i+j].height=cellSideLength;
			}
			
			hasConflicted[i][j]=false;
		}
		$(".numberCell").css("line-height",cellSideLength+"px");
		$(".numberCell").css("font-size",0.2*cellSideLength+"px");
		$(".numberCell").css("borderRadius",0.06*cellSideLength+"px");
		$(".imgCell").css("borderRadius",0.06*cellSideLength+"px");
	 
	
}

function generateOneNumber(){
	if(nospace(board))
		return false;
	//随机产生一个位置
	var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));
	
	/* while(true){
		if(board[randx][randy]==0)
			break;
	} */
	var times=0;
	while(times<50){
		if(board[randx][randy]==0)
			break;
		
		randx=parseInt(Math.floor(Math.random()*4));
	    randy=parseInt(Math.floor(Math.random()*4));
		
		times++;
	}
	if(times==50){
		for(var i=0;i<4;i++)
			for(var j=0;j<4;j++){
				if(board[i][j]==0){
					randx=i;
					randy=j;
				}
			}
	}
	//随机产生一个数字
	var randNumber=Math.random()<0.5?2:4;
	//在随机位置显示随机数字
	board[randx][randy]=randNumber;
	showNumberWithAnimation(randx,randy,randNumber);
	updateBoardView();
	return true;
}

$(document).keydown(function(event){
	switch(event.keyCode){
		case 37://left
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
				
			}
			
			break;
		case 38://up
			if(moveUp()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
			
			break;
		case 39://right
			if(moveRight()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
			
			break;
		case 40://down
			if(moveDown()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
			break;
		default: //default
			break;
	}
});


document.addEventListener('touchstart',function(event){
	//touches.event
	startx=event.touches[0].pageX;
	starty=event.touches[0].pageY;
});


document.addEventListener('touchend',function(event){
	//changedTouches
	tox=event.changedTouches[0].pageX;
	toy=event.changedTouches[0].pageY;
	
	var deltax=tox-startx;
	var deltay=toy-starty;
	
	//判断是否点击，小于某个值，不是移动操作
	if(Math.abs(deltax)<0.3*documentWidth&&Math.abs(deltay)<0.3*documentWidth){
		return ;
	}
	
	
	if(Math.abs(deltax)>=Math.abs(deltay)){
		//x
		if(deltax>0){
			//move right
			if(moveRight()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
			
		}
		else{
			//move left
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
				
			}
		}
	}
	else{
		//y
		if(deltay>0){
			//move down 
			if(moveDown()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
		}
		else{
			//move up 
			if(moveUp()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isGameOver()",300);
			}
		}
	}
});

function moveLeft(){
	if(!canMoveLeft(board)){
		return false;
	}

	//moveLeft
	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
				for(var k=0;k<j;k++){
					if(board[i][k]==0&&noBlockHorizontal(i,k,j,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontal(i,k,j,board)&&!hasConflicted[i][k]){
						//move
						showMoveAnimation(i,j,i,k);
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//add score
						score+=board[i][k];
						updateScore(score);
						
						hasConflicted[i][k]=true;
						continue;
					}
				}
			}
		}
		setTimeout("updateBoardView()",200);
		return true;
}

function moveUp(){
	if(!canMoveUp(board)){
		return false;
	}
	document.addEventListener('touchmove',function(event){
		event.preventDefault();
	});

	//moveUp
	for(var j=0;j<4;j++)
		for(var i=1;i<4;i++){
			if(board[i][j]!=0){
				for(var k=0;k<i;k++){
					if(board[k][j]==0&&noBlockVertical(j,k,i,board)){
						//move
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[k][j]==board[i][j]&&noBlockVertical(j,k,i,board)&&!hasConflicted[k][j]){
						//move
						showMoveAnimation(i,j,k,j);
						//add
						
						board[k][j]+=board[i][j];
						board[i][j]=0;
						
						//add score
						score+=board[k][j];
						updateScore(score);
						
						hasConflicted[k][j]=true;
						continue;
					}
				}
			}
		}
		setTimeout("updateBoardView()",200);
		return true;
}

function moveRight(){
	if(!canMoveRight(board)){
		return false;
	}
	//moveRight
	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--){
			if(board[i][j]!=0){
				for(var k=3;k>j;k--){
					if(board[i][k]==0&&noBlockHorizontal(i,j,k,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontal(i,j,k,board)&&!hasConflicted[i][k]){
						//move
						showMoveAnimation(i,j,i,k);
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						
						//add score
						score+=board[i][k];
						updateScore(score);
						
						hasConflicted[i][k]=true;
						continue;
					}
				}
			}
		}
		setTimeout("updateBoardView()",200);
		return true;
}

function moveDown(){
	if(!canMoveDown(board)){
		return false;
	}
	document.addEventListener('touchmove',function(event){
		event.preventDefault();
	});
	//moveDown
	for(var j=0;j<4;j++)
		for(var i=2;i>=0;i--){
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j]==0&&noBlockVertical(j,i,k,board)){
						//move
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[k][j]==board[i][j]&&noBlockVertical(j,i,k,board)&&!hasConflicted[k][j]){
						//move
						showMoveAnimation(i,j,k,j);
						//add
						board[k][j]+=board[i][j];
						board[i][j]=0;
						
						//add score
						score+=board[k][j];
						updateScore(score);
						
						hasConflicted[k][j]=true;
						continue;
					}
				}
			}
		}
		setTimeout("updateBoardView()",200);
		return true;
}

function isGameOver(){
	if(nospace(board)&&nomove(board)){
		gameOver();
	}
   
}


function gameOver(){
	//游戏结束，将得分与cookie中的得分相比较
	var cookie_score=getCookie("score");
	if(cookie_score){
		if(score>cookie_score){
			//更新cookie
			setCookie("score",score,5);
		}
	}else{
		//将分数存入cookie
		setCookie("score",score,5);
	}
	alert("游戏结束！");
	//alert("Game Over !");
}