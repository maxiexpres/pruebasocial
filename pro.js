function startTimeoutChain(){setTimeout(function(){jQuery("#pro").css("bottom","10px");setTimeout(function(){setTimeout(function(){jQuery("#pro").css("bottom","-100px");jQuery("#pro").css("opacity","0");setTimeout(function(){jQuery("#pro").css("opacity","1");var item=items[Math.floor(Math.random()*items.length)];var what=whats[Math.floor(Math.random()*whats.length)];jQuery(".who").text(item);jQuery(".what").text(what);randoman=Math.floor(Math.random()*59);jQuery(".when").text(randoman+" minutes ago");startTimeoutChain();},2000);},2000);},3000);},1000);} jQuery(function(){var item=items[Math.floor(Math.random()*items.length)];var what=whats[Math.floor(Math.random()*whats.length)];jQuery(".who").text(item);jQuery(".what").text(what);randoman=Math.floor(Math.random()*59);jQuery(".when").text(randoman+" minutes ago");startTimeoutChain();});var whats=Array("Solicito un Prestamo de $3000 mx","Solicito un Prestamo de $5000 mx","Solicito un Prestamo de $1500 mx","Solicito un Prestamo de $2000 mx","Solicito un Prestamo de $3500 mx",);var items=Array("Mario G. de Toluca, MX","Eddy C. de Monterrey, MX","Monica B. de Morelos, MX","Maria H. de Tlaxcala, MX","Jesus L. de Zacatecas, MX","Daniel G. de Guanajuato, MX",);