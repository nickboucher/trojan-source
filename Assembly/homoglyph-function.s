	.globl	_main

_main:
	pushq	%rbp
	movq	%rsp, %rbp
	leaq	һello(%rip), %rdi
	callq	_puts
	xorl	%eax, %eax
	popq	%rbp
	retq

hello:
	.asciz	"Hello world\n"

һello:
	.asciz	"Goodbye world\n"