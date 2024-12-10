package com.sres;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		int x=Integer.parseInt(request.getParameter("ch"));
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("Driver class is loaded...");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/empdb", "roor", "swami");
		if(con!=null) {
			System.out.println("connection is established..");
		if(x==1) {
			//insert
			String en=request.getParameter("name");
			int es=Integer.parseInt(request.getParameter("salary"));
			PreparedStatement ps=con.prepareStatement("insert into emp(ename,esalary) values(?,?)");
			ps.setString(1, en);
			ps.setInt(2, es);
			int rowAffected = ps.executeUpdate();
			System.out.println("The no. of rows affected are:- "+rowAffected);
		}
		if(x==2) {
			//update
			int empid=Integer.parseInt(request.getParameter("eid"));
			int es=Integer.parseInt(request.getParameter("salary"));
			PreparedStatement ps=con.prepareStatement("update emp set esalary=? where id=?");
			
			ps.setInt(1, es);
			ps.setInt(2, empid);

			int rowAffected = ps.executeUpdate();
			System.out.println("The no. of rows affected are:- "+rowAffected);
		}
		if(x==3) {
			//delete
			int empid=Integer.parseInt(request.getParameter("eid"));
			
			PreparedStatement ps=con.prepareStatement("delete from emp where id=?");
			
			ps.setInt(1, empid);

			int rowAffected = ps.executeUpdate();
			System.out.println("The no. of rows affected are:- "+rowAffected);
		}
		if(x==4) {
			//display
			PreparedStatement ps=con.prepareStatement("select * from emp");
			ResultSet rs = ps.executeQuery();
			System.out.println("Employee details are:-");
			while(rs.next()) {
				System.out.println("Employee Id:-"+rs.getInt(1));
				System.out.println("Employee name:-"+rs.getString(2));
				System.out.println("Employee salary:-"+rs.getInt(3));
			}
		}
		else {
			System.out.println("Connection failed..");
		}
		}
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

}
