
export interface ShopDetails {
  shopId: number,
  shopTitle: string,
  shopSubTitle: string,
  imageUrl: string,
  loadingBehaviour: any,
  contents: string | ShopContentDetails
}

export interface ShopContentDetails {
  imageUrl: string,
  availability: string,
  deliveryService: boolean,
  offers: boolean,
}
