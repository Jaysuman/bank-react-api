import React, { useState } from 'react';


const Transaction = () => {
  const [formType, setFormType] = useState('deposit'); // Default form type
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [senderAccount, setSenderAccount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [transactionMessage, setTransactionMessage] = useState('');
  const [transactions, setTransactions] = useState([]); // To hold transaction history

  // Function to clear the form
  const clearForm = () => {
    setAccountNumber('');
    setAmount('');
    setSenderAccount('');
    setRecipientAccount('');
    setTransactionMessage('');
  };

  // Function to handle deposit
  const handleDeposit = async (e) => {
    e.preventDefault();
    const newTransaction = { type: 'Deposit', accountNumber, amount: Number(amount) };
    setTransactions((prev) => [...prev, newTransaction]);
    setTransactionMessage(`Successfully deposited $${amount} to account ${accountNumber}.`);
    await storeTransactionInBin(newTransaction);
    clearForm();
  };

  // Function to handle withdrawal
  const handleWithdraw = async (e) => {
    e.preventDefault();
    const newTransaction = { type: 'Withdraw', accountNumber, amount: Number(amount) };
    setTransactions((prev) => [...prev, newTransaction]);
    setTransactionMessage(`Successfully withdrew $${amount} from account ${accountNumber}.`);
    await storeTransactionInBin(newTransaction);
    clearForm();
  };

  // Function to handle Interac transfer
  const handleInterac = async (e) => {
    e.preventDefault();
    const newTransaction = { type: 'Interac', senderAccount, recipientAccount, amount: Number(amount) };
    setTransactions((prev) => [...prev, newTransaction]);
    setTransactionMessage(`Successfully sent $${amount} from ${senderAccount} to ${recipientAccount}.`);
    await storeTransactionInBin(newTransaction);
    clearForm();
  };

  // Function to store transactions in your bin
  const storeTransactionInBin = async (transaction) => {
    const BIN_ID = '66ee315aacd3cb34a8885c57'; // Replace with your actual bin ID
    const API_KEY = '$2a$10$tjQRh1nraeP2Tg8ACBN4LuyAnSpfpjC9vCt3rjIRweqDCIhgkH2Y6'; // Replace with your actual API key

    try {
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'secret-key': API_KEY,
        },
        body: JSON.stringify({ transactions: [...transactions, transaction] }),
      });
    } catch (error) {
      console.error('Error storing transaction:', error);
      setTransactionMessage('Error storing transaction. Please try again.');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div className="container">
      <h2 className="my-4">Transaction</h2>

      {/* Button to switch between forms */}
      <div className="btn-group mb-3">
        <button className="btn btn-primary" onClick={() => setFormType('deposit')}>Deposit</button>
        <button className="btn btn-secondary" onClick={() => setFormType('withdraw')}>Withdraw</button>
        <button className="btn btn-success" onClick={() => setFormType('interac')}>Interac</button>
      </div>

      {/* Deposit Form */}
      {formType === 'deposit' && (
        <form onSubmit={handleDeposit}>
          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">Account Number:</label>
            <input
              type="text"
              className="form-control"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Deposit</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>Clear</button>
        </form>
      )}

      {/* Withdraw Form */}
      {formType === 'withdraw' && (
        <form onSubmit={handleWithdraw}>
          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">Account Number:</label>
            <input
              type="text"
              className="form-control"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">Withdraw</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>Clear</button>
        </form>
      )}

      {/* Interac Form */}
      {formType === 'interac' && (
        <form onSubmit={handleInterac}>
          <div className="mb-3">
            <label htmlFor="senderAccount" className="form-label">Sender Account:</label>
            <input
              type="text"
              className="form-control"
              id="senderAccount"
              value={senderAccount}
              onChange={(e) => setSenderAccount(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipientAccount" className="form-label">Recipient Account:</label>
            <input
              type="text"
              className="form-control"
              id="recipientAccount"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Send Interac</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>Clear</button>
        </form>
      )}

      {transactionMessage && <div className="alert alert-info mt-3">{transactionMessage}</div>}

      

      {/* Transaction History */}
      <h3 className="my-4">Transaction History</h3>
      <ul className="list-group">
        {transactions.map((trans, index) => (
          <li key={index} className="list-group-item">
            {`${trans.type}: $${trans.amount} ${trans.accountNumber ? 'to account ' + trans.accountNumber : ''}`}
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Transaction;
