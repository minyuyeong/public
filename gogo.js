const err = new Error('invalid email'); // 이 인스턴스는 에러와 통신하는 수단.
function validateEmail(email){
	return email.match(/@/)?email:new Error(`invalid email: ${email}`);
}

const email=null;


try{
const validated=validateEmail(email);

if(validated instanceof Error){
	console.error(`Error_${validated.message}`);
}
else{
	console.log(`OKay: ${validated}`);
}
}catch(err){
	console.error(`Error_${err.message}`);
}
