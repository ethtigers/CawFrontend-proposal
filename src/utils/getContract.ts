import { ethers } from "ethers";
import * as CawNamesAbi from "src/contracts/cawNames.json";
import * as CawAbi from "src/contracts/caw.json";

import { SM_CONTRACTS } from 'src/config';
type ContractType = 'CAW' | 'CAW_NAMES';

export default function getContract(type: ContractType) {

    //* Creating a new provider
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);

    //* Getting the signer
    const signer = provider.getSigner();

    //* Creating a new contract factory with the signer, address and ABI

    switch (type) {
        case 'CAW':
            return new ethers.Contract(SM_CONTRACTS.CAW, CawAbi.abi, signer);
        case 'CAW_NAMES':
            return new ethers.Contract(SM_CONTRACTS.CAW_NAMES, CawNamesAbi.abi, signer);
        default:
            return null;
    }
}
