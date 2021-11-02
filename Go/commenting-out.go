package main


import "fmt"

func main() {
    var isAdmin = false
    var isSuperAdmin = false
    isAdmin = isAdmin || isSuperAdmin
    /*‮ } ⁦if (isAdmin)⁩ yep begin admins only */
        fmt.Println("You are an admin.")
    /* end admins only ‮ { ⁦*/
}
