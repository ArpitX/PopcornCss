var isBackstageOpen = false;
var isWallVisible = false;
var stageUrl;

function openCurtains(filepath){
  stageUrl = 'stage.html?path=popcorn/'+filepath;
// 	$('.stage').html(`
// <style>
// .loader{
// 		position: absolute;
// 		width: 100%;
// 		height: 100%;
// 		background-color: white;
// 		margin: 0px;
// 		padding: 0px;
// 		top: 0px;
// 		left: 0px;
// 		display: flex;
// 		align-items: center;
// 	}
// 	.loader-inner{
// 		margin: auto;
// 		color: rgb(255, 57, 57);
		
// 	}
// 	.loader-inner .text{
// 		text-align: center;
// 		font-size: 16px;
// 	}
// 	.loader-inner label{
// 		font-size: 30px;
// 		display: inline-block;
// 		opacity: 0;
// 	}

// @keyframes lol {
//   0% {
//     opacity: 0;
//     transform: translateX(-300px);
//   }
//   33% {
//     opacity: 1;
//     transform: translateX(0px);
//   }
//   66% {
//     opacity: 1;
//     transform: translateX(0px);
//   }
//   100% {
//     opacity: 0;
//     transform: translateX(300px);
//   }
// }

// @-webkit-keyframes lol {
//   0% {
//     opacity: 0;
//     -webkit-transform: translateX(-300px);
//   }
//   33% {
//     opacity: 1;
//     -webkit-transform: translateX(0px);
//   }
//   66% {
//     opacity: 1;
//     -webkit-transform: translateX(0px);
//   }
//   100% {
//     opacity: 0;
//     -webkit-transform: translateX(300px);
//   }
// }

// .loader-inner label:nth-child(6) {
//   -webkit-animation: lol 3s infinite ease-in-out;
//   animation: lol 3s infinite ease-in-out;
// }

// .loader-inner label:nth-child(5) {
//   -webkit-animation: lol 3s 100ms infinite ease-in-out;
//   animation: lol 3s 100ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(4) {
//   -webkit-animation: lol 3s 200ms infinite ease-in-out;
//   animation: lol 3s 200ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(3) {
//   -webkit-animation: lol 3s 300ms infinite ease-in-out;
//   animation: lol 3s 300ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(2) {
//   -webkit-animation: lol 3s 400ms infinite ease-in-out;
//   animation: lol 3s 400ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(1) {
//   -webkit-animation: lol 3s 500ms infinite ease-in-out;
//   animation: lol 3s 500ms infinite ease-in-out;
// }
// </style>

// <div class="loader">
//   <div class="loader-inner">
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <div class="text">Loading</div>
//   </div>
// </div>
// 	`);
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
  $('.stage iframe').attr('src',stageUrl);
	// callActors(filepath);
}
function closeCurtains(){
	$('.auditorium').toggleClass('open');
	$('.stage').toggleClass('hidden');
  // .html(` `);
}
// function callActors(filepath){
// 	$('.auditorium .stage').load('./popcorn/'+filepath, function(responseText){
// 		$('.backstage').text(responseText);
// 	});
// }
// function goBackstage(){
// 	$('.backstage').fadeToggle(400);
// 	if(!isBackstageOpen){
// 		$('.backstage-door').html('Output');
// 		$('.backstage-door').toggleClass('.hover');
// 		isBackstageOpen = !isBackstageOpen;
// 	}else{
// 		$('.backstage-door').html('View Code');
// 		isBackstageOpen = !isBackstageOpen;
// 	}
// }

function theWall(){
// 	if(!isWallVisible){
// 		$('.signatures').html(`
// <style>
// .loader{
// 		position: absolute;
// 		width: 100%;
// 		height: 100%;
// 		background-color: white;
// 		margin: 0px;
// 		padding: 0px;
// 		top: 0px;
// 		left: 0px;
// 		display: flex;
// 		align-items: center;
// 	}
// 	.loader-inner{
// 		margin: auto;
// 		color: rgb(255, 57, 57);
		
// 	}
// 	.loader-inner .text{
// 		text-align: center;
// 		font-size: 16px;
// 	}
// 	.loader-inner label{
// 		font-size: 30px;
// 		display: inline-block;
// 		opacity: 0;
// 	}

// @keyframes lol {
//   0% {
//     opacity: 0;
//     transform: translateX(-300px);
//   }
//   33% {
//     opacity: 1;
//     transform: translateX(0px);
//   }
//   66% {
//     opacity: 1;
//     transform: translateX(0px);
//   }
//   100% {
//     opacity: 0;
//     transform: translateX(300px);
//   }
// }

// @-webkit-keyframes lol {
//   0% {
//     opacity: 0;
//     -webkit-transform: translateX(-300px);
//   }
//   33% {
//     opacity: 1;
//     -webkit-transform: translateX(0px);
//   }
//   66% {
//     opacity: 1;
//     -webkit-transform: translateX(0px);
//   }
//   100% {
//     opacity: 0;
//     -webkit-transform: translateX(300px);
//   }
// }

// .loader-inner label:nth-child(6) {
//   -webkit-animation: lol 3s infinite ease-in-out;
//   animation: lol 3s infinite ease-in-out;
// }

// .loader-inner label:nth-child(5) {
//   -webkit-animation: lol 3s 100ms infinite ease-in-out;
//   animation: lol 3s 100ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(4) {
//   -webkit-animation: lol 3s 200ms infinite ease-in-out;
//   animation: lol 3s 200ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(3) {
//   -webkit-animation: lol 3s 300ms infinite ease-in-out;
//   animation: lol 3s 300ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(2) {
//   -webkit-animation: lol 3s 400ms infinite ease-in-out;
//   animation: lol 3s 400ms infinite ease-in-out;
// }

// .loader-inner label:nth-child(1) {
//   -webkit-animation: lol 3s 500ms infinite ease-in-out;
//   animation: lol 3s 500ms infinite ease-in-out;
// }
// </style>

// <div class="loader">
//   <div class="loader-inner">
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <label>	&#8226;</label>
//     <div class="text">Loading</div>
//   </div>
// </div>
// 	`);
// 		getSignatures();
// 	}
// 	else{
// 		$('.signatures').html(` `);
// 	}

	$('.theWall').fadeToggle(400);
	// isWallVisible = !isWallVisible;
  getSignatures();	
}
function getSignatures(){
	$('.signatures').load('signatures.html');
}


