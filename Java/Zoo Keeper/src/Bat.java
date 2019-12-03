
	class Bat extends Mammal{
		
		public Bat() {
			this.energyLevel += 200;
		}
				
		public void fly() {
			System.out.println("The sound a bat taking off");
			energyLevel -= 50;	
		}
		public void eatHumans() {
			System.out.println("so- well, never mind");
			energyLevel += 25; 	
		}
		public void attackTown() {
			System.out.println("sound of a town on first");
			energyLevel -= 100;
		}

	}
