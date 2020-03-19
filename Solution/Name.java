package angellist.coding;

import java.util.Scanner;

public class Name {
	public static String lastNameFirst1(String name) {
		int firstIndex = name.indexOf(" ");
		if (firstIndex >= 0) {
			int secondIndex = name.indexOf(" ", firstIndex + 1);
			String firstName = name.substring(0, firstIndex);
			if (secondIndex >= 0)
			{
				String middleName = name.substring(firstIndex + 1, secondIndex);
				String lastName = name.substring(secondIndex + 1);
				return lastName + ", " + firstName + " " + middleName;
			} else {
				String lastName = name.substring(firstIndex + 1);
				return lastName + ", " + firstName;
			}
		} else
			return name;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your name");
		String name = sc.nextLine();
		name = lastNameFirst1(name);
		System.out.println(name);

	}
}
