import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { format } from 'date-fns'

interface OrderProps {
    id: string
    address: string
    phone: string
    createdAt: string
}


const OrderRows:React.FC<OrderProps> = ({
    //@ts-ignore
    order: {
        id,
        address,
        phone,
        createdAt
    }
}) => {

    return (
        <Card className="flex items-center p-3">
            <Avatar className="h-9 w-9">
                <AvatarImage src="/images/02.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Phone: {phone}</p>
                <p className="text-sm text-muted-foreground">
                    Address: {address}
                </p>
            </div>
            <div className="ml-auto font-medium">Ordered at: {format(new Date(createdAt), 'MM/dd/yyyy')}</div>
        </Card>
    )
}

export default OrderRows