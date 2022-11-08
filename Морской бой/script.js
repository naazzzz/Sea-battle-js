function matrixArray(rows,columns){//Создаем и заполняем массив 0-ми
    var arr = new Array();
    for(var i=0; i<rows; i++){
      arr[i] = new Array();
      for(var j=0; j<columns; j++){
        arr[i][j] = 0;
      }
    }
    return arr;
  }

function check_free_on_line_row(arr,col,row,num_of_deck){//проверка свободного места для постановки корабля
    var current=0;
    for(let i=col; i<num_of_deck+col;i++){
        if (arr[row][i]==0){
            current++;
        }
    }
    if(current==num_of_deck){
        return true;
    }else{
        return false;
    }
}

function check_free_on_line_col(arr,col,row,num_of_deck){//проверка свободного места для постановки корабля
    var current=0;
    for(let i=row; i<num_of_deck+row;i++){
        if (arr[i][col]==0){
            current++;
        }
    }
    if(current==num_of_deck){
        return true;
    }else{
        return false;
    }
}

function position_new_ship(num_of_deck,arr){//добавление нового корабля в определенную позицию
    var busy=true;
    while(busy == true){
    busy=false;    
    var pos = Math.floor(Math.random()*2);//0 - горизонтально 1- вертикально
    switch(pos){
        case 0:
        //определим строку в матрице
        var row =Math.floor(Math.random()*10);
        //определим столбец в матрице
        var col =Math.floor(Math.random()*(10-num_of_deck+1));

        switch(row){//рассматриваем 3 случая выпадания для правильной проверки соседних клеток
            case 0:
            switch(col){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                case 0:
                    if(check_free_on_line_row(arr,col,row,num_of_deck+1)==true && check_free_on_line_row(arr,col,row+1,num_of_deck+1)==true){
                        for(let i =col;i<num_of_deck;i++){
                            arr[row][i]=1;
                        }
                    }else{
                        busy=true;
                    }
                    break;
                    case 10-num_of_deck:
                        if(check_free_on_line_row(arr,col-1,row,num_of_deck+1)==true && check_free_on_line_row(arr,col-1,row+1,num_of_deck+1)==true){
                            for(let i =col;i<num_of_deck+col;i++){
                                arr[row][i]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                        default:
                            if(check_free_on_line_row(arr,col-1,row,num_of_deck+2)==true && check_free_on_line_row(arr,col-1,row+1,num_of_deck+2)==true){
                                for(let i =col;i<num_of_deck+col;i++){
                                    arr[row][i]=1;
                                }
                            }else{
                                busy=true;
                            }
                            break;
            }
                break;
            case 9:
                    switch(col){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                        case 0:
                            if(check_free_on_line_row(arr,col,row,num_of_deck+1)==true && check_free_on_line_row(arr,col,row-1,num_of_deck+1)==true){
                                for(let i =col;i<num_of_deck;i++){
                                    arr[row][i]=1;
                                }
                            }else{
                                busy=true;
                            }
                            break;
                            case 10-num_of_deck:
                                if(check_free_on_line_row(arr,col-1,row,num_of_deck+1)==true && check_free_on_line_row(arr,col-1,row-1,num_of_deck+1)==true){
                                    for(let i =col;i<num_of_deck+col;i++){
                                        arr[row][i]=1;
                                    }
                                }else{
                                    busy=true;
                                }
                                break;
                                default:
                                    if(check_free_on_line_row(arr,col-1,row,num_of_deck+2)==true && check_free_on_line_row(arr,col-1,row-1,num_of_deck+2)==true){
                                        for(let i =col;i<num_of_deck+col;i++){
                                            arr[row][i]=1;
                                        }
                                    }else{
                                        busy=true;
                                    }
                                    break;
                    } 
                    break;
            default:
                switch(col){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                    case 0:
                        if(check_free_on_line_row(arr,col,row,num_of_deck+1)==true && check_free_on_line_row(arr,col,row-1,num_of_deck+1)==true && check_free_on_line_row(arr,col,row+1,num_of_deck+1)==true){
                            for(let i =col;i<num_of_deck;i++){
                                arr[row][i]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                        case 10-num_of_deck:
                            if(check_free_on_line_row(arr,col-1,row,num_of_deck+1)==true && check_free_on_line_row(arr,col-1,row-1,num_of_deck+1)==true && check_free_on_line_row(arr,col-1,row+1,num_of_deck+1)==true){
                                for(let i =col;i<num_of_deck+col;i++){
                                    arr[row][i]=1;
                                }
                            }else{
                                busy=true;
                            }
                            break;
                            default:
                                if(check_free_on_line_row(arr,col-1,row,num_of_deck+2)==true && check_free_on_line_row(arr,col-1,row-1,num_of_deck+2)==true && check_free_on_line_row(arr,col-1,row+1,num_of_deck+2)==true){
                                    for(let i =col;i<num_of_deck+col;i++){
                                        arr[row][i]=1;
                                    }
                                }else{
                                    busy=true;
                                }
                                break;
                } 
                break;        
        }
        break;
        case 1:
           //определим строку в матрице
        var row =Math.floor(Math.random()*(10-num_of_deck+1));
        //определим столбец в матрице
        var col =Math.floor(Math.random()*10);

        switch(col){//рассматриваем 3 случая выпадания для правильной проверки соседних клеток
            case 0:
                switch(row){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                case 0:
                    if(check_free_on_line_col(arr,col,row,num_of_deck+1)==true && check_free_on_line_col(arr,col+1,row,num_of_deck+1)==true){
                        for(let i =row;i<num_of_deck;i++){
                            arr[i][col]=1;
                        }
                    }else{
                        busy=true;
                    }
                    break;
                case 10-num_of_deck:
                    if(check_free_on_line_col(arr,col,row-1,num_of_deck+1)==true && check_free_on_line_col(arr,col+1,row-1,num_of_deck+1)==true){
                        for(let i =row;i<num_of_deck+row;i++){
                            arr[i][col]=1;
                        }
                    }else{
                        busy=true;
                    }
                    break;
                default:
                            if(check_free_on_line_col(arr,col,row-1,num_of_deck+2)==true && check_free_on_line_col(arr,col+1,row-1,num_of_deck+2)==true){
                                for(let i =row;i<num_of_deck+row;i++){
                                    arr[i][col]=1;
                                }
                            }else{
                                busy=true;
                            }
                            break;
            }
            break;
            case 9:
                switch(row){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                    case 0:
                        if(check_free_on_line_col(arr,col,row,num_of_deck+1)==true && check_free_on_line_col(arr,col-1,row,num_of_deck+1)==true){
                            for(let i =row;i<num_of_deck;i++){
                                arr[i][col]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                    case 10-num_of_deck:
                        if(check_free_on_line_col(arr,col,row-1,num_of_deck+1)==true && check_free_on_line_col(arr,col-1,row-1,num_of_deck+1)==true){
                            for(let i =row;i<num_of_deck+row;i++){
                                arr[i][col]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                    default:
                                if(check_free_on_line_col(arr,col,row-1,num_of_deck+2)==true && check_free_on_line_col(arr,col-1,row-1,num_of_deck+2)==true){
                                    for(let i =row;i<num_of_deck+row;i++){
                                        arr[i][col]=1;
                                    }
                                }else{
                                    busy=true;
                                }
                                break;
                }
                    break;
            default:
                switch(row){////рассматриваем 3 случая выпадания для правильной проверки соседних клеток
                    case 0:
                        if(check_free_on_line_col(arr,col,row,num_of_deck+1)==true && check_free_on_line_col(arr,col-1,row,num_of_deck+1)==true && check_free_on_line_col(arr,col+1,row,num_of_deck+1)==true){
                            for(let i =row;i<num_of_deck;i++){
                                arr[i][col]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                    case 10-num_of_deck:
                        if(check_free_on_line_col(arr,col,row-1,num_of_deck+1)==true && check_free_on_line_col(arr,col-1,row-1,num_of_deck+1)==true && check_free_on_line_col(arr,col+1,row-1,num_of_deck+1)==true){
                            for(let i =row;i<num_of_deck+row;i++){
                                arr[i][col]=1;
                            }
                        }else{
                            busy=true;
                        }
                        break;
                    default:
                                if(check_free_on_line_col(arr,col,row-1,num_of_deck+2)==true && check_free_on_line_col(arr,col-1,row-1,num_of_deck+2)==true && check_free_on_line_col(arr,col+1,row-1,num_of_deck+2)==true){
                                    for(let i =row;i<num_of_deck+row;i++){
                                        arr[i][col]=1;
                                    }
                                }else{
                                    busy=true;
                                }
                                break;
                }
                break;        
        }
            break;
        }
    }
   // alert("pos:"+pos+" row:"+row+" col"+col+"\n");
    return arr;
}
    
function new_game(){
    turn_order=0;
    end_pl_0=0;
    end_pl_1=0;
    arr_pl_0 = matrixArray(10,10);
    arr_pl_0 = position_new_ship(4,arr_pl_0);
    arr_pl_0 = position_new_ship(3,arr_pl_0);
    arr_pl_0 = position_new_ship(3,arr_pl_0);
    arr_pl_0 = position_new_ship(2,arr_pl_0);
    arr_pl_0 = position_new_ship(2,arr_pl_0);
    arr_pl_0 = position_new_ship(2,arr_pl_0);
    arr_pl_0 = position_new_ship(1,arr_pl_0);
    arr_pl_0 = position_new_ship(1,arr_pl_0);
    arr_pl_0 = position_new_ship(1,arr_pl_0);
    arr_pl_0 = position_new_ship(1,arr_pl_0);
    
    arr_pl_1 = matrixArray(10,10);
    arr_pl_1 = position_new_ship(4,arr_pl_1);
    arr_pl_1 = position_new_ship(3,arr_pl_1);
    arr_pl_1 = position_new_ship(3,arr_pl_1);
    arr_pl_1 = position_new_ship(2,arr_pl_1);
    arr_pl_1 = position_new_ship(2,arr_pl_1);
    arr_pl_1 = position_new_ship(2,arr_pl_1);
    arr_pl_1 = position_new_ship(1,arr_pl_1);
    arr_pl_1 = position_new_ship(1,arr_pl_1);
    arr_pl_1 = position_new_ship(1,arr_pl_1);
    arr_pl_1 = position_new_ship(1,arr_pl_1);
    
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            document.getElementById("p0_"+i+"."+j).style="background-image: none; background-position: center; border: 0px ";
            document.getElementById("p1_"+i+"."+j).style="background-image: none; background-position: center; border: 0px ";        } 
    }
    document.getElementById("score-player-1").innerHTML=end_pl_0;
document.getElementById("score-player-2").innerHTML=end_pl_1;
}

function click_pl1(){
    if(turn_order==1){
        alert("ХОД ИГРОКА 2!");
    }
    if(arr_pl_0[this.row][this.col]==1 && turn_order==0){
        document.getElementById("p0_"+this.row+"."+this.col).style="background-image: url('crest.png'); background-position: center; border: 0px ";
        turn_order=0;
        end_pl_0++;
        document.getElementById("score-player-1").innerHTML=end_pl_0;
    }
    if(arr_pl_0[this.row][this.col]==0 && turn_order==0){
        document.getElementById("p0_"+this.row+"."+this.col).style="background-image: url('crug.png'); background-position: center; border: 0px "; 
        turn_order=1;
    }
    end_pl_0=20;
    if(end_pl_0==20){
        alert("ПОБЕДА ИГРОКА 1");
        localStorage.setItem(document.getElementById("name_player_1").value,end_pl_0-end_pl_1);
        new_game();
    }
}
function click_pl2(){
    if(turn_order==0){
        alert("ХОД ИГРОКА 1!");
    }
    if(arr_pl_1[this.row][this.col]==1 && turn_order==1){
        document.getElementById("p1_"+this.row+"."+this.col).style="background-image: url('crest.png'); background-position: center; border: 0px ";
        turn_order=1;
        end_pl_1++;
        document.getElementById("score-player-2").innerHTML=end_pl_1;
    }
    if(arr_pl_1[this.row][this.col]==0 && turn_order==1){
        document.getElementById("p1_"+this.row+"."+this.col).style="background-image: url('crug.png'); background-position: center; border: 0px "; 
        turn_order=0;
    }
    end_pl_1=20;
    if(end_pl_1==20){
        alert("ПОБЕДА ИГРОКА 2");
        localStorage.setItem(document.getElementById("name_player_2").value,end_pl_1-end_pl_0);
        new_game();
    }
}

function score_table(){
    var str="";
for(text in localStorage){
    if(typeof(localStorage[text])=="string"){
    str+=text +" "+localStorage[text]+"\n"; 
    }
}
alert(str);
}

var turn_order=0;
var  end_pl_0=0;
var end_pl_1=0;
var arr_pl_0 = matrixArray(10,10);
var arr_pl_1 = matrixArray(10,10);
new_game();

for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        document.getElementById("p0_"+i+"."+j).addEventListener('click',{handleEvent: click_pl1, row:i, col: j});
        document.getElementById("p1_"+i+"."+j).addEventListener('click',{handleEvent: click_pl2, row:i, col: j});
    } 
}
document.getElementById("score_table").addEventListener('click',score_table);
document.getElementById("new_game").addEventListener('click',new_game);
document.getElementById("score-player-1").innerHTML=end_pl_0;
document.getElementById("score-player-2").innerHTML=end_pl_1;