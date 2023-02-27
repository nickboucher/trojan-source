pragma solidity >=0.7.0 <0.9.0;

contract Adder {

    int256 number;

    function store(int256 num) public {
        /* Add number then⁧ /*/ return ;
        number += num;
        
    }

    function retrieve() public view returns (int256){
        return number;
    }
}