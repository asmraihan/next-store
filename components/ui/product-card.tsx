'use client'
import * as React from "react"
import { Product } from "@/types"
import { MouseEventHandler } from "react"
import { Icons } from "../icons"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { AspectRatio } from "./aspect-ratio"
import { Button, buttonVariants } from "./button"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import { toast } from "react-hot-toast"

interface ProductCardProps {
    data: Product,
}
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const ProductCard: React.FC<ProductCardProps> = ({
    data,
}) => {

    const cart = useCart()
    const [isPending, startTransition] = React.useTransition()

    const previewModal = usePreviewModal()

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        startTransition(async () => {
            try {
                await cart.addItem(data)
                // toast.success("Added to cart.")
            } catch (error) {
                error instanceof Error
                    ? toast.error(error.message)
                    : toast.error("Something went wrong, please try again.")
            }
        })


    }


    return (
        <Card
            className={cn("h-full overflow-hidden rounded-sm")}
        >
            <Link
                aria-label={`View ${data.name} details`}
                href={`/product/${data.id}`}
            >
                <CardHeader className="border-b p-0">
                    <AspectRatio ratio={4 / 3}>
                        {data?.images?.length ? (

                            <Image
                                src={data.images[0]?.url ?? "/images/product-placeholder.webp"}
                                alt={data.images[0]?.url ?? data.name}
                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="object-cover aspect-square "
                                loading="lazy"
                            />
                        ) : (
                            <div
                                aria-label="Placeholder"
                                role="img"
                                aria-roledescription="placeholder"
                                className="flex h-full w-full items-center justify-center bg-secondary"
                            >
                                <Icons.placeholder
                                    className="h-9 w-9 text-muted-foreground"
                                    aria-hidden="true"
                                />
                            </div>
                        )}
                    </AspectRatio>
                </CardHeader>
            </Link>

            <CardContent className="grid gap-2.5 p-4">
                <CardTitle className="line-clamp-1">{data.name}</CardTitle>
                <CardDescription className="line-clamp-2 text-neutral-700 font-medium">
                    {(data.category.name)}
                </CardDescription>
                <CardDescription className="line-clamp-2 text-lg font-bold text-black">
                    {formatter.format(Number(data.price))}
                </CardDescription>
            </CardContent>

            <CardFooter className="p-4">
                <div className="flex w-full items-center gap-2 flex-row justify-between">
                    <Button
                        aria-label="Preview product"
                        variant={"outline"}
                        size={"sm"}
                        className="w-full rounded-sm"
                        onClick={onPreview}
                    >
                        <Expand className="w-4 h-4 mr-2" />Preview
                    </Button>
                    <Button
                        aria-label="Add to cart"
                        size="sm"
                        className="w-full rounded-sm"
                        disabled={isPending}
                        onClick={onAddToCart}
                    >
                        {isPending && (
                            <Icons.spinner
                                className="mr-2 h-4 w-4 animate-spin"
                                aria-hidden="true"
                            />
                        )}
                        {!isPending && (
                            <ShoppingCart className="w-4 h-4 mr-2" />
                        )} Add to cart
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCard