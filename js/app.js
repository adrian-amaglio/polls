$(function(){
	getPolls(function(data){console.log(data)})
});



function getPolls(callback){
	polls = {
		title: "My awesom poll",
		contact: "bull@sh.it",
		questions: [
			{
				_id: 1,
				name: "I am",
				type: "text",
				default: ''
			},
			{
				_id: 2,
				name: "I’ll come",
				type: "checkbox",
				default: false
			},
			{
				_id: 3,
				name: "I’ll bring",
				type: "text",
				default: ''
			}
		],
		answers: [
			{
				enabled: true,
				1: "Michou",
				2: true,
				3: "Rien !"
			},
			{
				enabled: true,
				1: "Lola",
				2: false,
				3: ""
			},
			{
				enabled: false,
				1: "Jaqueline et Eudes",
				2: true,
				3: "Des pâtes"
			}
		],
		comments: [
			{
				enabled:true,
				name: "Jean-Mouloud",
				content: "Yauras mamie ?"
			},
			{
				enabled:false,
				name: "Jojo",
				content: "wi"
			}
		]
	};
	setTimeout(function(){
		callback(polls);
	}, 5000);
}
