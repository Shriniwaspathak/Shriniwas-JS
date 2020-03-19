package angellist.coding;

import java.util.Scanner;

public class Chocolate {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter money for Chocolate");
		int z = sc.nextInt();
		int x = z * 4;
		int a = x;
		while (x >= 3) {
			int b = x % 3;
			x = x / 3;
			a = a + x;
			x = x + b;
		}
		System.out.println(a);

	}
}