var isBackstageOpen = false;
var isWallVisible = false;
var stageUrl;

function openCurtains(filepath){
  	stageUrl = 'stage.html?path=popcorn/'+filepath;
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
  	$('.stage iframe').attr('src',stageUrl);
}
function closeCurtains(){
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
}
function theWall(){
	$('.theWall').fadeToggle(400);
  	getSignatures();	
}
function getSignatures(){
	$('.signatures').load('signatures.html');
}
function callSlideInShare(){
	let slideInShare = document.getElementById('slideInShareCard');
	let slideInShareCrossBtn = document.getElementById('cross-btn');
	setTimeout(()=>{
		slideInShare.className = 'visible';
	},45000);
	setTimeout(()=>{
		slideInShare.className = 'visible';
	},300000);
	slideInShareCrossBtn.addEventListener('click',()=>{
		slideInShare.className = '';
	});
}
