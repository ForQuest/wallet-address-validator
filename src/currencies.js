(function (isNode) {
    // defines P2PKH and P2SH address types for standard (prod) and testnet networks
    var CURRENCIES = [{
            name: 'bitcoin',
            symbol: 'btc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'litecoin',
            symbol: 'ltc',
            addressTypes: {prod: ['30', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'peercoin',
            symbol: 'ppc',
            addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'dogecoin',
            symbol: 'doge',
            addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']},
            eip55: false
        },{
            name: 'beavercoin',
            symbol: 'bvc',
            addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'freicoin',
            symbol: 'frc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'protoshares',
            symbol: 'pts',
            addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'megacoin',
            symbol: 'mec',
            addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'primecoin',
            symbol: 'xpm',
            addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'auroracoin',
            symbol: 'aur',
            addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'namecoin',
            symbol: 'nmc',
            addressTypes: {prod: ['34'], testnet: []},
            eip55: false
        },{
            name: 'biocoin',
            symbol: 'bio',
            addressTypes: {prod: ['19', '14'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'garlicoin',
            symbol: 'grlc',
            addressTypes: {prod: ['26', '05'], testnet: ['6f', 'c4']},
            eip55: false
        },{
            name: 'digibyte',
            symbol: 'dgb',
            addressTypes: {prod: ['1e'], testnet: []},
            eip55: false
        },
        {
            name: 'ethereum',
            symbol: 'eth',
            eip55: true
        },
        {
            name: 'etherzero',
            symbol: 'etz',
            eip55: true
        },
        {
            name: 'ethereum classic',
            symbol: 'etc',
            eip55: true
        },
        {
            name: 'callisto',
            symbol: 'clo',
            eip55: true
        }];


    var currencies = {
        getByNameOrSymbol: function (currencyNameOrSymbol) {
            var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
            for (var i = 0; i < CURRENCIES.length; i++) {
                var currency = CURRENCIES[i];
                if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                    return currency;
                }
            }
            return null;
        }
    };

    // export currencies module
    if(isNode) {
        module.exports = currencies;
    } else {
        if(typeof window.WAValidator === 'undefined'){
           window.WAValidator = {__imports: {}};
        }
        window.WAValidator.__imports.currencies = currencies;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');
