import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card } from '../ui/card'
import { format } from 'date-fns'
import { Order } from '@/types'

interface OrderProps {
   data: Order
}

const OrderRows:React.FC<OrderProps> = ({
    data
}) => {

    return (
        <Card className="flex items-center p-3">
            <Avatar className="h-9 w-9">
                <AvatarImage src="/images/02.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Phone: {data?.phone}</p>
                <p className="text-sm text-muted-foreground">
                    Address: {data?.address}
                </p>
            </div>
            <div className="ml-auto font-medium">Ordered at: {format(new Date(data.createdAt), 'MM/dd/yyyy')}</div>
        </Card>
    )
}

export default OrderRows