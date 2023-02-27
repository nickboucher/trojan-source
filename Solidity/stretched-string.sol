pragma solidity >=0.7.0 <0.9.0;

contract Adder {

    int256 number;

    function store(int256 num) public {
        string memory level = "user";
        if (keccak256(abi.encodePacked(level)) == keccak256(abi.encodePacked(unicode"admin⁧ ⁦// Check if admin⁩ ⁦"))) {
            number += num;
        }
        
    }

    function retrieve() public view returns (int256){
        return number;
    }
}