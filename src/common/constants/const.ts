import { ScreenHeight, ScreenWidth } from '@rneui/themed/dist/config';

export const height = ScreenHeight;
export const width = ScreenWidth;
// iphone 13 size
const heightStandard = 844;
const widthStandard = 390

export const widthScale = (size: number) => width / widthStandard * size;
export const heightScale = (size: number) => height / heightStandard * size;
export const sizeScale = (size: number) => size + (widthScale(size) - size)*0.9; 
export const textSize ={
    normal: sizeScale(16),
    title: sizeScale(24),
    small: sizeScale(14)
}
export const variables = {
    width: ScreenWidth,
    height: ScreenHeight,
    host: "https://travelappbackend.azurewebsites.net",
    host2: "http://192.168.10.101:8080",

}