'use client'

import { Product } from "@/types"
import React, { startTransition } from "react"
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

interface ProductCardProps {
    data: Product,

}

const ProductCard: React.FC<ProductCardProps> = ({
    data,

}) => {



    const [isPending, startTransition] = React.useTransition()
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
                            //@ts-ignore
                            <Image
                                src={
                                    data.images[0]?.url ?? "/images/product-placeholder.webp"
                                }
                                alt={data.images[0]?.url ?? data.name}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="object-cover"
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
            <Link
                aria-label={`View ${data.name} details`}
                href={`/product/${data.id}`}
            >
                <CardContent className="grid gap-2.5 p-4">
                    <CardTitle className="line-clamp-1">{data.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                        {(data.price)}
                    </CardDescription>
                </CardContent>
            </Link>
            <CardFooter className="p-4">

                <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
                    <Link
                        aria-label="Preview product"
                        href={`/product-preview/${data.id}`}
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className: "h-8 w-full rounded-sm",
                        })}
                    >
                        Preview
                    </Link>
                    <Button
                        aria-label="Add to cart"
                        size="sm"
                        className="h-8 w-full rounded-sm"

                        disabled={isPending}
                    >
                        {isPending && (
                            <Icons.spinner
                                className="mr-2 h-4 w-4 animate-spin"
                                aria-hidden="true"
                            />
                        )}
                        Add to cart
                    </Button>
                </div>

            </CardFooter>
        </Card>
    )
}

export default ProductCard