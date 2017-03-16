package edu.simpson.cs.webdev;

import java.io.PrintWriter;
import java.sql.*;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PersonDAO {
    private final static Logger log = Logger.getLogger(DBHelper.class.getName());

    public static List<Person> getPeople() {
        log.log(Level.FINE, "Get people");

        // Create an empty linked list to put the people we get from the database into.
        List<Person> list = new LinkedList<Person>();

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();
            if (conn == null)
            {
                return list;
            }

            // This is a string that is our SQL query.
            String sql = "select id, first, last, email, phone, birthday from person";

            // If you had parameters, it would look something like
            // String sql = "select id, first, last, phone from person where id = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            // If you had parameters, they would be set wit something like:
            // stmt.setString(1, "1");

            // Execute the SQL and get the results
            rs = stmt.executeQuery();

            // Loop through each record
            while(rs.next()) {
                // Create a new instance of the Person object.
                // You'll need to define that somewhere. Just a simple class with getters and setters on the
                // fields.
                Person person = new Person();

                // Get the data from the result set, and copy it to the Person object
                person.setId(rs.getString("id"));
                person.setFirst(rs.getString("first"));
                person.setLast(rs.getString("last"));
                person.setEmail(rs.getString("email"));
                person.setPhone(rs.getString("phone"));
                person.setBirthday(rs.getString("birthday"));

                // Add this person to the list so we can return it.
                list.add(person);
            }
        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            if (conn != null)
            {
                // Ok, close our result set, statement, and connection
                try { rs.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
                try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
                try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            }
        }
        // Done! Return the results
        return list;
    }

    public static void setPeople(Person person) {
        log.log(Level.FINE, "Set people");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "insert into person (first, last, email, phone, birthday) values (?, ?, ?, ?, ?)";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, person.getFirst());
            stmt.setString(2, person.getLast());
            stmt.setString(3, person.getEmail());
            stmt.setString(4, person.getPhone());
            stmt.setString(5, person.getBirthday());

            // Execute the SQL and get the results
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            if (conn != null) {
                try {
                    stmt.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
                try {
                    conn.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
            }
        }
    }

    public static void deletePerson(Person person) {
        log.log(Level.FINE, "Set people");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "delete from person where (id) = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, person.getId());

            // Execute the SQL and get the results
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            if (conn != null) {
                try {
                    stmt.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
                try {
                    conn.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
            }
        }
    }

    public static void updatePerson(Person person) {
        log.log(Level.FINE, "Set people");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "update person set first=?, last=?, email=?, phone=?, birthday=? where id=?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, person.getFirst());
            stmt.setString(2, person.getLast());
            stmt.setString(3, person.getEmail());
            stmt.setString(4, person.getPhone());
            stmt.setString(5, person.getBirthday());
            stmt.setString(6, person.getId());

            // Execute the SQL and get the results
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            if (conn != null) {
                try {
                    stmt.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
                try {
                    conn.close();
                } catch (Exception e) {
                    log.log(Level.SEVERE, "Error", e);
                }
            }
        }
    }
}
