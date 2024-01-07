# *JavaScript dars 2*

## 1. "use strict" 

- **Bu kod yozsak js ni oldingi versiyalaridagi bug larni tekshirip yoki aytish mumkun aniqlab berish maqsadida ishlaydi**

## 2. " typeof "

- **Bu functsiya bizga malumotni qaysi turda ekanligini aniqlab beradi**

**M :** 
```
console.log(typeof "Assalomu alekum"); //natija -> string
console.log(typeof 571); //natija -> number

```
## 3. Number

- **Bizqachonki o'zgaruvchiga qimat sifatida son kiritsak u number bo'ladi . M: ( 1 , 2333 , 0.34 , -34 , ... )**

```
console.log(1 / 0); //--> Infinity
```
 
 - **Infinity - bu cheksizlik**

 ```
 console.log("64"/2); //--> 32
 ```
 - **Yuqoridagi misolda ko'rishligimiz mumkun ' taype conversin ' yani malumot turi o'zgaryapti string numberga o'zgaryapti.**


 ```
 console.log(45+true);  //-> 46 
 console.log(45-true);  //-> 44 
 console.log(45/true);  //-> 45 
 console.log(45*true);  //-> 45
 console.log(45/folse); //-> Infinity 
 console.log(45+folse); //-> 45 
 console.log(45-folse); //-> 45  
 ```
- **Yuqoridagi misolda ko'rishligimiz mumkun boolen ' taype conversin ' yani malumot turi o'zgaryapti '*true = 1*' , '*folse = 0*' barobar bo'ladi**

 ```
 console.log(true+true+true);        //-> 3
 concole.log(35+undefinned);        //-> NaN 
 concole.log(undefined+undefined); //-> NaN 
 console.log(null+null);          //-> 0 
 console.log(null+2);            //-> 2 
 console.log(null-2);           //-> -2 
 console.log(null/2);          //-> 0 
 ```
- **Yuqoridagi misolda ko'rishligimiz mumkun null ' taype conversin ' yani malumot turi o'zgaryapti matematik qiymati ' 0 ' tenfg bo'ladi ( ' null = 0 ' ).**

```
console.log(0.1+0,2);  // -> 0.300000004  js shunday
console.log(15e4);    // -> 15 0000  -> buerrda ( ' e4=10^4 ' ) barobar.
console.log(15e-3);  // -> 0.015  -> bunda (" 15 / 1000 ") shu ko'rinishda matematik amal bajarilga hisoblanadi.
console.log(15e - 7); // -> 143  -> bunda agar biz " - " oldin va kegin  bo'sh joy tashlasak quydagija ish amalga oshadi ( "150 - 7 = 143 " ) ko'rinishida .
console.log(123_456_345); //-> 123456345 
console.log("5"**2); // -> 25 -> yani bu amal ( ** ) 5^2 degani (5*5=25) ko'rinishida .
```

##  4. String
- Biz har qanday malumotmi quydagi shartli belgilar ichida kiritadiga bo'lsak bu malumot turi **String** deb ataladi  **( "...."  , '.....' , `` ,)** .

```
let ism ="Muhammadaziz";
let familiya  ='Akbarov';
let  yosh = `21`;

consile.log(typeof ism, yosh, familiya); //-> string
```
##  5. Undefined

- Qachonki biz o'zgaruvchi elon qilsagu ammo umga qiymat kiritmasak u **undefined** bo'ladi.

```
let firisName ;
console.log(firistName); // -> undefined
```
##  6. Null
- Qachonki biz ozgaruvchining qiymatiga null yozsak bu null yani ochga ozgaruvchining qiymati yo'q ekanligini aytgan bo'lamiz.

```
let varNeme = null;
consile.log(typeof varName); // -> object chiqaradi bu js bug hisoblanadi aslida esa buni taypi null bo'ladi.
```
##  7. bigInt
- bigInt bu taypga 2^53 katta bo'lga sonlar kiradi

```
let bigIntegr = BigInt(2133448585886969677);
console.log(bigIntegr); //-> 2133448n
console.log(typeof bigIntegr); //-> bigint
```

##  8. Assignment -> O'zlashtirish

```
let a = 25;
let b = 35;
a = a + b;
console.log(a); //-> 60  bunda ( a = 25 + 35 ) ga teng bo'ladi
a += a ; // yani ( a = a + a )  bunda qo'shuluvchi ('a') lar  yuqoridagi ohirgi o'zgarishdan qiymat oladi yani (' a = 60 + 60 ') ko'rinishida bo'ladi .
console.log(a); //-> 120
a /= a ; //yani  a = a / a ; --> a = 120 / 120 korinishida 
console.log(a); // -> ( 1 ) ga  teng bo'ladi.
```

##  9.  ++Increment , --Decrement 
- bunda ++Increment  1 oshirish.
- bunda --Decrement  1 kamaytirish.

```
let a = 23;
let b = 56;
console.log(--a); //--> 22  --> yani bunda 23-1=22 korinishida
console.log(++b); //--> 57  --> yani bunda 56+1=57 korinishida
```
##  10.  Comporison operatoris -> Taqqoslash aperato'rlari 
- taqqoslash aperato'rlari quydagilar ( == , === ,  != , !== , >  , >= , < , <= ). Bunda " == " faqat qiymatlarni tengligini tekshiradi , " ===" bunda nafaqat qiymatlaarni balki tayplarini ham tengligini tekshiradi .

```
console.log(10=="10");      // -> true
console.log(10==="10");     // -> folse
console.log(10===10);       // -> true
console.log("10"==="10");   // -> true
console.log(10>="10");      // -> true
console.log(10!="10");      // -> folse
console.log(10!=="10");     // -> true
console.log("10"!=="10");   // -> folse
console.log(10>10);         // -> folse
```

## 1. "use strict" 

- **Bu ko'd yozsak js ni oldingi versiyalaridagi bug larni tekshirip yoki aytish mumkun aniqlab berish maqsadida ishlaydi**

## 2. " typeof "

- **Bu functsiya bizga malumotni qaysi turda ekanligini aniqlab beradi**

**M :** 
```
console.log(typeof "Assalomu alekum"); //natija -> string
console.log(typeof 571); //natija -> number

```
## 3. Number

- **Bizqachonki o'zgaruvchiga qimat sifatida son kiritsak u number bo'ladi . M: ( 1 , 2333 , 0.34 , -34 , ... )**

```
console.log(1 / 0); //--> Infinity
```
 
 - **Infinity - bu cheksizlik**

 ```
 console.log("64"/2); //--> 32
 ```
 - **Yuqoridagi misolda ko'rishligimiz mumkun ' taype conversin ' yani malumot turi o'zgaryapti string numberga o'zgaryapti.**


 ```
 console.log(45+true);  //-> 46 
 console.log(45-true);  //-> 44 
 console.log(45/true);  //-> 45 
 console.log(45*true);  //-> 45
 console.log(45/folse); //-> Infinity 
 console.log(45+folse); //-> 45 
 console.log(45-folse); //-> 45  
 ```
- **Yuqoridagi misolda ko'rishligimiz mumkun boolen ' taype conversin ' yani malumot turi o'zgaryapti '*true = 1*' , '*folse = 0*' barobar bo'ladi**

 ```
 console.log(true+true+true);        //-> 3
 concole.log(35+undefinned);        //-> NaN 
 concole.log(undefined+undefined); //-> NaN 
 console.log(null+null);          //-> 0 
 console.log(null+2);            //-> 2 
 console.log(null-2);           //-> -2 
 console.log(null/2);          //-> 0 
 ```
- **Yuqoridagi misolda ko'rishligimiz mumkun null ' taype conversin ' yani malumot turi o'zgaryapti matematik qiymati ' 0 ' tenfg bo'ladi ( ' null = 0 ' ).**

```
console.log(0.1+0,2);  // -> 0.300000004  js shunday
console.log(15e4);    // -> 15 0000  -> buerrda ( ' e4=10^4 ' ) barobar.
console.log(15e-3);  // -> 0.015  -> bunda (" 15 / 1000 ") shu ko'rinishda matematik amal bajarilga hisoblanadi.
console.log(15e - 7); // -> 143  -> bunda agar biz " - " oldin va kegin  bo'sh joy tashlasak quydagija ish amalga oshadi ( "150 - 7 = 143 " ) ko'rinishida .
console.log(123_456_345); //-> 123456345 
console.log("5"**2); // -> 25 -> yani bu amal ( ** ) 5^2 degani (5*5=25) ko'rinishida .
```

##  4. String
- Biz har qanday malumotmi quydagi shartli belgilar ichida kiritadiga bo'lsak bu malumot turi **String** deb ataladi  **( "...."  , '.....' , `` ,)** .

```
let ism ="Muhammadaziz";
let familiya  ='Akbarov';
let  yosh = `21`;

consile.log(typeof ism, yosh, familiya); //-> string
```
##  5. Undefined

- Qachonki biz o'zgaruvchi elon qilsagu ammo umga qiymat kiritmasak u **undefined** bo'ladi.

```
let firisName ;
console.log(firistName); // -> undefined
```
##  6. Null
- Qachonki biz ozgaruvchining qiymatiga null yozsak bu null yani ochga ozgaruvchining qiymati yo'q ekanligini aytgan bo'lamiz.

```
let varNeme = null;
consile.log(typeof varName); // -> object chiqaradi bu js bug hisoblanadi aslida esa buni taypi null bo'ladi.
```
##  7. bigInt
- bigInt bu taypga 2^53 katta bo'lga sonlar kiradi

```
let bigIntegr = BigInt(2133448585886969677);
console.log(bigIntegr); //-> 2133448n
console.log(typeof bigIntegr); //-> bigint
```

##  8. Assignment -> O'zlashtirish

```
let a = 25;
let b = 35;
a = a + b;
console.log(a); //-> 60  bunda ( a = 25 + 35 ) ga teng bo'ladi
a += a ; // yani ( a = a + a )  bunda qo'shuluvchi ('a') lar  yuqoridagi ohirgi o'zgarishdan qiymat oladi yani (' a = 60 + 60 ') ko'rinishida bo'ladi .
console.log(a); //-> 120
a /= a ; //yani  a = a / a ; --> a = 120 / 120 korinishida 
console.log(a); // -> ( 1 ) ga  teng bo'ladi.
```

##  9.  ++Increment , --Decrement 
- bunda ++Increment  1 oshirish.
- bunda --Decrement  1 kamaytirish.

```
let a = 23;
let b = 56;
console.log(--a); //--> 22  --> yani bunda 23-1=22 korinishida
console.log(++b); //--> 57  --> yani bunda 56+1=57 korinishida
```
##  10.  Comporison operatoris -> Taqqoslash aperato'rlari 
- taqqoslash aperato'rlari quydagilar ( == , === ,  != , !== , >  , >= , < , <= ). Bunda " == " faqat qiymatlarni tengligini tekshiradi , " ===" bunda nafaqat qiymatlaarni balki tayplarini ham tengligini tekshiradi .

```
console.log(10=="10");      // -> true
console.log(10==="10");     // -> folse
console.log(10===10);       // -> true
console.log("10"==="10");   // -> true
console.log(10>="10");      // -> true
console.log(10!="10");      // -> folse
console.log(10!=="10");     // -> true
console.log("10"!=="10");   // -> folse
console.log(10>10);         // -> folse
```