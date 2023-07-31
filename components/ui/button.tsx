import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
        className={cn(
            `
            w-auto rounded-full text-white font-semibold hover:opacity-75 transition bg-black border-transparent px-5 py-3
            disabled:cursor-not-allowed disabled:opacity-50
            `,
            className
        )}
        ref={ref}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"
export default Button