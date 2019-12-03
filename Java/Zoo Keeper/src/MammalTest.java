
public class MammalTest {

	public static void main(String[] args) {
		Gorilla gorilla = new Gorilla (); //Creating a new gorilla (showing it exist)
		
		gorilla.throwSomething();
		gorilla.eatBananas();
		gorilla.climb();
		gorilla.displayEnergyLevel();
		
		Bat bat = new Bat ();
		bat.fly();
		bat.eatHumans();
		bat.attackTown();
		bat.displayEnergyLevel();

	}
}
