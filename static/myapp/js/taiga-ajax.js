$(document).ready(function () {
    $('#addfriend').click(function () {
        var profile_id = $(this).data("profileid");
        $.get('/myapp/addfriend/' + profile_id, function (data) {
            $('#addfriend').fadeOut();
        });
    });

})

$(document).ready(function () {
	$('#follow').click(function () {
        var profile_id = $(this).data("profileid");
        $.get('/myapp/followrequest/' + profile_id, function (data) {
            $('#follow').fadeOut();
        });
    });
})