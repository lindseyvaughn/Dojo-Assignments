class StringManipulator {
    public String trimAndConcat(String string1, String string2) {
       string1 = string1.trim();
       string2 = string2.trim();
        return string1 + string2;
    }
    public Integer getIndexOrNull(String string1, char string2){
        int index = string1.indexOf(string2); 
        if (index < 0) {
            return null; 
        }
        return index; 
    }
    public String concatSubstring(String string1, int int1, int int2, String string2){
         string1 = string1.substring(int1, int2);
        return string1 + string2;
    }
    public Integer getIndexOrNull(String string1, String string2){
        int index = string1.indexOf(string2); 
        if (index < 0) {
            return null; 
        }
        return index; 
    }
}
