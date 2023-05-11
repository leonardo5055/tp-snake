function establecerDireccion(keycode){
    arriba=false;
    abajo=false;
    derecha=false;
    izquierda=false;

    if (keycode == 87 || keycode == 38){
        arriba=true;
        return "arriba"
    }else if (keycode == 83 || keycode == 40){
        abajo=true;
        return "abajo"
    }else if (keycode == 68 || keycode == 39){
        derecha=true;
        return "derecha"
    }else if (keycode == 65 || keycode == 37){
        izquierda=true;
        return "izquierda"
    }
}