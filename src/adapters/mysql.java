package adapters;
import java.sql.Connection;  
import java.sql.DriverManager;  
import java.sql.ResultSet;  
import java.sql.SQLException;
import java.sql.Statement;  
  
public class mysql {  
    public static String getName() throws SQLException {  
    	ResultSet resultSet = null;
        try {  
            Class.forName("com.mysql.jdbc.Driver");  
            Connection connection = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:8080/Tomcat_Practice", "root", "root");  
            Statement statement = connection.createStatement();  
            resultSet = statement  
                    .executeQuery("SELECT * FROM Names");  
            
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        
        return resultSet.getString("First_Name");
    }  
}  