
 class Wizard extends Human {
	 protected int healthLevel = 50;
	 protected int intelligence=8;
	 
	 public Wizard() {

	 }
	 public void heal(Human healedhuman) {
			System.out.println("Wizard Healed Human");
			healedhuman.healthLevel += this.intelligence;
		}
	 public void fireball(Human hurthuman) {
		 	System.out.println("Wizard Hurt Human");
			hurthuman.healthLevel -= this.intelligence * 3;
		}
	 public int getHealthLevel(){
		 return this.healthLevel;
	 }
	 public int getIntelligence() {
		 return this.intelligence;
	 }
}
