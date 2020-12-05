
## Hope Runners of Gridlock Excerpts 

### About

todo

### Tech

todo
  
### Development & Testing

Running Locally:

In root folder:
- Install modules:  
  ```yarn install```
- If you have a separate mnemonic, add to it to env.  
  ```export MNEMONIC="<insert_your_own_mnemonic_here>```  
  ```yarn run node```  
- In a separate window, init openzeppelin & deploy contracts. Initialization is simple. Choose a name + project version.  
  ```yarn run init_contracts```
- Add contracts to the OpenZeppelin configuration. This is necessary to get a proper networks object in the build file (due to a temp bug).  
  ```yarn run add_contracts```
  ```yarn run deploy_contracts```
- Deploy ERC721. It will mint 15 excerpts. 
  ```yarn run publish_contracts```
- Run the server.  
  ```yarn run start```

- To deploy to a testnet or mainnet, just add or use the existing network in the openzeppelin networks.js. It uses Infura to deploy and thus you also need to export your own Infura ID (like your mnemonic for deployment).  
  ```export REACT_APP_INFURA_ID="<INFURA_ID_HERE>"```

### License

Code License:
MIT

