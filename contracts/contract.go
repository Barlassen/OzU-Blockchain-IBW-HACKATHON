package main

import (
	"fmt"
	"log"
	"math/big"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"

	// Replace with the path where your bindings are located
	"path/to/your/contract/bindings"
)

// NFTContractAddress is the address of the deployed contract
var NFTContractAddress = common.HexToAddress("0xYourContractAddressHere")

func main() {
	// Connect to the Ethereum client
	client, err := ethclient.Dial("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID")
	if err != nil {
		log.Fatalf("Failed to connect to the Ethereum client: %v", err)
	}

	// Load your NFT contract
	contract, err := bindings.NewYourNFTContract(NFTContractAddress, client)
	if err != nil {
		log.Fatalf("Failed to load the contract: %v", err)
	}

	// Example of minting an NFT
	mintNFT(client, contract)

	// Example of transferring an NFT
	transferNFT(client, contract)
}

func mintNFT(client *ethclient.Client, contract *bindings.YourNFTContract) {
	// Load your account
	auth, err := bind.NewTransactorWithChainID(strings.NewReader(YOUR_PRIVATE_KEY), YOUR_PASSPHRASE, big.NewInt(CHAIN_ID))
	if err != nil {
		log.Fatalf("Failed to create authorized transactor: %v", err)
	}

	// Mint an NFT
	tokenURI := "https://example.com/metadata/1"
	tx, err := contract.Mint(auth, YOUR_ADDRESS, tokenURI)
	if err != nil {
		log.Fatalf("Failed to mint NFT: %v", err)
	}

	fmt.Printf("NFT minted! Transaction Hash: %s\n", tx.Hash().Hex())
}

func transferNFT(client *ethclient.Client, contract *bindings.YourNFTContract) {
	// Load your account
	auth, err := bind.NewTransactorWithChainID(strings.NewReader(YOUR_PRIVATE_KEY), YOUR_PASSPHRASE, big.NewInt(CHAIN_ID))
	if err != nil {
		log.Fatalf("Failed to create authorized transactor: %v", err)
	}

	// Transfer an NFT
	tokenID := big.NewInt(1)
	recipient := common.HexToAddress("0xRecipientAddress")
	tx, err := contract.TransferFrom(auth, YOUR_ADDRESS, recipient, tokenID)
	if err != nil {
		log.Fatalf("Failed to transfer NFT: %v", err)
	}

	fmt.Printf("NFT transferred! Transaction Hash: %s\n", tx.Hash().Hex())
}
