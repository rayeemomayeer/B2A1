const formatValue = (value: string | number | boolean) : string | number | boolean => {
    if (typeof value === 'string'){
        return value.toUpperCase();
    } else if (typeof value === 'number'){
        return value*10;
    } else{
        return !value;
    }
}

const getLength = (value: string | any[]):number => {
    if (typeof value === "string"){
        return value.length;
    }else if (Array.isArray(value)){
        return value.length;
    }else{
        return 0;
    }
}
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const filterByRating = (items: {title: string, rating: number}[]): {title: string, rating: number}[] => {
    return items.filter(item => item.rating >= 4);
}

const filterActiveUsers = (users: {id: number, name: string, email: string, isActive: boolean}[]): {id: number, name: string, email: string, isActive: boolean}[] => {
    return users.filter(user => user.isActive === true);
}

interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean,
}

const printBookDetails = (book: Book) : void => {
    return console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? 'Yes' : 'No'}`)
}

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]) : (string | number)[] => {
    const result: (string | number)[] = [...arr1];
    for (const i of arr2){
        let found = false;
        for (const q of result){
            if (i === q){
                found = true;
                break;
            }
        }
        if (!found){
            result.push(i);
        }
    }
    return result;
}

const calculateTotalPrice = (products: {name: string, price: number, quantity: number, discount?: number}[]):number =>{
    return products.reduce((total, product) => {
        const discountedPrice = product.discount? product.price - (product.price * (product.discount/100)) : product.price;
        return total + (discountedPrice * product.quantity);
    }, 0);
}

