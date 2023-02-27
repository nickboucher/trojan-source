	.globl	_main

_main:
	pushq	%rbp
	movq	%rsp, %rbp
	leaq	he​llo(%rip), %rdi
	callq	_puts
	xorl	%eax, %eax
	popq	%rbp
	retq

hello:
	.asciz	"Hello world\n"

he​llo:
	.asciz	"Goodbye world\n"