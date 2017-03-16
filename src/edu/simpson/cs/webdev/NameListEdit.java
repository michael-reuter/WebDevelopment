package edu.simpson.cs.webdev;

import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NameListEdit extends HttpServlet {
    private Pattern firstValidationPattern;
    private Pattern lastValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;


    public NameListEdit() {
        firstValidationPattern = Pattern.compile("^[a-zA-Z\\u0080-\\u024F ']{3,20}$");
        lastValidationPattern = Pattern.compile("^[a-zA-Z\\u0080-\\u024F ']{3,20}$");
        emailValidationPattern = Pattern.compile("^([a-zA-z0-9_.-])+\\@(([a-zA-z0-9_.-])+\\.([a-zA-Z0-9]{2,4}))+$");
        phoneValidationPattern = Pattern.compile("^[0-9]{10}$");
        birthdayValidationPattern = Pattern.compile("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("Calling name list edit servlet");

        response.setContentType("text/plain");

        // Open the request for reading. Read in each line, put it into a string.
        // Yes, I think there should be an easier way.
        java.io.BufferedReader in = request.getReader();
        String requestString = new String();
        for (String line; (line = in.readLine()) != null; requestString += line);

        // Output the string we got as a request, just as a check
        out.println(requestString);

        // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
        // names have to match. That's the magic.
        Gson gson = new Gson();
        Person fromJson = gson.fromJson(requestString, Person.class);

        // Make sure our field was set.
        out.println("ID: "+fromJson.getId());
        out.println("First name: "+fromJson.getFirst());
        out.println("Last name: "+fromJson.getLast());
        out.println("Email: "+fromJson.getEmail());
        out.println("Phone: "+fromJson.getPhone());
        out.println("Birthday: "+fromJson.getBirthday());

        if (fromJson.getId().matches("")) {
            PersonDAO.setPeople(fromJson);
        }
        else {
            PersonDAO.updatePerson(fromJson);
        }

        Matcher m1 = firstValidationPattern.matcher(fromJson.getFirst());
        if (m1.find( )) {
            out.println("First name passed back-end validation");
        } else {
            out.println("First name failed back-end validation");
        }

        Matcher m2 = lastValidationPattern.matcher(fromJson.getLast());
        if (m2.find( )) {
            out.println("Last name passed back-end validation");
        } else {
            out.println("Last name failed back-end validation");
        }

        Matcher m3 = emailValidationPattern.matcher(fromJson.getEmail());
        if (m3.find( )) {
            out.println("Email passed back-end validation");
        } else {
            out.println("Email failed back-end validation");
        }

        Matcher m4 = phoneValidationPattern.matcher(fromJson.getPhone());
        if (m4.find( )) {
            out.println("Phone passed back-end validation");
        } else {
            out.println("Phone failed back-end validation");
        }

        Matcher m5 = birthdayValidationPattern.matcher(fromJson.getBirthday());
        if (m5.find( )) {
            out.println("Birthday passed back-end validation");
        } else {
            out.println("Birthday failed back-end validation");
        }

    }
}
