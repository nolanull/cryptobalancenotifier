const ChainTasker = require('chaintasker');
const nodemailer = require('nodemailer');

class CryptoBalanceNotifier {
    constructor(providerUrl, emailConfig) {
        this.chainTasker = new ChainTasker(providerUrl);
        this.emailConfig = emailConfig;
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    async notifyBalanceChanges(addresses, toEmail) {
        const balances = await this.chainTasker.getBalances(addresses);
        const message = Object.entries(balances).map(([address, balance]) => `${address}: ${balance} ETH`).join('\n');

        await this.transporter.sendMail({
            from: this.emailConfig.auth.user,
            to: toEmail,
            subject: 'Crypto Balance Notification',
            text: message,
        });
    }
}

module.exports = CryptoBalanceNotifier;