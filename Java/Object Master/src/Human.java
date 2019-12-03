
public class Human {
	protected int strength = 3;
	protected int stealth = 3;
	protected int intelligence = 3; 
	protected int healthLevel = 100;

	public void attack(Human humanbeingattacked) {
		humanbeingattacked.healthLevel -= this.strength;//get the humans health level after being attacked 
	}
	public int getIntelligence() {
		return intelligence;
	}
	public int getStrength() {
		return strength;
	}
	public int getStealth() {
		return stealth;
	}
	public int getHealthLevel() {
		return healthLevel;
	}
}
