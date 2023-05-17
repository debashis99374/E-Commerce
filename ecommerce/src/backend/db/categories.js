import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories =[
 {
  _id: uuid(),
  categoryName:"Cooking",
  desc:"Here you will find books related to cooking"
 },
 {
  _id: uuid(),
  categoryName:"Programming",
  desc:"Here you will find books related to Programming"
 },
 {
  _id: uuid(),
  categoryName:"Politics",
  desc:"Here you will find books related to Politics"
 }
]

