var applyLayout = function(setup) {
		setup
				.first()
				.next()
						.moveX(2000)
				.next()
						.moveX(2000)
				.next()
						.rotateX(90)
				.next()
						.scaleUp(10)
						.moveX(1000)
						.moveY(500)
						.rotateY(90)
				.next()
						.moveZ(1500)
				.next()
						.rotateY(180)
						.moveX(-0.1)
				.next()
						.moveZ(-1500)
				.next()
						.scaleDown(10)
						.moveX(-18999)
						.rotateY(-180)
				.next()
						.rotateZ(720)
						.scaleDown(10)
				.next()
						.moveY(1000)
						.rotateZ(-720)
						.scaleUp(10)
				.next()
						.moveX(1000)
						.rotateX(-90)
				.next()
						.rotateY(-90)
		
		
				.next()
						.clear()
						.rotateZ(90)
				.next()
						.rotateX(270)
						.rotateY(90)
						.rotateZ(180)
				.apply();
};


window.onload = function(e) {
		var steps = document.getElementsByClassName("step");
		applyLayout(new SlideSetup(steps));
		
		impress().init();
}

