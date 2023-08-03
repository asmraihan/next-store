import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import useCart from "@/hooks/use-cart"
import { ShoppingBag, ShoppingCart } from "lucide-react"


const CartSheet = () => {
    const cart = useCart()
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='flex items-center  py-5 rounded-md bg-black '
                    size={'sm'}
                >
                    <ShoppingBag
                        size={20}
                        color='white'
                    />
                    <span className='ml-2 font-medium text-white'>{cart.items.length}</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">  <ShoppingCart size={20} /> <h2>Shopping Cart</h2> </SheetTitle>
                    {/* <SheetDescription >
            Make changes to your profile here.
          </SheetDescription> */}
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default CartSheet