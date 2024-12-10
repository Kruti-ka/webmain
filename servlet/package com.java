package com.sres;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Servlet implementation class Sample
 */
@WebServlet("/Sample")
public class Sample extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Sample() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// 1.insert 2.update 3. delete 4. display -> choice
		int x =Integer.parseInt(request.getParameter("ch"));
		try {
		//load driver class
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("Driver class is loaded");
		Connection  con= DriverManager.getConnection("jdbc:mysql://localhost:3306/emp","root","Admin@123");
		if(con!=null)
		{
			System.out.println("The connection is establishd");
		
		if(x==1) {
			
			//insert operation
			String en  =request.getParameter("name");
			int es =Integer.parseInt(request.getParameter("salary"));			
			PreparedStatement ps =con.prepareStatement("insert into emptab (ename,salary) values (?,?)");
			ps.setString(1, en);
			ps.setInt(2, es);
			int rowaffected= ps.executeUpdate();
			System.out.println("The number of rows affected are:-"+rowaffected);
		}
		if(x==2) {
			//update
			int empid =Integer.parseInt(request.getParameter("eid"));
			int empsal =Integer.parseInt(request.getParameter("salary"));
			PreparedStatement ps = con.prepareStatement("update emptab set salary=? where id=?");
			ps.setInt(1,empsal);
			ps.setInt(2,empid);
			int rowaffected= ps.executeUpdate();
			System.out.println("The number of rows affected are:-"+rowaffected);
		}
		if(x==3)
		{
			//delete
			int empid =Integer.parseInt(request.getParameter("eid"));
			PreparedStatement ps = con.prepareStatement("delete from emptab where id=?");
			ps.setInt(1,empid);
			int rowaffected= ps.executeUpdate();
			System.out.println("The number of rows affected are:-"+rowaffected);
		}
		if(x==4)
		{
			//display
			PreparedStatement ps = con.prepareStatement("select * from emptab");
			ResultSet rs= ps.executeQuery();
			System.out.println("Employee Details are :");
			while(rs.next()) {
				System.out.println("Employee ID:-"+rs.getInt(1));
				System.out.println("Employee Name:-"+rs.getString(2));
				System.out.println("Employee Salary:-"+rs.getInt(3));
				
			}
		}
		
		}
		
		else
		{
			System.out.println("Database connection is failed");
		}
	}
		
		catch(Exception e) {
			System.out.println(e);
		}
	}

}
