pragma solidity >=0.7.0 <0.9.0;

contract Hello {

    function hello() private pure returns (string memory) {
        return "hello";
    }


    function һello() private pure returns (string memory) {
        return "goodbye";
    }

    function sayHello() public pure returns (string memory) {
        return һello();
    }
}