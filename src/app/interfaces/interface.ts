
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

export interface ProductSection {
  Fruits: FruitTypes | Array<any>,
  Vegetables: VegetableTypes | Array<any>
}

export interface FruitTypes {
  Apples: string,
  Bananas: string,
  Citrus_Fruits: string,
  Country_Fruits: string,
  Exotic_Fruits: string,
  Mango: string
}

export interface VegetableTypes {
  Beans: string,
  Country_Vegetables: string,
  Exotic_Vegetables: string,
  Gourds: string,
  Greens: string,
  Herb_Seasoning: string,
  Hill_Vegetables: string,
  Root_Vegetables: string,
  Special_Items: string,
  Tomato_onion: string
}


export const FRUIT_TYPES = () => {

}
