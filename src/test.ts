import { createWallet, getPublicAddressByWallet } from 'tonutils-ts';

async function getAddress(): Promise<void> {
  // Create a new wallet
  const { mnemonic, keyPair, generatedWallet } = await createWallet();

  // Get the public address of the created wallet
  const publicAddress = getPublicAddressByWallet(generatedWallet).toString();

  // Convert public and secret keys from Buffer to hex string
  const publicKey = keyPair.publicKey.toString('hex');
  const secretKey = keyPair.secretKey.toString('hex');

  // Log all the information
  console.log('Wallet Address:', publicAddress);
  console.log('Mnemonic:', mnemonic);
  console.log('Public Key (Hex):', publicKey);
  console.log('Secret Key (Hex):', secretKey);
}

// Call the function
getAddress();