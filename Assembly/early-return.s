	.globl	_main

_main:
	pushq	%rbp /* must push before ⁧/*/ ;popq %rbp; retq
	movq	%rsp, %rbp
	leaq	hello(%rip), %rdi
	callq _puts
	xorl	%eax, %eax
	popq	%rbp
	retq

hello:
	.asciz	"Hello world\n"