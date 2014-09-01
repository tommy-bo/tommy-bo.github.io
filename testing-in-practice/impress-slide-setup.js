var SlideSetup = function(stepElements) {
		this.elements = stepElements;
		this.currentElementIndex = 0;
		this.posX = 0;
		this.posY = 0;
		this.posZ = 0;
		this.rotX = 0;
		this.rotY = 0;
		this.rotZ = 0;
		this.currentScale = 1;

		this.first = function() {
				this.currentElementIndex = 0;
				return this;
		};

		this.next = function() {
				this.apply();
				this.currentElementIndex += 1;
				return this;
		};

		this.moveX = function(movement) {
				this.posX += this.toScale(movement);
				return this;
		};

		this.moveY = function(movement) {
				this.posY += this.toScale(movement);
				return this;
		};

		this.moveZ = function(movement) {
				this.posZ += this.toScale(movement);
				return this;
		};

		this.rotateX = function(rotation) {
				this.rotX += rotation;
				return this;
		};

		this.rotateY = function(rotation) {
				this.rotY += rotation;
				return this;
		};

		this.rotateZ = function(rotation) {
				this.rotZ += rotation;
				return this;
		};

		this.scaleUp = function(scaleAddition) {
				this.currentScale *= scaleAddition;
				return this;
		};

		this.scaleDown = function(scaleReduction) {
				this.currentScale /= scaleReduction;
				return this;
		};

		this.toScale = function(pos) {
				return this.currentScale * pos;
		};

		this.apply = function() {
				currentElement = this.elements[this.currentElementIndex];
				currentElement.setAttribute("data-x", this.posX);
				currentElement.setAttribute("data-y", this.posY);
				currentElement.setAttribute("data-z", this.posZ);
				currentElement.setAttribute("data-rotate-x", this.rotX);
				currentElement.setAttribute("data-rotate-y", this.rotY);
				currentElement.setAttribute("data-rotate-z", this.rotZ);
				currentElement.setAttribute("data-scale", this.currentScale);
		};

		this.clear = function() {
				this.posX = 0;
				this.posY = 0;
				this.posZ = 0;
				this.rotX = 0;
				this.rotY = 0;
				this.rotZ = 0;
				this.currentScale = 1;
				return this;
		};

		return this;
};