function calculateBill()
{
	var unit=document.getElementById("unit_no").value; 
	var bill;
	var a;
	var b;
	if(unit<=100)
	{
		bill=unit*02.96;
	}
	else if(unit>100)
	{
		 a=100-unit;
		 b=a*05.56;
		bill=b+(100*02.96);
	}
	document.write( &nbsp your net bill is: "+bill);
}