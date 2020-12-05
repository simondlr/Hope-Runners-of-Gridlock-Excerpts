const { time, balance } = require('@openzeppelin/test-helpers');

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
const { expect } = require("chai");  

const { loadFixture } = require('ethereum-waffle');

let ERC721;

const ETH0 = ethers.BigNumber.from('0');
const ETH1 = ethers.utils.parseEther('1');
const ETH2 = ethers.utils.parseEther('2');
const ETH3 = ethers.utils.parseEther('3');
const ETH4 = ethers.utils.parseEther('4');

describe("HROG Excerpts", function() {
  let excerpts;

  let provider;
  let signers;
  let accounts;
  let snapshot;
  const gasLimit = 9500000; // if gas limit is set, it doesn't superfluosly run estimateGas, slowing tests down.

  this.beforeAll(async function() {
    provider = new ethers.providers.Web3Provider(web3.currentProvider);
    signers = await ethers.getSigners();
    accounts = await Promise.all(signers.map(async function(signer) {return await signer.getAddress(); }));

    ERC721 = await ethers.getContractFactory("ERC721");

    excerpts = await ERC721.deploy({gasLimit});
    snapshot = await provider.send('evm_snapshot', []);
  });

 this.beforeEach(async function() {
    await provider.send('evm_revert', [snapshot]);
    snapshot = await provider.send('evm_snapshot', []);
  });

  it('excerpts: proper contract created', async () => {
    expect(await excerpts.name()).to.equal("Hope Runners of Gridlock Excerpts");
    expect(await excerpts.symbol()).to.equal("HROG_E");
    expect(await excerpts.baseURI()).to.equal("https://excerpts.ofgridlock.com/metadata/");
    expect(await excerpts.tokenURI(1)).to.equal("https://excerpts.ofgridlock.com/metadata/1");
    expect(await excerpts.ownerOf('1')).to.equal("0x0CaCC6104D8Cd9d7b2850b4f35c65C1eCDEECe03");
    expect(await excerpts.ownerOf('15')).to.equal("0x0CaCC6104D8Cd9d7b2850b4f35c65C1eCDEECe03");
    expect(await excerpts.totalSupply()).to.equal('15');
  });

  /*it('excerpts: try to mint, but fail', async() => {
    await expect(excerpts._mint(42)).to.be.reverted();
  });*/
});