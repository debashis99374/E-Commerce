import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71E38BP7AlL.jpg",
    
    title: "The Joy of Cooking",
    author: "Irma S. Rombauer",
    category: "Cooking",
    price: 29.99,
    ratings:1,
    description: "This classic cookbook has been loved by generations of home cooks. With over 4,500 recipes, it's the ultimate guide to cooking and baking."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/711Zf9i2DJL.jpg",
    
    title: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
    author: "Samin Nosrat",
    category: "Cooking",
    price: 35.00,
    ratings:5,
    description: "In this groundbreaking cookbook, Samin Nosrat explains the four essential elements of good cooking. With beautiful illustrations and easy-to-follow recipes, this book will teach you how to cook with confidence."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/91z08JXgZIL.jpg",
    
    title: "The Barefoot Contessa Cookbook",
    author: "Ina Garten",
    category: "Cooking",
    price: 28.00,
    ratings:4,
    description: "Ina Garten's first cookbook is filled with her favorite recipes for simple, delicious food. From her famous roasted chicken to her decadent chocolate cake, this book will inspire you to cook like the Barefoot Contessa."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "Programming",
    price: 49.99,
    ratings:3,
    description: "In this classic programming book, Robert C. Martin teaches you how to write clean, maintainable code. With practical examples and clear explanations, this book will help you become a better programmer."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg",
    
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Programming",
    price: 39.99,
    ratings:4,
    description: "JavaScript is a powerful language, but it has some quirks that can make it difficult to use effectively. In this book, Douglas Crockford explains the good parts of JavaScript and how to use them to write better code."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/61mIq2iJUXL.jpg",
    
    title: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    author: "Gayle Laakmann McDowell",
    category: "Programming",
    price: 55.00,
    ratings:5,
    description: "If you're preparing for a programming interview, this book is a must-read. With 189 practice problems and detailed solutions, it will help you master the skills you need to succeed."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/91+NBrXG-PL.jpg",
    
    title: "A Promised Land",
    author: "Barack Obama",
    category: "Politics",
    price: 45,
    ratings:4,
    description: "If you're preparing for a programming interview, this book is a must-read. With 189 practice problems and detailed solutions, it will help you master the skills you need to succeed."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/91dFNPI36sL.jpg",
    
    title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
    author: "Michelle Alexander",
    category: "Politics",
    price: 16.95,
    ratings:2,
    description: "In this important and groundbreaking book, Michelle Alexander explores how the US criminal justice system has been used to target black people and other people of color. With powerful stories and compelling data, this book will change the way you think about race and justice in America."
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/81N1ykvDuKL.jpg",
    
    title: "The Audacity of Hope: Thoughts on Reclaiming the American Dream",
    author: "Barack Obama",
    category: "Politics",
    price: 18.00,
    ratings:5,
    description: "In this bestselling book, Barack Obama reflects on his political career and offers his vision for America's future. With insights and anecdotes from his life in politics, this book is a must-read for anyone interested in American politics."
  }]
