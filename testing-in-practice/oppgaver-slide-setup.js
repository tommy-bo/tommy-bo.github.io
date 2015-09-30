var applyLayout = function(setup) {
		setup
				.first()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.next()
						.moveY(1000)
				.apply();
};


window.onload = function(e) {
		var steps = document.getElementsByClassName("step");
		applyLayout(new SlideSetup(steps));
		
		impress().init();
}

