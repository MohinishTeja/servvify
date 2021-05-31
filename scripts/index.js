var web3


async function pay() {

    var web3=new Web3(window.ethereum)
    await window.ethereum.enable()

    // Account
    
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0])
    document.getElementById("c22").innerHTML=accounts[0];
    document.getElementById("c22").style.fontSize="20px";
        


    

    //Balance
    var a = await web3.eth.getBalance("0x8E381898f5ed1Ce23e09F1D16375721E44dABa09");
    var b = web3.utils.fromWei(a,'ether');
    var c= parseFloat(b).toFixed(4);

    document.getElementById("c21").innerHTML=c;

}


