import { Order } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders/revenue`

const getRevenue = async (): Promise<any> => {
    const res = await fetch(URL)
    return res.json()
}

export default getRevenue