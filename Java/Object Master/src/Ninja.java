
 class Ninja extends Human {
	 protected int stealth=8;
	 
	 
	 public void steal(Human stealhuman){
			System.out.println("Ninja stole stealth");
			stealhuman.healthLevel -= this.stealth;
			this.healthLevel += this.stealth; 
		}
	 public void runaway(){
		 System.out.println("Ninja ran away");
			this.healthLevel -= 10;
		}
	 public int getHealthLevel(){
		 return this.healthLevel;
	 }
	 public int getIntelligence() {
		 return this.intelligence;
	 }
}
