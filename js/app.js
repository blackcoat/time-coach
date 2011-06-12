var checklists = [
	{
		name: "Leave the House",
		items: []
	},
	
	{
		name: "Cook Dinner",
		items: []
	},
	
	{
		name: "Write Dissertation",
		items: []
	}
];



$(function() {
	$.each(checklists, function(i, list) {
		$('<li>').text(list.name).appendTo($('#checklists'));
	});

});
