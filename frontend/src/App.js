import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {ethers} from 'ethers';

function App() {
  const {ethereum} = window;
  const [address, setAddress] = useState("Connect Wallet");
  const [balance, setBalance] = useState("");



  useEffect (()=>{
    ethereum.on("chainChanged",(chain)=>{
      console.log(chain)
    })
  });

  const changeChain = async() => {
    await ethereum.request({method: "wallet_switchEthereumChain",
    params: [
      {
        chainId:`0x13881`
      }
    ]
  })
  }

  const requestAccount = async ()=>{
    await ethereum.request({method: "wallet_requestPermissions",
    params:[{
      eth_accounts: {}
    }]
    });
    const accounts = await ethereum.request({method: "eth_requestAccounts"})
    setAddress(accounts[0]);

    const balance = await ethereum.request({method: "eth_getBalance",
    params: [accounts[0], 'latest']
  })

  setBalance(ethers.formatEther(balance));
  }

  const sendTx = async()=>{
    await ethereum.request({method: "eth_sendTransaction",
    params: [
      {
        to: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        from: address,
        value: '0x8AC7230489E80000',
        chainId: '0x3',
      }
    ]
  })
  }

  const withdrawEth = async () => {
    const recipientAddress = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'; // Replace with the recipient's Ethereum address
    const amount = '0x8AC7230489E80000'; // Hardcoded hexadecimal value for 1 ETH
  
    try {
      const tx = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            to: recipientAddress,
            from: address,
            value: amount,
          },
        ],
      });
      console.log('Withdraw Transaction:', tx);
      // Add any additional logic or UI updates as needed
    } catch (error) {
      console.error(error);
      // Handle the error and update the UI accordingly
    }
  };
  

  return (
    <div className="App">
      <p className='link' onClick={requestAccount}>The adrress of connected account is: {address}</p>
      <p className='balance'>{balance}</p>
      <div className='buttons'>
      <p className='link' onClick={changeChain}><button>Switch to Polygon</button></p>
      <p className='link' onClick={sendTx}><button>Send Transaction</button></p>
      <p className="link" onClick={withdrawEth}>
        <button>Withdraw 10 ETH</button>
      </p>
      </div>

    </div>
  );
}

export default App;
