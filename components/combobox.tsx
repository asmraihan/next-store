"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Product } from "@/types"

interface ComboboxProps {
  data: Product[]
}

export const Combobox: React.FC<ComboboxProps> = ({
  data
}) => {
  const [isMacOs, setIsMacOs] = React.useState(false)
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [product, setProduct] = React.useState<Product[]>([])
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    if (debouncedQuery.length === 0) setProduct(null as any)

    if (debouncedQuery.length > 0) {

      const filtered = data.filter((product) => {
        return product.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      })
 
      setProduct(filtered)

    }
  }, [debouncedQuery, data])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setIsOpen(false)
    callback()
  }, [])

  React.useEffect(() => {
    if (!isOpen) {
      setQuery("")
    }
  }, [isOpen])

  return (
    <>
      <Button

        className="relative border bg-white text-black hover:bg-neutral-200 h-9 w-9 p-2 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 ml-auto mr-2"
        onClick={() => setIsOpen(true)}
      >
        <Icons.search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <span className="sr-only">Search products</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <abbr title={isMacOs ? 'Command' : 'Control'}>{isMacOs ? '⌘' : 'Ctrl+'}</abbr>K
        </kbd>
      </Button>
      {/* @ts-ignore */}
      <CommandDialog position="top" open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No products found.
          </CommandEmpty>
          {isPending ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            product?.map((item: Product) => (
              <CommandItem
                key={item.id}
                onSelect={() =>
                  handleSelect(() => router.push(`/product/${item.id}`))
                }
              >
                {item.name}
              </CommandItem>

            ))
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}