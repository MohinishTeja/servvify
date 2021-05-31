function myFunction() {
    var x = document.getElementById("stayout");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


async function getb(){

    var x= document.getElementById("address").value; 
    var y ="0x8E381898f5ed1Ce23e09F1D16375721E44dABa09";
		var web3=new Web3(window.ethereum);
		await window.ethereum.enable()
		var a=await web3.eth.getBalance(y);
    var b=web3.utils.fromWei(a, 'ether');
    var c= parseFloat(b).toFixed(4);
    document.getElementById("type").value=c;

  check(b);


}

async function check(a){
  var xaa=a;
  if(xaa<1.85){
    document.getElementById("datass").innerHTML="Balance Insufficient. Please use our RAMP to top up immediately";
  }
  else{
    document.getElementById("datass").innerHTML="Balance sufficient. You can proceed to Pay now!";
  
  }
}



  /*
  var web3=new Web3(window.ethereum)

  await window.ethereum.enable()
  var x = "0x32bD87C2aA7C812aeDCAe1Cb06924A9Bf2433Ee9";*/
async function payf(){
  var web3=new Web3(window.ethereum)
	
  window.ethereum.enable()

  var a="0x8E381898f5ed1Ce23e09F1D16375721E44dABa09";
  var amount=1;
  const accounts = await web3.eth.getAccounts();
  
  web3.eth.sendTransaction({
    to:a,
    value:amount,
    from:accounts[0]
  },(err,transactionId)=>{
    if(err){
      console.log("failed",err)
    }
    else{
      console.log("success",transactionId);
    }
  }
  )


}
