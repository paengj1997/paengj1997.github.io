
window.onload = nav();

function nav (data) {
    $.ajax ({
        url: "/paengj1997.github.io/acme.json"
       , dataType: "json"
        , sucess: function (data) {
        var get = data ["Anvils"].name
        console.log (get);
        $("nav-items").html(get);
        }
    }
        )
}
        
        
        





