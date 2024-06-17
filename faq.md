# FAQ

This section summarizes frequently asked questions about the Onchain Examination Protocol "Kiriko."

## Q.1 What are the advantages of using smart contracts?

Firstly, since the examinee's answers are recorded on the smart contract, they can review their answers even after submission.

Additionally, by having the examiner commit the hash of the model answer beforehand, it ensures that the examiner cannot tamper with the answers after the test ends.

Furthermore, by allowing only those who pass the test to issue digital certificates linked to the test, we can eliminate the process of linking test takers and passers to the certificate issuing body, a process unavoidable in existing online tests.

In traditional online tests, the issuing body of the certificate is the entity that conducted the test, and there is no way to verify whether the examinee actually achieved outstanding results other than by trusting the issuing body.

However, by managing this on the smart contract, it becomes possible to issue digital certificates linked to the test questions, and anyone can verify that the certificate holder actually took the test and had the certificate issued.

Thus, by using Kiriko, it is possible to build trust on the blockchain without relying on a specific third-party institution.

## Q.2 What is the significance of being fully onchain?

With the rapid development of L2 solutions, it has become possible to execute transactions quickly and cheaply. This allows us to transfer roles traditionally handled by web applications (logic and storage) to the blockchain and smart contracts. This means we can create a more general application infrastructure with transparency in logic and storage, allowing anyone to verify it.

If not fully onchain, the management of storage and logic offchain would depend on a single entity, making it essentially no different from existing online exam models.

Our insistence on being fully onchain stems from our belief that we should create applications that follow this new paradigm.

## Q.3 Why use EAS instead of SBT?

Soulbound Tokens (SBT) are NFTs that cannot be transferred to other addresses, creating an onchain activity history by representing the user's identity, achievements, and attendance.

However, there are challenges when using SBT as certificates. Firstly, there is no established common standard for SBT, leading to multiple implementations. This can hinder interoperability between applications that display SBT and other protocols.

Additionally, when accessing existing NFT marketplaces like [OpenSea](https://opensea.io), users can see their SBTs, but some users may want to manage their certificates separately from their NFTs (they may not want to mix their NFT collection with their certificate list). Despite the unnecessary need to manage NFTs and certificates in the same interface, using SBT would display them together, increasing usability issues.

On the other hand, the Ethereum Attestation Service (EAS) is specialized for certificates, avoiding unnecessary features based on NFTs. EAS cryptographically ensures through digital signatures which issuer issued a certificate to whom. Due to its simple structure, it allows the issuance of certificates in any format after the test, and certificates can be managed separately even in wallets holding existing NFTs.