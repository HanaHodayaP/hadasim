import java.util.Scanner;

public class TwitterTowers 
{
	// Scanner to get input from the user
	 static Scanner scanner = new Scanner(System.in);	
	 public static void main(String[] args)
	 {
		 System.out.println("Welcome\r\n"+ "Come help the Twitter company research about different types of towers");
		 System.out.println("To select a rectangular tower press 1\r\n"+ "To select a triangular tower press 2\r\n"+ "To exit press 3");
		 int choice=scanner.nextInt();// Variable to store user choice for starting a new game
		 int width,height,tringchoice;
		 
		// Main game loop
		 while(choice!=3)
		 {
			 if(choice != 1 && choice != 2)
			 {
				 System.out.println("You can only choose from option 1 2");
			 }
			 else
			 {
				 System.out.println("Tap Width and Height");
				 width=scanner.nextInt();
				 height=scanner.nextInt();
				 if(choice==1)
				 {
					 printRectangle(width,height);
				 }
				 else
				 {
					 System.out.println("To calculate the perimeter of the triangle press 1\r\n"+ "To print the triangle press 2");
					 tringchoice=scanner.nextInt();
					 switch (tringchoice) 
					 {
					 	case 1:
					 		printScopeTriangular(width,height);
						break;
					 	case 2:
					 		printTriangular(width,height);
						break;

					default:
						System.out.println(" You can only choose from option 1 2 ");
						break;
					}
				 }
				
				 
			 }
			 System.out.println("To select a rectangular tower press 1\r\n"+ "To select a triangular tower press 2\r\n"+ "To exit press 3");
			 choice=scanner.nextInt();
			  
		 }
		 System.out.println("Goodbye!!!"); 
	  }
	 
	 
	 public static void printScopeTriangular(int width, int height) 
	 {
		 int rib= (int)Math.sqrt((width/2)*(width/2)+height*height);
		 System.out.println(width+2*rib);
	 }
	 
	 public static void printTriangular(int width, int height) 
	 {
		 if( width%2==0 || width>height*2)
		 {
			 System.out.println("The tower cannot be printed");
		 }
		 else
		 {
			 int len=1, space=width/2;
			 print(len,space);
			 int div=(height-2)/((width-2)/2);
			 int mod =(height-2)%div;
			 len+=2;
			 space--;
			 while(len<width)
			 {
				 for(int i=0;i<div;i++)
				 {
					 print(len,space); 
				 }
				 if(len==3)
				 {
					 for(int i=0;i<mod;i++)
					 {
						 /*System.out.print("@");*/
						 print(len,space); 
					 }
				 }
				 len+=2;
				 space--;
			 }
			 print(len,space); 
		 }
	 }
	 
	 public static void print(int len, int space)
	 {
		 for(int i=0;i<space;i++)
		 {
			 System.out.print(" ");
		 }
		 for(int i=0;i<len;i++)
		 {
			 System.out.print("*");
		 }
		 System.out.println();
	 }
	 
	 
	 public static void printRectangle(int width, int height)
	 {
		 if (Math.abs(width-height)>5)
		 {
			 System.out.println("Ther area is: "+width*height);
		 }
		 else
		 {
			 int a=2*width+2*height;
			 System.out.println("The score is: "+a);
		 }
		
	}
}