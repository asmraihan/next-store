import { Order } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders/sold`

const getSold = async (): Promise<string> => {
    const res = await fetch(URL)
    return res.json()
}

export default getSold