
var UPL = [
    {
        place:"2",                  
        name:"Динамо Київ",  
        logo:"img/UPL/FC_Dynamo_Kyiv.png",            
        games:"16", 
        win:"14", 
        draw:"1", 
        lose:"1",
        goal_difference:"37/6",
        score:"43"
    },
    {
        place:"1", 
        name:"Шахтар Донецьк",
        logo:"img/UPL/Shakhtar.png", 
        games:"16",
        win:"14", 
        draw:"1", 
        lose:"1",
        goal_difference:"50/11",
        score:"43"
    },
    {
        place:"3",       
        name:"Зоря Луганськ",
        logo:"img/UPL/Zorya.png", 
        games:"16",
        win:"10", 
        draw:"4", 
        lose:"2",
        goal_difference:"32/14",
        score:"34"
    },
    {             
        place:"4", 
        name:"Дніпро Дніпропетровськ",
        logo:"img/UPL/FC_Dnipro_Dnipropetrovsk.png", 
        games:"16",
        win:"8", 
        draw:"4", 
        lose:"4",
        goal_difference:"28/15",
        score:"28"
    },
    {                 
        place:"5", 
        name:"Волинь Луцьк",
        logo:"img/UPL/Volin'.png", 
        games:"16",
        win:"18", 
        draw:"3", 
        lose:"5",
        goal_difference:"26/23",
        score:"27"
    },
    {                 
        place:"6", 
        name:"Ворскла Полтава",
        logo:"img/UPL/%D0%A4%D0%9A_%D0%92%D0%BE%D1%80%D1%81%D0%BA%D0%BB%D0%B0.png",            
        games:"16",  
        win:"6", 
        draw:"7", 
        lose:"3",
        goal_difference:"20/19",
        score:"25"
    },
    { 
        place:"13", 
        name:"Говерла Ужгород",
        logo:"img/UPL/FC_Hoverla-Uzhhorod.png", 
        games:"16",
        win:"1", 
        draw:"7", 
        lose:"8",
        goal_difference:"11/26",
        score:"10"
    },
    {                                                                             
        place:"7", 
        name:"Олександрія",
        logo:"img/UPL/%D0%A4%D0%9A_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F.png", 
        games:"16",
        win:"6", 
        draw:"4", 
        lose:"6",
        goal_difference:"19/18",
        score:"22"
    },
    {                                                                                   
        place:"9", 
        name:"Сталь Дніпродзержинськ",
        logo:"img/UPL/Stal'.png", 
        games:"16",
        win:"4", 
        draw:"4", 
        lose:"8",
        goal_difference:"14/22",
        score:"16"
    },
    {                                                                                
        place:"14", 
        name:"Металург Запоріжжя",
        logo:"img/UPL/%D0%A4%D0%9A_%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F.gif", 
        games:"16",
        win:"0", 
        draw:"3", 
        lose:"13",
        goal_difference:"7/50",
        score:"3"
    },
    {                                                                              
        place:"11", 
        name:"Металіст Харків",
        logo:"img/UPL/Metalist.png", 
        games:"16",
        win:"1", 
        draw:"8", 
        lose:"7",
        goal_difference:"12/25",
        score:"11"
    },
    {                                                                            
        place:"12", 
        name:"Чорноморець Одеса",
        logo:"img/UPL/%D0%A1hornomorets.png", 
        games:"16",
        win:"1", 
        draw:"7", 
        lose:"8",
        goal_difference:"15/28",
        score:"10"
    },
    {       
        place:"10", 
        name:"Олімпік Донецьк",
        logo:"img/UPL/olimpic_donetsk.png", 
        games:"16",
        win:"4", 
        draw:"2", 
        lose:"10",
        goal_difference:"16/25",
        score:"14"
    },
    {        
        place:"8", 
        name:"Карпати Львів",
        logo:"img/UPL/%D0%A4%D0%9A_%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D0%B8_%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.png",
        games:"16",
        win:"6", 
        draw:"3", 
        lose:"7",
        goal_difference:"18/23",
        score:"21"
    }
];

var Table = document.createElement("TABLE");

var TableRow = document.createElement("TR");

var Place = document.createElement("TH");

Place.innerHTML = "Місце";

var Name = document.createElement("TH");

Name.innerHTML = "Назва";

var ImgLogo = document.createElement('IMG');

ImgLogo.src = " ";

var Logo = document.createElement("TH");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TH");

Games.innerHTML = "Ігор";

var Win = document.createElement("TH");

Win.innerHTML = "Перемог";

var Draw = document.createElement("TH");

Draw.innerHTML = "Нічиїх";

var Lose = document.createElement("TH");

Lose.innerHTML = "Поразок";

var Goal_difference = document.createElement("TH");

Goal_difference.innerHTML = "Різниця м'ячів";

var Score = document.createElement("TH");

Score.innerHTML = "Очки";

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);


var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[0].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[0].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[0].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[0].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[0].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[0].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[0].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[0].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[0].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[1].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[1].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[1].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[1].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[1].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[1].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[1].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[1].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[1].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[2].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[2].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[2].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[2].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[2].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[2].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[2].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[2].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[2].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[3].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[3].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[3].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[3].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[3].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[3].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[3].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[3].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[3].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[4].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[4].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[4].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[4].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[4].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[4].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[4].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[4].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[4].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[5].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[5].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[5].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[5].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[5].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[5].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[5].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[5].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[5].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[6].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[6].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[6].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[6].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[6].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[6].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[6].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[6].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[6].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[7].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[7].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[7].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[7].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[7].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[7].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[7].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[7].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[7].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[8].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[8].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[8].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[8].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[8].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[8].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[8].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[8].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[8].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[9].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[9].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[9].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[9].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[9].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[9].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[9].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[9].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[9].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[10].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[10].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[10].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[10].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[10].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[10].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[10].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[10].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[10].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[11].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[11].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[11].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[11].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[11].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[11].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[11].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[11].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[11].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

TableRow.setAttribute("class", "double");

var Place = document.createElement("TD");

Place.innerHTML = UPL[12].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[12].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[12].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[12].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[12].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[12].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[12].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[12].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[12].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = UPL[13].place;

var Name = document.createElement("TD");

Name.innerHTML = UPL[13].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = UPL[13].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = UPL[13].games;

var Win = document.createElement("TD");

Win.innerHTML = UPL[13].win;

var Draw = document.createElement("TD");

Draw.innerHTML = UPL[13].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = UPL[13].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[13].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = UPL[13].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var APL = [
    {                                                                             
        place: "1", 
        name:"Leicester",
        logo:"img/APL/Leicester_City.png", 
        games:"22",
        win:"12", 
        draw:"8",
        lose:"2",
        goal_difference:"39/26",
        score:"44"
    },
    {                                                                                
        place:"3", 
        name:"Arsenal",
        logo:"img/APL/Arsenal_FC..png", 
        games:"21",
        win:"13", 
        draw:"4", 
        lose:"4",
        goal_difference:"37/21",
        score:"43"
    },
    {                                                                       
        place:"2", 
        name:"Manchester_City",
        logo:"img/APL/Manchester_City.png", 
        games:"22",
        win:"13", 
        draw:"4", 
        lose:"5",
        goal_difference:"43/21",
        score:"43"
    },
    {     
        place:"6", 
        name:"West_Ham",
        logo:"img/APL/West_Ham_United.png", 
        games:"22",
        win:"9", 
        draw:"8", 
        lose:"5",
        goal_difference:"34/26",
        score:"35"
    },
    {                        
        place:"7", 
        name:"Stoke_City",
        logo:"img/APL/Stoke_City_FC.png", 
        games:"21",
        win:"9", 
        draw:"5", 
        lose:"7",
        goal_difference:"24/22",
        score:"32"
    },
    {                                                                         
        place:"9", 
        name:"Liverpool",
        logo:"img/APL/Liverpool.png", 
        games:"22",
        win:"8", 
        draw:"7", 
        lose:"7",
        goal_difference:"25/28",
        score:"31"
    },
    {                      
        place:"11", 
        name:"Everton",
        logo:"img/APL/Everton_FC.png", 
        games:"22",
        win:"6", 
        draw:"11", 
        lose:"5",
        goal_difference:"39/32",
        score:"29"
    },
    {                                                                         
        place:"13", 
        name:"West_Bromwich",
        logo:"img/APL/west_bromvich_albion.png", 
        games:"22",
        win:"7", 
        draw:"6", 
        lose:"9",
        goal_difference:"22/30",
        score:"27"
    },
    {                                                                                
        place:"14", 
        name:"Chelsea",
        logo:"img/APL/chelsea.png", 
        games:"22",
        win:"6", 
        draw:"7", 
        lose:"9",
        goal_difference:"31/34",
        score:"25"
    },
    {                                                                      
        place:"5", 
        name:"Manchester_United",
        logo:"img/APL/Manchester_United.png", 
        games:"22",
        win:"10", 
        draw:"7", 
        lose:"5",
        goal_difference:"28/20",
        score:"37"
    },
    {                                                                                
        place:"12",
        name:"Watford",
        logo:"img/APL/Watford.png", 
        games:"21",
        win:"8", 
        draw:"5", 
        lose:"8",
        goal_difference:"25/24",
        score:"29"
    },
    {                                                                           
        place:"10", 
        name:"Southgampton", 
        logo:"img/APL/FC_Southampton.png", 
        games:"22",
        win:"8", 
        draw:"6", 
        lose:"8",
        goal_difference:"31/24",
        score:"30"
    },
    {                                                                              
        place:"4", 
        name:"Tottenham",
        logo:"img/APL/Tottenham_Hotspur.png", 
        games:"22",
        win:"10", 
        draw:"9", 
        lose:"3",
        goal_difference:"38/18",
        score:"39"
    },
    {                                                                         
        place:"8", 
        name:"Crystal_Palace",
        logo:"img/APL/Kristal_Palace.png", 
        games:"22",
        win:"9", 
        draw:"4", 
        lose:"9",
        goal_difference:"23/24",
        score:"31"
    },
    {                                                                       
        place:"18", 
        name:"Swansea",
        logo:"img/APL/Swansea_City.png", 
        games:"21",
        win:"4", 
        draw:"7", 
        lose:"10",
        goal_difference:"19/30",
        score:"19"
    },
    {                                                                    
        place:"16", 
        name:"Norwich",
        logo:"img/APL/Norwich_City.png", 
        games:"22",
        win:"5", 
        draw:"6", 
        lose:"11",
        goal_difference:"24/38",
        score:"23"
    },
    {                           
        place:"15", 
        name:"Bournemouth",
        logo:"img/APL/AFC_Bournemouth.png", 
        games:"22",
        win:"6", 
        draw:"6", 
        lose:"10",
        goal_difference:"26/37",
        score:"24"
    },
    {       
        place:"20", 
        name:"Aston_Villa",
        logo:"img/APL/Aston_Villa_FC.png", 
        games:"22",
        win:"2", 
        draw:"6", 
        lose:"14",
        goal_difference:"18/38",
        score:"12"
    },
    {                                                             
        place:"19", 
        name:"Sunderland",
        logo:"img/APL/Sunderland.png", 
        games:"22",
        win:"5", 
        draw:"3", 
        lose:"14",
        goal_difference:"27/45",
        score:"18"
    },
    {       
        place:"17", 
        name:"Newcastle",
        logo:"img/APL/newcastle_united.png", 
        games:"22",
        win:"5", 
        draw:"6", 
        lose:"11",
        goal_difference:"24/39",
        score:"21"
    },
];

var Table = document.createElement("TABLE");

var TableRow = document.createElement("TR");

var Place = document.createElement("TH");

Place.innerHTML = "Місце";

var Name = document.createElement("TH");

Name.innerHTML = "Назва";

var ImgLogo = document.createElement('IMG');

ImgLogo.src = " ";

var Logo = document.createElement("TH");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TH");

Games.innerHTML = "Ігор";

var Win = document.createElement("TH");

Win.innerHTML = "Перемог";

var Draw = document.createElement("TH");

Draw.innerHTML = "Нічиїх";

var Lose = document.createElement("TH");

Lose.innerHTML = "Поразок";

var Goal_difference = document.createElement("TH");

Goal_difference.innerHTML = "Різниця м'ячів";

var Score = document.createElement("TH");

Score.innerHTML = "Очки";

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var TableRow = document.createElement("TR");

var Place = document.createElement("TD");

Place.innerHTML = APL[1].place;

var Name = document.createElement("TD");

Name.innerHTML = APL[1].name;

var ImgLogo = document.createElement('IMG');

ImgLogo.src = APL[1].logo;

var Logo = document.createElement("TD");

Logo.setAttribute("class", "img");

Logo.appendChild(ImgLogo);

var Games = document.createElement("TD");

Games.innerHTML = APL[1].games;

var Win = document.createElement("TD");

Win.innerHTML = APL[1].win;

var Draw = document.createElement("TD");

Draw.innerHTML = APL[1].draw;

var Lose = document.createElement("TD");

Lose.innerHTML = APL[1].lose;

var Goal_difference = document.createElement("TD");

Goal_difference.innerHTML = UPL[1].goal_difference;

var Score = document.createElement("TD");

Score.innerHTML = APL[1].score;

TableRow.appendChild(Place);
TableRow.appendChild(Logo);
TableRow.appendChild(Name);
TableRow.appendChild(Games);
TableRow.appendChild(Win);
TableRow.appendChild(Draw);
TableRow.appendChild(Lose);
TableRow.appendChild(Goal_difference);
TableRow.appendChild(Score);

Table.appendChild(TableRow);

document.getElementById("js-table").appendChild(Table);

var Bundesliga = [
    {                                                                           
        place:"1", 
        name:"Bayern",
        logo:"img/Bundesliga/Bayern_M%C3%BCnchen.png", 
        games:"17",
        win:"15", 
        draw:"1", 
        lose:"1",
        goal_difference:"46/8",
        score:"46"
    },
    {                                                                                  
        place:"5", 
        name:"Bayer",
        logo:"img/Bundesliga/Bayer_Leverkusen.png", 
        games:"17",
        win:"8",
        draw:"3", 
        lose:"6",
        goal_difference:"25/20",
        score:"27"
    },
    {                                                                     
        place:"2", 
        name:"Borussia_D",
        logo:"img/Bundesliga/Borussia_Dortmund.png", 
        games:"17",
        win:"12", 
        draw:"2", 
        lose:"3",
        goal_difference:"47/23",
        score:"38"
    },
    {                           
        place:"4", 
        name:"Borussia_M",
        logo:"img/Bundesliga/borussia_monchengladbach.png", 
        games:"17",
        win:"9", 
        draw:"2", 
        lose:"6",
        goal_difference:"34/30",
        score:"29"
    },
    {         
        place:"7", 
        name:"Wolfsburg",
        logo:"img/Bundesliga/Wolfsburg.png", 
        games:"17",
        win:"7", 
        draw:"5", 
        lose:"5",
        goal_difference:"26/21",
        score:"26"
    },
    {       
        place:"16", 
        name:"Werder",
        logo:"img/Bundesliga/Werder-Bremen.png", 
        games:"17",
        win:"4", 
        draw:"3", 
        lose:"10",
        goal_difference:"17/32",
        score:"15"
    },
    {               
        place:"10", 
        name:"Hamburger",
        logo:"img/Bundesliga/Hamburger_SV.png", 
        games:"17",
        win:"6", 
        draw:"4", 
        lose:"7",
        goal_difference:"19/23",
        score:"22"
    },
    {             
        place:"9",
        name:"Koln",
        logo:"img/Bundesliga/Fc_Koln.png",
        games:"17",
        win:"6", 
        draw:"6", 
        lose:"5",        
        goal_difference:"18/21",
        score:"24"
    },
    {              
        place:"3", 
        name:"Herta",
        logo:"img/Bundesliga/Hertha_Berlin_SC.png", 
        games:"17",
        win:"10", 
        draw:"2",              
        lose:"5",    
        goal_difference:"26/18",
        score:"32"
    },
    {          
        place:"6", 
        name:"Schallke",
        logo:"img/Bundesliga/FC_Schalke_04.png", 
        games:"17",
        win:"8", 
        draw:"3", 
        lose:"6",
        goal_difference:"23/23",
        score:"27"
    },
    {                                      
        place:"11", 
        name:"Ingolstadt",
        logo:"img/Bundesliga/FC-Ingolstadt.png", 
        games:"17",
        win:"5", 
        draw:"5", 
        lose:"7",
        goal_difference:"11/18",
        score:"20"
    },
    {                 
        place:"8", 
        name:"Mainz",
        logo:"img/Bundesliga/FSV_Mainz_05.png", 
        games:"17",
        win:"7", 
        draw:"3", 
        lose:"7",
        goal_difference:"23/23",
        score:"24"
    },
    {                     
        place:"13", 
        name:"Darmstadt",
        logo:"img/Bundesliga/Darmstadt_98.png", 
        games:"17",
        win:"4", 
        draw:"6", 
        lose:"7",
        goal_difference:"17/26",
        score:"18"
    },
    {                                                          
        place:"14", 
        name:"Eintracht",
        logo:"img/Bundesliga/Eintracht_Frankfurt.png", 
        games:"17",
        win:"4", 
        draw:"5", 
        lose:"8",
        goal_difference:"21/28",
        score:"17"
    },
    {       
        place:"18", 
        name:"Hoffenheim",
        logo:"img/Bundesliga/Hoffenheim.png", 
        games:"17",
        win:"2", 
        draw:"7", 
        lose:"8",
        goal_difference:"17/25",
        score:"13"
    },
    {                               
        place:"12", 
        name:"Augsburg",
        logo:"img/Bundesliga/Augsburg.png", 
        games:"17",
        win:"5", 
        draw:"4", 
        lose:"8",
        goal_difference:"21/26",
        score:"19"
    },
    {                                                          
        place:"17", 
        name:"Hannover",
        logo:"img/Bundesliga/Hannover_96.png", 
        games:"17",
        win:"4", 
        draw:"2", 
        lose:"11",
        goal_difference:"18/29",
        score:"14"
    },
    {                                      
        place:"15", 
        name:"Stuttgart",
        logo:"img/Bundesliga/Stuttgart.png", 
        games:"17",
        win:"4",
        draw:"3",
        lose:"10",
        goal_difference:"22/37",
        score:"15"
    }
]
