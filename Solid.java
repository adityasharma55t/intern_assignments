package intern_assignments;
import java.util.Scanner;

interface PaymentProvider{
    void processPayment(double amount, PaymentMethod method);
}

interface PaymentMethod {
    void collectDetails();
}

class Paytm implements PaymentProvider{
    public void processPayment(double amount, PaymentMethod method){
        System.out.println("Processing payment of Rs." + amount + "through Paytm...");
        method.collectDetails();
        System.out.println("Payment Successful via Paytm");
    }
}

class AmazonPay implements PaymentProvider{
    public void processPayment(double amount, PaymentMethod method){
        System.out.println("Processing payment of Rs." + amount + "through Amazon...");
        method.collectDetails();
        System.out.println("Payment Successful via Amazon");
    }
}

class PhonePe implements PaymentProvider{
    public void processPayment(double amount, PaymentMethod method){
        System.out.println("Processing payment of Rs." + amount + "through PhonePe...");
        method.collectDetails();
        System.out.println("Payment Successful via PhonePe");
    }
}

class WalletPayment implements PaymentMethod{
    private String phoneNumber;
    public void collectDetails(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your phone number:");
        phoneNumber = sc.nextLine();
        System.out.println("Wallet details collected successfully from " + phoneNumber);
        sc.close();
    }
}

class UpiPayment implements PaymentMethod{
    private String upiId;
    public void collectDetails() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your UPI ID: ");
        upiId = sc.nextLine();
        System.out.println("UPI payment details collected from " + upiId);
        sc.close();
    }
}

class CreditCardPayment implements PaymentMethod {
    private String cardNumber, expiryDate, cvv;

    public void collectDetails() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your card number: ");
        cardNumber = sc.nextLine();
        System.out.print("Enter expiry date (MM/YY): ");
        expiryDate = sc.nextLine();
        System.out.print("Enter CVV: ");
        cvv = sc.nextLine();
        System.out.println("Credit card payment details collected.");
        System.out.println("Processing payment from:");
        System.out.println("Card Number: " + cardNumber);
        System.out.println("Expiry date: " + expiryDate);
        System.out.println("CVV: "+ cvv);
        sc.close();
    }
}

class DebitCardPayment implements PaymentMethod {
    private String cardNumber, expiryDate, cvv;

    public void collectDetails() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your card number: ");
        cardNumber = sc.nextLine();
        System.out.print("Enter expiry date (MM/YY): ");
        expiryDate = sc.nextLine();
        System.out.print("Enter CVV: ");
        cvv = sc.nextLine();
        System.out.println("Credit card payment details collected.");
        System.out.println("Processing payment from:");
        System.out.println("Card Number: " + cardNumber);
        System.out.println("Expiry date: " + expiryDate);
        System.out.println("CVV: "+ cvv);
        sc.close();
    }
}

class PaymentProcessor{
    private PaymentProvider provider;

    public PaymentProcessor(PaymentProvider provider){
        this.provider = provider;
    } 

    public void initiatePayment(double amount, PaymentMethod method){
        provider.processPayment(amount, method);
    }
}

public class Solid{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Hello! Kindly proceed with the payment \nChoose the payment provider in the next step!");

        System.out.println("Enter Payment Amount");
        double amount = sc.nextDouble();

        System.out.println("Choose the Payment Provider...");
        System.out.println("1. Paytm");
        System.out.println("2. Amazon Pay");
        System.out.println("3. PhonePe");
        System.out.print("Enter digit corresponding to the provider of your choice: ");
        int providerChoice = sc.nextInt();

        PaymentProvider provider = null;
        boolean valid = false;
        while(!valid){
            switch (providerChoice) {
                case 1:
                    provider = new Paytm();
                    valid = true;
                    break;
                case 2:
                    provider = new AmazonPay();
                    valid = true;
                    break;
                case 3:
                    provider = new PhonePe();
                    valid = true;
                    break;
                default:
                    System.out.println("Invalid choice. Enter only digit!");
                    return;
            }
        }

        System.out.println("Choose payment method:");
        System.out.println("1. Wallet");
        System.out.println("2. UPI");
        System.out.println("3. Credit Card");
        System.out.println("4. Debit Card");
        int methodChoice = sc.nextInt();

        PaymentMethod method = null; 

        valid = false;
        while(!valid){
            switch (methodChoice) {
                case 1:
                    method = new WalletPayment();
                    valid = true;
                    break;
                case 2:
                    method = new UpiPayment();
                    valid = true;
                    break;
                case 3:
                    method = new CreditCardPayment();
                    valid = true;
                    break;
                case 4:
                    method = new DebitCardPayment();
                    valid = true;
                    break;
                default:
                    System.out.println("Invalid choice.");
                    return;
            }
        }

        PaymentProcessor processor = new PaymentProcessor(provider);
        processor.initiatePayment(amount, method);

        sc.close();
    }
}
