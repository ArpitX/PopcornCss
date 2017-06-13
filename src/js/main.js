var isBackstageOpen = false;
var isWallVisible = false;
var stageUrl;
let iframePromise;

function openCurtains(filepath){
  	stageUrl = 'https://arpban.github.io/popcorn-css-components/'+filepath;
	$('.auditorium').toggleClass('open');
	$('.stage').append(`
		<div class="loader">
	        <div class="loader-inner">
	          <label> &#8226;</label>
	          <label> &#8226;</label>
	          <label> &#8226;</label>
	          <label> &#8226;</label>
	          <label> &#8226;</label>
	          <label> &#8226;</label>
	          <div class="text">Loading</div>
	        </div>
	    </div>
	`);
	$('.stage').toggleClass('hidden');
  	$('.stage iframe').attr('src',stageUrl);
  	iframePromise = new Promise(function(resolve, reject){
  		$('.stage iframe').on('load',()=>{
  			resolve();
  		});
  	});
  	iframePromise.then(()=>{
  		// $('.stage iframe').toggleClass('hidden');
  		var htmlPath = stageUrl + 'main.html';
		$.ajax({url:htmlPath, success: function(result){
			$('textarea.html').text(result);
		}});
		var sassPath = stageUrl + 'main.scss';
		$.ajax({url:sassPath,dataType: "text", success: function(result){
			$('textarea.sass').text(result);
		}});
		var jsPath = stageUrl + 'main.js';
		$.ajax({url:jsPath,dataType: "text", success: function(result){
			$('textarea.js').text(result);
		}});

  	},()=>{
  		console.log('failed to load iframe');
  	}).then(()=>{
  		$('.stage .loader').remove();
  		$('.stage iframe').toggleClass('hidden');
  	});
}
function closeCurtains(){
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
	if(isBackstageOpen)
		goBackstage();
	$('.stage iframe').toggleClass('hidden');
	$('textarea.html').text(' ');
	$('textarea.sass').text(' ');
	$('textarea.js').text(' ');

}
function goBackstage(){
	$('.code-view').fadeToggle(400);
	if(!isBackstageOpen){
		$('.backstage-door').html('Output');
		$('.backstage-door').toggleClass('.hover');
		isBackstageOpen = !isBackstageOpen;
	}else{
		$('.backstage-door').html('View Code');
		isBackstageOpen = !isBackstageOpen;
	}
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
