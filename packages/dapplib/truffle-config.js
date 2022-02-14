require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food pledge rescue praise cluster half knife food gaze'; 
let testAccounts = [
"0x4c42049d9ead48cd541a3e3c8a60fcf938321ede0e1bcea864ab47fe4c87f58f",
"0x3277e64919044a578d31c44048c1d5d8e13fc59d8478465355e229bc51d68816",
"0x3cc3b545e939e56433b5c17923975c5efcf394565d63b74e2c5e0307e5327c96",
"0x378c8e2814b7d55b6f94551e69eba48fde89657af20588b50b7969f7389b63f7",
"0x0b6e4d609e78c7bca0f0e338d9e3a325b8318a65e0fa075586589db07d66b435",
"0x28edc23e993c5bca73d9574a1d88e5043b4b8f6c6d6be5d8b812925cb5caf675",
"0xa7e687961d1a97654ff3d20275620dda47ef7562e62d92cfedef458bcaacd201",
"0xf82edf9b6bda297d39df7b9e14e6cede7edcfb28b2d4eb256a8a3ee85a86c316",
"0x922a30467c7800630271a99db18532efc6d89f70b1eb5de70aa655675cf64a5e",
"0xbba680c19908459e19ca0f18952a058aed015ef877afbad42164929927399dc3"
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


