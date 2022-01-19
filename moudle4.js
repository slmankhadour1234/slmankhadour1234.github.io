var names=new Array();
names[0]="salman";
names[1]="John";
names[2]="mohammad";
names[3]="jason";
names[4]="Ali";
names[5]="frank";
names[6]="Mark";
names[7]="Abd";
names[8]="Aya";
names[9]="jim";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}