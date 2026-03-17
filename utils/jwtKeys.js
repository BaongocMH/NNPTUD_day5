const { generateKeyPairSync } = require('crypto');

// Generate an in-memory RSA key pair (2048 bits) for RS256 signing/verifying.
// For a real system you would persist these keys instead of regenerating.
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

module.exports = {
  privateKey,
  publicKey,
};

