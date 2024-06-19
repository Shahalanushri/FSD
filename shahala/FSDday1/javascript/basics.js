console.log("hello world...");
let x=10;
console.log(x)
{
    let x=10
    console.log(x)
}a=true
b=4
c="4"
console.log(typeof(a))



let temp=30
if(temp>20){
console.log("hot day")}
else if(temp>20 && temp<=30)
    {
        console.log("pleasent day")
    } 
    else{
        console.log("cold day")
    }
    
    for (let i=0;i<10;i++){
        if (i== 5){
            break;
          }
          console.log(i);

    }

    let fruits=['apple','banana','orange'];
        console.log(fruits[0]);
        fruits.push('grape')
        console.log(fruits)
        fruits.pop()
        console.log(fruits)

        fruits.unshift('grape')
        console.log(fruits)

        fruits.shift('grape')
        console.log(fruits)

        let person={
            fname:'shahala',
            lname:'nushri',
            age:21,
            city:'cityville',
    
        };
        console.log(person)
        console.log(person.lname)

        let people = [
            {
              name: 'Alice',
              age: 25,
              place: {
                city: 'Wonderland',
                country: 'Fairyland'
              }
            },
            {
              name: 'Bob',
              age: 30,
              place: {
                city: 'TechCity',
                country: 'Geekland'
              }
            },
            {
              name: 'Charlie',
              age: 28,
              place: {
                city: 'Artsville',
                country: 'Createland'
              }
            }
          ];
        console.log(people)
        console.log(people[0].name)
        console.log(people[0])
        console.log(people[2].place.country)