!function(e){function n(){var e=original.value,n=XRegExp("(?<valor> [ ]?[-+]?([0-9]+)(e[-+]?[0-9]+)?[ ]*)  # valor \n(?<medidaIni>([a-z]+)[ ]?) # medidaIni \n(?<opcional> (to)?) # opcional \n(?<medidaFin> [ ]*([a-z]+)$) # medidaFin","xi"),i=XRegExp.exec(e,n);if(i){var a=i[1],o=i[5].toLowerCase(),r=i[9].toLowerCase();a=parseFloat(a);var t=new Estrategia(a,o[0]),d=t[unidad.medida](),c=d.convertir(r[0]);converted.innerHTML=c.getNumero()+" "+c.getUnidad()}else converted.innerHTML="ERROR! Formato incorrecto inténtelo con 32f to C, 12e10k f"}e.main=n}(this);