var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

var chai = isNode ? require('chai') : window.chai,
    expect = chai.expect;

var WAValidator = isNode ? require('../src/wallet_address_validator') : window.WAValidator;

function valid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, networkType);
    expect(result).to.be.true;
}

function invalid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, networkType);
    expect(result).to.be.false;
}

describe('WAValidator.validate()', function () {
    describe('valid results', function () {
        it('should return true for correct bitcoin addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'prod');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'both');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'testnet');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'both');

            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
            valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', 'testnet');
        });

        it('should return true for correct litecoin addresses', function () {
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin');
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC');
            valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin');
            valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', 'testnet');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', 'testnet');
        });

        it('should return true for correct peercoin addresses', function () {
            valid('PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin');
            valid('PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin');
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin');
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'PPC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoin', 'testnet');

            // p2sh addresses
            valid('pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoin', 'testnet');
        });

        it('should return true for correct dogecoin addresses', function () {
            valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin');
            valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE');
            //TODO: NEED A DOGECOIN TESTNET ADDRESS

            //p2sh addresses
            valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', 'testnet');
        });

        it('should return true for correct beavercoin addresses', function () {
            valid('BPPtB4EpPi5wCaGXZuNyKQgng8ya579qUh', 'beavercoin');
            valid('BC1LLYoE4mTCHTJhVYvLGxhRTwAHyWTQ49', 'beavercoin');
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'beavercoin');
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'BVC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'beavercoin', 'testnet');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'beavercoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'beavercoin', 'testnet');
        });

        it('should return true for correct litecoin freicoin', function () {
            valid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin');
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin');
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'FRC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoin', 'testnet');

            // p2sh addresse
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoin', 'testnet');
        });

        it('should return true for correct protoshares addresses', function () {
            valid('PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares');
            valid('Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares');
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares');
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'PTS');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protoshares', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protoshares', 'testnet');
        });

        it('should return true for correct megacoin addresses', function () {
            valid('MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin');
            valid('MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin');
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin');
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'MEC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoin', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoin', 'testnet');
        });

        it('should return true for correct primecoin addresses', function () {
            valid('AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin');
            valid('AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin');
            valid('ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin');
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin');
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'XPM');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoin', 'testnet');

            //p2sh addresses
            valid('af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoin', 'testnet');
        });

        it('should return true for correct auroracoin addresses', function () {
            valid('ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin');
            valid('AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin');
            valid('AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin');
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin');
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'AUR');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoin', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoin', 'testnet');
        });

        it('should return true for correct namecoin addresses', function () {
            valid('NEpeRmS775fnti8TDgJA28m8KLEfNNRZvT', 'namecoin');
            valid('MyJ691bGJ48RBK2LS8n1U57wcFLFScFXxi', 'namecoin');
            valid('NFY9aw1RXLGtWpeqgNQXprnUcZXyKNinTh', 'namecoin');
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'namecoin');
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'NMC');
        });

        it('should return true for correct BioCoin addresses', function () {
            valid('B7xseoLGk7hEpMDDeSvZDKmmiAMHWiccok', 'biocoin');
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'biocoin');
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'biocoin', 'testnet');
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'BIO', 'testnet');
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'BIO');
        });

        it('should return true for correct Garlicoin addresses', function () {
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'garlicoin');
            valid('GNWeWaoQ6rv21ZFjJWT9vb91hXUzFTLkru', 'garlicoin');
            valid('mjKbQTkgwzmsL3J86tdVzhyW9pc4NePqTb', 'garlicoin', 'testnet');
            valid('mnYp36NuyRavMKQ9Q9Q6oGqoorAs9p3zYn', 'GRLC', 'testnet');
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'GRLC');
        });

        it('should return true for correct Vertcoin addresses', function () {
            valid('VmoMjGf3zgZLy8sk3PMKd3xikZHXWvnYi7', 'vertcoin');
            valid('VmhHwXr3J8xMZpy62WuBGpu3xVvThWzcTQ', 'vertcoin');
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'vertcoin', 'testnet');
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'VTC', 'testnet');
            valid('Vri6Q4GgNFfdtcpxD961TotJwaSaYQCaL5', 'VTC');
        });

        it('should return true for correct BitcoinGold addresses', function () {
            valid('GW3JrQyHtoVfEFES3Y9JagiX3VSKQStLwj', 'bitcoingold');
            valid('GUDWdeMyAXQbrNFFivAhkJQ1GfBCFdc7JF', 'bitcoingold');
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'bitcoingold', 'testnet');
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'BTG', 'testnet');
            valid('GSNFPRsdaM3MXrU5HW1AxgFwmUQC8HXK9F', 'BTG');
        });

        it('should return true for correct Decred addresses', function () {
            valid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85', 'DCR');
            valid('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA', 'decred');
            valid('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV', 'decred');
            valid('TsijUgejaRnLKF5WAbpUxNtwKGUiKVeXLr7', 'decred', 'testnet');
            valid('TsZ9QmAoadF12hGvyALp6qvaF4be3BmLqG9', 'dcr', 'testnet');
        });

        it('should return true for correct Digibyte addresses', function () {
            valid('DG2rM2orU2JH5i4ACh3AKNpRTNESdv5xf8', 'DGB');
            valid('DBR2Lj1F17eHGHXgbpae2Wb4m39bDyA1qo', 'DGB');
            valid('D9TDZTR9Z9Mx2NoDJnhqhnYhDLKRAmsL9n', 'digibyte');
            valid('DHRzA1YHA1kFWpz2apRckZJy6KZRyGq4EV', 'digibyte');
            valid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'digibyte');
        });

        it('should return true for correct CannabisCoin addresses', function () {
            valid('CfF9uCADAYsLCuYVpNkFNtaM4miNtMeRpW', 'CANN');
            valid('CR2Q29uviVoxRNUbz7jQSZmbTRznUFtk6r', 'Cann');
            valid('CRUhje8DCUHttgEJNxUd2tfAVanbGye4QP', 'CannabisCoin');
            valid('CHisGHn5ZbTLjrAzpVKWhHf8F6FY8ajWMH', 'cannabiscoin');
            valid('CQzhGu8HTR8sYeMD4qjZopJkbfe8vdbEXL', 'cannabiscoin');
        });

        it('should return true for correct Ethereum addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum');
            valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum');
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH');
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH');
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH');
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH');
            valid('0xde709f2102306220921060314715629080e2fb77', 'ETH');
            valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH');
            valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH');
            valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH');
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH');

            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ethereumclassic');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETC');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'etherzero');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETZ');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'callisto');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'CLO');
        });
    });

    describe('invalid results', function () {
        function commonTests(currency) {
            invalid('', currency); //reject blank
            invalid('%%@', currency); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency);  //reject transaction id's
            //testnet
            invalid('', currency, 'testnet'); //reject blank
            invalid('%%@', currency, 'testnet'); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, 'testnet'); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, 'testnet');  //reject transaction id's
        }

        it('should return false for incorrect bitcoin addresses', function () {
            commonTests('bitcoin');
        });

        it('should return false for incorrect litecoin addresses', function () {
            commonTests('litecoin');
        });

        it('should return false for incorrect peercoin addresses', function () {
            commonTests('peercoin');
        });

        it('should return false for incorrect dogecoin addresses', function () {
            commonTests('dogecoin');
        });

        it('should return false for incorrect beavercoin addresses', function () {
            commonTests('beavercoin');
        });

        it('should return false for incorrect freicoin addresses', function () {
            commonTests('freicoin');
        });

        it('should return false for incorrect protoshares addresses', function () {
            commonTests('protoshares');
        });

        it('should return false for incorrect megacoin addresses', function () {
            commonTests('megacoin');
        });

        it('should return false for incorrect primecoin addresses', function () {
            commonTests('primecoin');
        });

        it('should return false for incorrect auroracoin addresses', function () {
            commonTests('auroracoin');
        });

        it('should return false for incorrect namecoin addresses', function () {
            commonTests('namecoin');
        });

        it('should return false for incorrect biocoin addresses', function () {
            commonTests('biocoin');
        });

        it('should return false for incorrect garlicoin addresses', function () {
            commonTests('garlicoin');
        });

        it('should return false for incorrect vertcoin addresses', function () {
            commonTests('vertcoin');
        });

        it('should return false for incorrect bitcoingold addresses', function () {
            commonTests('bitcoingold');
        });

        it('should return false for incorrect decred addresses', function () {
            commonTests('decred');
        });

        it('should return false for incorrect digibyte addresses', function () {
            commonTests('digibyte');
        });

        it('should return false for incorrect cannabiscoin addresses', function () {
            commonTests('cannabiscoin');
        });

        it('should return false for incorrect eip55 addresses', function () {
            invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum');
            invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum');
            invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum');
            invalid('0xff4d6793F584a473', 'ethereum');

            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto');
        });
    });
});
