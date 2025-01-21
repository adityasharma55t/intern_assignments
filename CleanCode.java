package intern_assignments;

import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;

class Employee {
    private String firstName;
    private String lastName;
    private String designation;
    private String address;

    public Employee(String firstName, String lastName, String designation, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.address = address;
    }

    public String employeeDetails(){
        return firstName + " " + lastName + "| Designation: " + designation + "| Address: " + address;
    }
}

class ProjectManager {
    private String managerName;
    private String projectName;
    private List<Employee> employees;

    public ProjectManager(String managerName, String projectName) {
        this.managerName = managerName;
        this.projectName = projectName;
        this.employees = new ArrayList<>();
    }

    public void addEmployee(Employee employee) {
        employees.add(employee);
    }

    public void displayProjectDetails() {
        System.out.println("Project: " + projectName + " (Managed by " + managerName + ")");
        System.out.println("Employee Details:");
        for (Employee employee : employees) {
            System.out.println(employee.employeeDetails());
        }
        System.out.println();
    }
}

public class CleanCode {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number of Project Managers: ");
        int numManagers = sc.nextInt();
    
        List<ProjectManager> managers = new ArrayList<>();
    
        for (int i = 0; i < numManagers; i++) {
            System.out.println("\nEnter details for Project Manager " + (i + 1));
    
            System.out.print("Manager's Name: ");
            String managerName = sc.nextLine();
    
            System.out.print("Project Name: ");
            String projectName = sc.nextLine();
    
            ProjectManager manager = new ProjectManager(managerName, projectName);
    
            System.out.print("Enter the number of Employees under " + managerName + ": ");
            int numEmployees = sc.nextInt();
    
    
            for (int j = 0; j < numEmployees; j++) {
                System.out.println("\nEnter details for Employee " + (j + 1));
    
                System.out.print("First Name: ");
                String firstName = sc.nextLine();
    
                System.out.print("Last Name: ");
                String lastName = sc.nextLine();
    
                System.out.print("Designation: ");
                String designation = sc.nextLine();
    
                System.out.print("Address (House No., Street Name, City, Pincode, State): ");
                String address = sc.nextLine();
    
                Employee employee = new Employee(firstName, lastName, designation, address);
                manager.addEmployee(employee);
            }
    
            managers.add(manager);
        }
    
        System.out.println("\nEmployee Details Grouped by Projects:");
        for (ProjectManager manager : managers) {
            manager.displayProjectDetails();
        }
    
        sc.close();
        
    }
}
