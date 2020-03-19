package angellist.coding;

import java.util.Scanner;

public class Sort2DArray {

	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int numb = 0;
		int array[][] = { { 9, 8, 7 }, { 7, 3, 0 }, { 9, 5, 3 } };
		for (int i = 0; i < array.length; i++) {
			for (int j = 0; j < array[i].length; j++) {
				for (int k = 0; k < array[i].length - j - 1; k++) {
					if (array[i][k] > array[i][k + 1]) {
						int t = array[i][k];
						array[i][k] = array[i][k + 1];
						array[i][k + 1] = t;
					}
				}
			}
		}

		for (int i = 0; i < array.length; i++) {
			for (int j = 0; j < array[i].length; j++) {
				numb = array[i][j];
				System.out.print(array[i][j] + " ");
			}
			System.out.println();

		}
		int num = sc.nextInt();
		int value = 0;
		boolean result=false;
		for (int i = 0; i < array.length; i++) {
			for (int j = 0; j < array[i].length; j++) {
				value = array[i][j];
				if (num == value) {
				result=true;

				}
			}
			
		}
		System.out.println(result);
	}
}