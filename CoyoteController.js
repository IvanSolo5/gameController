//////////////////////////////////////////////////////////////////////
// Author: Kent Jones
// Created by kjones on 12/18/2014
// Purpose: Coyote Controller Class
// Resources Used:
//  http://www.htmlandcssbook.com/
//  http://javascriptbook.com/ 
//  parallax scrolling tutorials: 
//      https://webdesign.tutsplus.com/categories/parallax-scrolling
// License: MIT License: https://opensource.org/licenses/MIT 
///////////////////////////////////////////////////////////////////////
var CoyoteController = {
    // Variables
    $background : null,
    $coyote : null,
    init : function() {
		this.$background = $("#DesertBackground_back");
		this.$coyote = Object.create(Coyote);
		this.$coyote.init(this.$background.width());
        $("body").dblclick( this.$coyote.change_direction.bind(this.$coyote) );
		$("body").click( this.$coyote.jump.bind(this.$coyote) );
		document.addEventListener("keydown", this.$coyote.change_direction.bind(this.$coyote));
    },
    draw : function() {
        requestAnimFrame( CoyoteController.draw.bind(this), 25);
		if ( typeof this.$coyote != "undefined" ) {
			this.$coyote.run();
			var xpos = this.$coyote.x;
			var ypos = this.$coyote.y;			
			$('#DesertBackground_clouds_2').css('background-position', (xpos * (1.0 / -148.0)));
			$('#DesertBackground_mid').css('background-position', (xpos * (1.0 / 6.0)));
			// $('#DesertBackground_clouds_1').css('background-position', (xpos * (1.0 / 3.0)));
			$('#DesertBackground_front').css('background-position', (xpos * (1.0/1.5)));
		}
	},
	keypress : function(event)
	{
		// left=a=97
		// up=w=119
		// right=d=100
		// down=s=115
		switch (event.keyCode)
		{
			case 97:
				this.$coyote.change_direction.bind(this.$coyote)
				break;
			case 119:
				this.$coyote.jump.bind(this.$coyote);
				break;
			case 100:
				this.$coyote.change_direction.bind(this.$coyote);
				break;
		}
	}
};





$(document).ready(function () {
    CoyoteController.init();
    CoyoteController.draw();
});