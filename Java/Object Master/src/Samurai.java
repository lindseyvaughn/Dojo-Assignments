
class Samurai extends Human {
	protected int healthLevel=200;
	
	public static int numberOfSamurai = 0; 
	 
	 public Samurai() {
		 numberOfSamurai ++; 
 
	 }
	 public void deathBlow(Human deathBlowhuman){
			System.out.println("Samurai death blowed human");
			deathBlowhuman.healthLevel -= this.healthLevel/2;
		}
	 public void meditate(){
		 System.out.println("Heals Samurai");
			this.healthLevel *= 1.5;
		}
	 public static void howMany() {
		 System.out.println("The number of Samurais "+numberOfSamurai); 
		 
	 }
}
