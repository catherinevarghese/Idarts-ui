export interface IStockDetails{
        id: number,
        name:string,
        quantity: number,
        price: number,
        avg_cost: number,
        invested_amount: number,
        portfolio_percent:number,
        unrealized_return:number,
        return:number
}
export interface IAllStock{
    isProcessingRequest: boolean
    data: IStockDetails[]
}