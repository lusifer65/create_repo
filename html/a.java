class ComplexNumber
{
    private double r,i;

    //encapsulation (getter and setter method)
    public void setReal(double r)
    {
        this.r=r;
    }
    public void setImg(double i)
    {this.i=i;}
    public double getReal()
    {
        return r;
    }
    public double getImg()
    {
        return i;
    }

    //constuctor
    public ComplexNumber()
    {
        r=0;
        i=0;
    }
    public ComplexNumber(double r,double i)
    {
        this.r=r;
        this.i=i;
    }

    public boolean isEqual(ComplexNumber obj)
    {
        if(this.r==obj.r && this.i==obj.i)
            return true;
        return false;
    }

}

class Main{
    public static void main(String[] args) {
        ComplexNumber CN1=new ComplexNumber();
        CN1.setReal(10);
        CN1.setImg(10);
        ComplexNumber CN2=new ComplexNumber(10,10);
        System.out.println("1st complex number "+CN1.getReal()+"+"+CN1.getImg()+"i");
        System.out.println("2st complex number "+CN2.getReal()+"+"+CN2.getImg()+"i");
        System.out.println("both complex number are equal= " +CN1.isEqual(CN2));

    }
}