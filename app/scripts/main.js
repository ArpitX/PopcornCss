var isBackstageOpen = false;

function openCurtains(filepath){
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
	callActors(filepath);
}
function closeCurtains(){
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
}
function callActors(filepath){
	$('.stage').load('./popcorn/'+filepath, function(responseText){
		$('.backstage').text(responseText);
	});
}
function goBackstage(){
	$('.backstage').fadeToggle(400);
	if(!isBackstageOpen){
		$('.backstage-door').html('Output');
		$('.backstage-door').toggleClass('.hover');
		isBackstageOpen = !isBackstageOpen;
	}else{
		$('.backstage-door').html('View Code');
		isBackstageOpen = !isBackstageOpen;
	}
}
