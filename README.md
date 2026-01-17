### প্রশ্ন ১: Interface vs. Type
TypeScript এ interface ও type দুটোই কাছকাছি একই কাজ করে। interface ও type উভয়ই অবজেক্ট এর টাইপ নির্ধারণ করে।  তবে তাদের মধ্যে হালকা কিছু ও গুর্রুত্বপূর্ণ  পার্থক্য রয়েছে। 

interface একটি অবজেক্টের গঠন নির্ণয় করে। interface এর মূল গুরুত্ব interface extend করা যাই। অর্থাদ একটি interface অন্য একটি interface থেকে প্রোপারটিস গুলা নিজের মধ্যে আনতে পারে। তার পাশাপাশি এখই নামে একাধিক interface থাকলে তারা সকলে একত্রিত হয়ে যাই। 
উদাহরণ :
```
interface User {
  name: string;
  age: number;
}
interface Admin extends User {
  role: string;
}
```
অপরদিকে type সাধারণ কাজে ব্যবহার করা হয়। টাইপ দিয়ে সর্বপ্রথম টাইপ মেনশন করা হয়। type শুধু অবজেক্ট এর টাইপ ডিক্লার করতে বেবহার করা নয় সাথে union, intersection, tuple টাইপ ও প্রকাশ করতে পারে। তবে type কে একত্রিত  করা যায় না. 
```
type User = {
  name: string;
  age: number;
};
type password  = string | number;
```

### প্রশ্ন ৫: Union vs Intersection
TypeScript এ union () এবং intersection () টাইপ দুটি খুবই গুরুত্বপূর্ণ।
union (): একটি ভ্যালু একাধিক টাইপের যেকোনো একটি হতে পারে। 

উধাহরন :
```
type password  = string | number;
let myPassword : password  = "abcdef ";  
myPassword  = 123;
```
অপরদিকে intersection() একটি ভ্যালু একাধিক টাইপের শর্ত একসাথে পূরণ করতে হবে.

উধাহরন :
```
interface Name {
  name: string;
}
interface Age {
  age: number;
}
type PersonDetails = Name & Age;
const person: PersonDetails = {
  name: "Rayeem",
  age: ১৯
};
```
``
অন্যভাবে বলতে গেলে union() হলো "or" , intersection () হলো "and" .
