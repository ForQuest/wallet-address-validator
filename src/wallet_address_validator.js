(function (isNode) {
    var base58, cryptoUtils, currencies, sha3;

    if(isNode) {
        base58 = require('./base58');
        cryptoUtils = require('./crypto_utils');
        currencies = require('./currencies');
        sha3 = require('./sha3');
    } else {
        var imports = window.WAValidator.__imports;
        base58 = imports.base58;
        cryptoUtils = imports.cryptoUtils;
        currencies = imports.currencies;
        sha3 = imports.methods;
    }

    var DEFAULT_CURRENCY_NAME = 'bitcoin',
        DEFAULT_NETWORK_TYPE = 'prod';

    var WAValidator = {
        getAddressType: function (address) {
            var decoded;
            try {
                decoded = base58.decode(address);
            } catch (e) {
                // if decoding fails, assume invalid address
                return null;
            }

            var length = decoded.length;

            // should be 25 bytes per btc address spec
            if (length != 25) {
                return null;
            }

            var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
                body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
                goodChecksum = cryptoUtils.sha256(cryptoUtils.sha256(body)).substr(0, 8);

            return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, 1)) : null;
        },

        validate: function (address, currencyNameOrSymbol, networkType) {
            currencyNameOrSymbol = currencyNameOrSymbol || DEFAULT_CURRENCY_NAME;
            networkType = networkType || DEFAULT_NETWORK_TYPE;

            var correctAddressTypes,
                currency = currencies.getByNameOrSymbol(currencyNameOrSymbol);
            if(currency.eip55){
                return this.isAddress(address);
            } else {
                var addressType = this.getAddressType(address);
                
                if(networkType === 'prod' || networkType === 'testnet'){
                    correctAddressTypes = currency.addressTypes[networkType]
                } else {
                    correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
                }

                return correctAddressTypes.indexOf(addressType) >= 0;
            }
        },

        isAddress: function (address) {
            if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
                // check if it has the basic requirements of an address
                return false;
            } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
                // If it's all small caps or all all caps, return true
                return true;
            } else {
                // Otherwise check each case
                return this.isChecksumAddress(address);
            }
        },

        isChecksumAddress: function (address) {
            // Check each case
            address = address.replace('0x','');
            var addressHash = sha3['keccak256'](address.toLowerCase());
            for (var i = 0; i < 40; i++ ) {
                // the nth letter should be uppercase if the nth digit of casemap is 1
                if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                    return false;
                }
            }
            return true;
        }
    };

    // export WAValidator module
    if(isNode) {
        module.exports = WAValidator;
    } else {
        window.WAValidator = WAValidator;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');


