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
import CartItem from "./cart-item"
import Summary from "./summary"


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
            <SheetContent className="flex w-full flex-col  sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">  <ShoppingCart size={20} /> <h2>Shopping Cart</h2> </SheetTitle>
                    {/* <SheetDescription >
            Make changes to your profile here.
          </SheetDescription> */}
                </SheetHeader>
                <div className="bg-white mt-4">
                    <div className="">
                        {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                        <ul>
                            {cart.items.map((item) => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </ul>
                    </div>

                </div>
                <div>
                    {/* <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose> */}
                    <Summary />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CartSheet