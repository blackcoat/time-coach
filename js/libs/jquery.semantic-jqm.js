// For maximum device compatibility, jQuery Mobile
// eschews semantic HTML5 elements in favor of divs
// with "data-" attributes supplying the semantics.
// Some developers may only be concerned with newer
// devices and want to use the semantic markup. This
// plugin alters your semantic elements by automatically
// adding data- attributes recognized by jQuery Mobile
// when semantically appropriate.

(function(window, $) {
	// As of jQM 1.0a4.1, the extensively used 
	// :jqmData selector identifies elements with
	// the '[data-]' attribute selector. Unfortunately,
	// jQuery's .data() and .prop() will not affect
	// selected objects in a manner compatible with
	// the :jqmData selector. For this, we need to use
	// .attr() to add the "data-" attribute.
	
	var jqmRoleMap = [
		{
			role: 'content',
			selector: 'body>section>section'
		},
		{
			role: 'footer',
			selector: 'footer'
		},
		{
			role: 'header',
			selector: 'header'
		},
		{
			role: 'navbar',
			selector: 'nav'
		},
		{
			role: 'page',
			selector: 'body>section'
		}
	];
	
	for ( var index in jqmRoleMap ){
		var element = jqmRoleMap[index];
		$(element.selector).attr('data-role', element.role );
	}

})(window, jQuery);