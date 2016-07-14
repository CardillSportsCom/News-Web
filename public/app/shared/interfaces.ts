export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    orderTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IAllArticlesResponse {
    articleList: IArticleData[];
}

export interface ISingleArticlesResponse {
    articleData: IArticleData;
    targetURL: string;
}

export interface IArticleData {
    ID: number;
    Name: string;
    ImageLink: string;
    Owner: IOwner;
    ArticleItems: IArticleItem[];
    Comments: IComment[];
}

export interface IComment {
    Name: string;
    Text: string;
    Date: Date;
}

export interface IOwner {
    ID: number;
    firstName: string;
    lastName: string;
    userPicture: string;
}

export interface IArticleItem {
    ID: number;
    Paragraph: string;
    ArticleConnectionID: number;
    Type: string;
}