var web3;

const address = '0xb4fae488e7C0c00735Fc062b792B7Da45c023e12'; //rinkeby_old
const address1 = '0x921F95fe57D033408559DEC71772DDe2E95D6488'; //rinkeby
const address2 = '0xD1A9A8ecb4CF084a761fcf2b6670B6229CD5df41'; //matic
const address3 = '0x785ca3057f4319c80a0444f1025e89aFdAE8A150'; //BSC
const address4 = '0x7d13942fD3A8c7c8DcB8448C25d4Af18fbB8a39E'; //Oasis
const address5 = '0xB6BFfab608430Ebe652795De1f8A3db8723e122D'; //Matic_2

//Contract Addresses

const ropsten = '0x06AcE9ae2133602B085dBFa9469B05b28a5dB060';

const matic = '0xDB572f458944b72e96222Cae6855FeCC999dB1a1';

const bsc = '0x06AcE9ae2133602B085dBFa9469B05b28a5dB060';

const abi = [
  {
    constant: false,
    inputs: [],
    name: 'invest',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'weight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'category',
        type: 'uint256',
      },
    ],
    name: 'payout',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'balanceof',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

async function pay() {
  var web3 = new Web3(window.ethereum);

  await window.ethereum.enable();

  contract = new web3.eth.Contract(abi, ropsten);

  var paymentAddress = document.getElementById('address').value;
  var weight = document.getElementById('weight').value;
  var category = document.getElementById('type').value;

  var addressq = web3.eth.ens.getAddress('ethereum.eth');
  console.log(paymentAddress);
  console.log(typeof paymentAddress);
  console.log(addressq);
  console.log(typeof addressq);
  const accounts = await web3.eth.getAccounts();

  contract.methods.payout(a1, weight, category).send({ from: accounts[0] });
}
