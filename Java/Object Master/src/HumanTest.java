
public class HumanTest {

	public static void main(String[] args) {
		Human human1 = new Human();
		Human human2 = new Human();
		Wizard wizard1 = new Wizard(); 
		Ninja ninja1 = new Ninja();
		Samurai samurai1 = new Samurai();
		Samurai samurai2 = new Samurai();
		
		
		System.out.println(human1.getHealthLevel());
		System.out.println(human2.getHealthLevel());
		
		System.out.println(human1.getIntelligence());
		System.out.println(human2.getIntelligence());
		
		System.out.println(human1.getStealth());
		System.out.println(human2.getStealth());
		
		
		System.out.println(human1.getStrength());
		System.out.println(human2.getStrength());
		
		human1.attack(human2);
		System.out.println(human1.getHealthLevel());
		System.out.println(human2.getHealthLevel());
		
		wizard1.fireball(human2);
		System.out.println(human2.getHealthLevel());
		wizard1.heal(human2);
		System.out.println(human2.getHealthLevel());
		System.out.println(wizard1.getIntelligence());
		
		
		ninja1.runaway();
		System.out.println(ninja1.getHealthLevel());
		ninja1.steal(human1);
		System.out.println(ninja1.getHealthLevel());
		
		samurai1.deathBlow(human1);
		System.out.println(samurai1.getHealthLevel());
		samurai1.meditate(); 
		System.out.println(samurai1.getHealthLevel());
		Samurai.howMany();
		// System.out.println(samurai1.getHealthLevel());
		
		
		
		
		
	}

}
