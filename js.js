var num;
             function race(im, num) {
                 switch (num) {
                    case 1: 
                 { document.body.style.backgroundImage = "url(images/forest.jpg)";
                   im.setAttribute("src", "images/cent1.png");
                  break;}
                    case 2:
                 { document.body.style.backgroundImage = "url(images/meadows.jpg)";
                  im.setAttribute("src", "images/driad.jpg");
                  break;}
                    case 3:
                 { document.body.style.backgroundImage = "url(images/town.jpg)";
                  im.setAttribute("src", "images/man.png");
                  break;}
                     case 4:
                 { document.body.style.backgroundImage = "url(images/sea.jpg)";
                  im.setAttribute("src", "images/lizard1.png");
                  break;}
                    default:
                 { document.body.style.backgroundColor = "yellow"; break;}
                 }
            }
var butt;
             function mapdesc(ps, butt) {
                 switch (butt) {
                    case 1:
                         {  for (let i=0;i<4;i++)
                             {ps[i].style.visibility='hidden';}
                             ps[0].style.visibility='visible'; break; }
                    case 2:
                         {   for (let i=0;i<4;i++)
                             {ps[i].style.visibility='hidden';}
                             ps[1].style.visibility='visible'; break; }
                    case 3:
                         {   for (let i=0;i<4;i++)
                             {ps[i].style.visibility='hidden';}
                             ps[2].style.visibility='visible'; break; }
                    case 4:
                         {   for (let i=0;i<4;i++)
                             {ps[i].style.visibility='hidden';}
                             ps[3].style.visibility='visible'; break; }

                 }
             }