var applyLayout = function(setup) {
		setup
				.first()
				.next()
						.moveY(2000)
						.rotateZ(180)
				.next()
						.rotateZ(-90)
						.moveX(2000)
				.next()
						.moveZ(-2000)
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
				.next()
						.moveZ(-1500)
				.next()
						.scaleDown(10)
						.moveX(-19000)
						.rotateY(-180)
				.next()
						.moveX(-1000)
				.next()
						.moveY(-2000)
						.moveZ(-1000)
						.rotateX(90)
				.next()
						.moveX(1000)
						.moveZ(1000)
						.rotateY(-90)
				.next()
						.moveX(-1000)
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

