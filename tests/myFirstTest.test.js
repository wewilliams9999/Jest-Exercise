


describe("Number Operations", ()=> {
    test("1 plus 1 should be equal to 2", () => {
        let a = 1;
        let b = 1;
        expect(a+b).toBe(2)
    })

    test("5 plus 6 is not equal to 10", () => {
        let a = 5; 
        let b = 6;
        expect(a+b).not.toBe(10)
    })
})

describe("Testing other matcher methods", ()=> {
    test("Testing that a variable is undefined", ()=> {
        let number = undefined;
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test("Should expect zero to act like zero", ()=> {
        let number = 0;
        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test("Number Comparison", ()=> {
        const a = 1;
        const b = 2;
        expect(a+b).toBeGreaterThan(2);
        expect(a+b).toBeGreaterThanOrEqual(3);
        expect(a+b).toBeLessThan(10);
        expect(a+b).toBeLessThanOrEqual(5);
    })

    test("there should be no I in team", ()=>{
        let string = "team";
        expect(string).not.toMatch(/I/i);
    })

    test("'stop' is part of Christopher", ()=>{
        let string = "Christopher";
        expect(string).toMatch(/stop/); 
    })

    const shoppingList = ["Milk", "Trash bags", "Paper towels", "Juice"]
    test("the shopping list doesn't have coffee", ()=>{
        expect(shoppingList).not.toContain("Coffee")
        expect(shoppingList).toContain("Juice")
    })
})

// testing primitive and reference type equality
describe("Testing Reference Equality", ()=>{
    const user = {
        name: "Clement"
    }
    user['age'] = 45;

    test("Should return a user object with age as 45",()=>{
        expect(user).toEqual({
            name: "Clement",
            age: 45
        })
    })

    test("Should return a user with a name and a key", ()=>{
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        )
    })


    // Testing Array Equality

    test("Array equality", ()=> {
        const users = [
            "Clement",
            "Sarah",
            "Julie"
        ]
   
        users.push("Jacob");

        expect(users).toEqual(["Clement", "Sarah", "Julie", "Jacob"])
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

        const userObjectInArray = [
            {
                user: "Clement",
                age: 45,
            },
            {
                user: "Sarah",
                age: 40,
            },
            {
                user: "Julie",
                age: 50,
            },
        ]

        userObjectInArray.push({
            name: "Phil",
            age: 57
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    })
})

const {sum, deleteUserById, findUserById} = require("../utils/helper")

let userdata = [];
console.log(userdata, 'before all functions')

//this runs once before the first test; runs before beforeEach
beforeAll(()=>{
    userdata = ['Clement', 'Sarah']
    console.log("runs before all tests", userdata)
})

//beforeEach will run before every test. for example could connect to an API or database and do something
beforeEach(()=>{
    console.log("running before each test")
})

//runs after each test; could do some cleanup - ex. removing yourself from a database connection, etc.
afterEach(()=>{
    console.log("running after each test")
})

//runs after the final test
afterAll(()=>{
    console.log("running after the last test", userdata)
    userdata = [];
})

describe("Testing imported functions",()=> {
    let users = [
        {
            user: "Clement",
            age: 45,
            id: 1,
        },
        {
            user: "Sarah",
            age: 40,
            id: 2,
        },
        {
            user: "Julie",
            age: 50,
            id: 3,
        },
    ]
    test("Sum function should add 2 numbers",()=>{
        expect(sum(5,3)).toBe(8)
        })  

    test("delete by id function should delete a user by their id",()=>{

        expect(deleteUserById(users,3)).toEqual([
            {
                user: "Clement",
                age: 45,
                id: 1,
            },
            {
                user: "Sarah",
                age: 40,
                id: 2,
            },           
        ])

        expect(deleteUserById(users,3).length).toBe(2)
    })    
    
    //done by Test-Driven Development
    test("Finds a user by ID from a list of users", ()=>{
        expect(findUserById(users, 2)).toEqual({
            user: "Sarah",
            age: 40,
            id: 2,
        })

        expect(findUserById(users,10)).toBeUndefined()
    })
})