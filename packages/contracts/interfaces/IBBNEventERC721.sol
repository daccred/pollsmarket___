// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.14;

/**
* @title BBN Event NFT Contract Interface.
* @author Daccred.
* @dev  This interface controls the NFT contract deployed
*       alongside any event listed by a curator.
*       [Ref:: BBNEventERC721.sol]
*/
interface IBBNEventERC721 {
    /**
    * @dev  Return the maxSupply of the NFT Token.
    *
    * @return uint256 maxSupply.
    */
    function getMaxSuppply() external view returns(uint256);

    /**
    * @dev  Return the currentSupply of the NFT Token.
    *
    * @return uint256 currentSupply.
    */
    function getCurrentSupply() external view returns(uint256);
}