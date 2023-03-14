'use client'
import { Button } from '@material-tailwind/react'

export default function CustomButton ({
  variant = 'gradient',
  color = 'cyan',
  size = 'md',
  text = 'Button'
}) {
  return <Button
    variant={variant}
    size={size}
    color={color}
  >{text}</Button>
}
