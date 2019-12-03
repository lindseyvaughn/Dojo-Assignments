public class Project {
    private String name;
    private String description;

    public Project (){
    }
    public Project (String name){
        this.name = name;
    }
    public Project (String name, String description){
        this.name = name; 
        this.description = description;
        elevatorPitch(name, description); 
    }
    public String getName() {
        return name;
    }
   
    public String getDescription() {
        return description;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void elevatorPitch(String name, String description){
        System.out.println(name+ ":"+description); 
    }
    


}