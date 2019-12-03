public class ProjectTest {
    public static void main(String[] args){
        Project first = new Project();
        first.setName ("Best Project");
        first.setDescription("Everyone's favorite name");
        System.out.println(first.getName());
        System.out.println(first.getDescription());
        Project second = new Project ("Good project");
        Project third = new Project ("Worst project",  "everyones least favorite");



    }

}