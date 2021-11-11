require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind huge grid kite bubble skin'; 
let testAccounts = [
"0x9b569be9d692828d0688aca910cd96a70561743d12c9a4aab8bccaab71603c73",
"0x2ce8fbb4b13bb67f89a7462adaf7a7ef0dcc705fff02e179c1528f925da8b607",
"0x28211462dbca517b524dfe08c97ffa4e22c17b7bd756506434ebf0b1e4fd515c",
"0xeebbac2448893e03b8ec37729b60b35483176a866153176c3d69903b1106f44e",
"0x55f61946c521d2e4bea4deb64b1c8780eb62be364319633f4e93a56938437b23",
"0x1531c435f830a556041c330aafd7bf87e11c7f4864bb85c1930fbb1b0c9a0c66",
"0xeea86c03f827eade9db354a62a9d8e5d8542bca9f07f7eab81badfc5eca57cb3",
"0x2bdd2fe91db4afff306ee570e25ddbbf4d05d25cddc9c3110efda264d5c52bc1",
"0x608db06a07816319bc424d121b4780d3c1717ecc60a8aee35c916361d63128e3",
"0x4cba3d96cf6609c36595b977a2133f9e2ce5f694bfbdea8dfcd5987a2c950a71"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


