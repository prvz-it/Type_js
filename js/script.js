let type = document.querySelector(".type") ;
let type_x = type.innerHTML ;
let type_y = type_x.split("") ;
type.innerHTML = "" ;

let typeing = 0 ;

function typeUp() {
    if (typeing <= type_x.length) {
        type.innerHTML += type_x.charAt(typeing) ;
        typeing ++ ;
        type_y = type_x.split("") ;
    } else {
        type_y.pop() ;
        type.innerHTML = type_y.join("") ;
        if (type_y.length == 0) {
            typeing = 0 ;
        }
    }
}
setInterval(() => {
    typeUp()
}, 500) ;