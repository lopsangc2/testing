$(document).ready(function()){
    $('.modal').modal();
    
    $('.sidenav').sidenav();
}

function ToggleModal() {
    var instance = M.Modal.getInstance($('modal3'))
    instance.open()
    
}