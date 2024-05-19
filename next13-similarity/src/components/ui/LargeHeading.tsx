import React, { forwardRef, HTMLAttributes } from 'react'
import {cva, VariantProps} from 'class-variance-authority' 
import { cn } from '@/lib/utils'

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tight",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        sm: 'text-5xl md:text-6xl lg:text-7xl',
        lg: 'text-2xl md:text-3xl lg:text-4xl',
      }
    }, 
    defaultVariants: {
        size: 'default'
    }
  }
)

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, size, ...props }: HeadingProps, ref) => {
    return <p ref={ref} {...props} className={cn({size, className})}>{children}</p>
  }
)

LargeHeading.displayName = "LargeHeading"

export default LargeHeading
