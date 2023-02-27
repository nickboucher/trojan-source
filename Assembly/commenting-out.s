	.globl	_main

_main:
	pushq	%rbp
	movq	%rsp, %rbp
	leaq	hello(%rip), %rdi
	/* print string ‮⁦callq _puts ⁩ ⁦*/
	xorl	%eax, %eax
	popq	%rbp
	retq

hello:
	.asciz	"Hello world\n"