$(function(){
	$(".rbs-atualizar a").bind("click", function(){
		$(this).fadeOut(300);
		$(this).parent().css({"opacity":.5, "filter": "alpha(opacity=50"});

		$("section").animate({
			opacity: 0.5,
		}, 2000, function(){
			setTimeout(function(){
				$.ajax({
					type:		"GET",
					url:		"atualiza.html",
					cache:		false,
					success:	function (data){
						obj = $(data).filter("section");
						$("section").replaceWith(obj);
					},
					error: function (){
						alert("Ops... Um erro ocorreu!")
					}
				});

				$("section").animate({
					opacity: 1,
				}, 2000);
			},1000);
		});

		setTimeout(function(){
			$(".rbs-atualizar a").fadeIn(300);
			$(".rbs-atualizar").css({"opacity":1, "filter": "alpha(opacity=100"});
		},60000);

		return false;
	});
});