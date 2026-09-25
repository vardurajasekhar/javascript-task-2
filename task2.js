// Variables & Data Types


// Create a variable using let and store your name. Print its data type using typeof.

    let yourName="Rajasekhar"
    console.log(typeof(yourName))

// Create a variable containing your age. Print its value and data type.

    var age=20
    console.log(age,typeof(age))

// Create a variable containing true. Print its value and data type.

    var bool=true
    console.log(bool,typeof(bool))

// Declare a variable without assigning any value. Print its value and data type.

    var a;
    console.log(a,typeof(a))


// Create a variable containing null. Print its value and data type.

    var nul=null
    console.log(nul,typeof(nul))
    
// Create five variables containing a string, number, boolean, undefined, and null. Print all five.

    let Name="rajasekhar";
    let Age=20;
    let Bol=true;
    let A;
    let Nul=null
    console.log(Name,Age,Bol,A,Nul)

// Create a variable containing your qualification and print its data type.

    let  qualification="mca";
    console.log(typeof(qualification))

// Create a variable containing your salary and check whether its data type is number.

    let sal=50000;
    console.log(typeof(sal))

// Create a variable containing "100" and another containing 100. Print the data type of both.

    let Strg="100";
    let Val=100;
    console.log(typeof(Strg,Val))

// Create variables for your name, age, qualification, and working status. Print all their values and data types.

    let nAme="rajasekhar";
    let Qualification="mca"
    let workingStatus="work on javascript"
    console.log(nAme,Qualification,workingStatus,typeof(nAme,Qualification,workingStatus))

// Arrays

// Create an array containing five fruit names. Print the complete array.

    const fruits=["apple","banana","grape","sapota","mango"]
    console.log(fruits)

// Create an array containing five numbers. Print the first element.

    const numbers=[1,2,3,4,5]
    console.log(numbers[0])

// Create an array containing six colors. Print the third element.

    const colors=["red","blue","green","yellow","skyblue","orange"]
    console.log(colors[2])

// Create an array containing five mobile brands. Print the last element using length.

    const mobilebrands=["samsung","redme","realme","iphone","vivo"]
    console.log(mobilebrands[mobilebrands.length-1])

// Create an array containing seven numbers. Print the second-last element using length.

    const Numbers=[1,2,3,4,5,6,7]
    console.log(Numbers[Numbers.length-2])

// Create an array containing your favorite foods. Print the first, third, and last elements.

    const favfoods=["biriyani","pulav","dosa","chapathi","idly","friedrice"]
    console.log(favfoods[0],favfoods[2],favfoods[favfoods.length-1])

// Create an array containing five cricketer names. Print the fourth cricketer.

    const cricketers=["dhoni","kohli","sachin","shreys","panth"]
    console.log(cricketers[3])

// Create an array containing different toys. Print the last toy dynamically using length - 1.

    const toys=["hourse","baby","elephent"]
    console.log(toys[toys.length-1])

// Create an array containing 10 values. Print the first, last, and second-last values.

    const NUMBERS=[1,2,3,4,5,6,7,8,9,10]
    console.log(NUMBERS[0],NUMBERS[NUMBERS.length-1],NUMBERS[NUMBERS.length-2])

// Create an array containing fruits, toys, and a cricketer's name. Print the complete array and any three individual values.

    const ITEMS=["apple","banana","elephenttoy","hoursetoy","dhoni","kohli"]
    console.log(ITEMS)
    console.log(ITEMS[0])
    console.log(ITEMS[2])
    console.log(ITEMS[4])

// Objects

// Create an object containing name, age, and city. Print the complete object.

    const data={name:"raja",
                age:20,
                city:"hyd"}
    console.log(data)

// Create an object containing your name, qualification, and company. Print the company.

        const Info={name:"raja",qual:"mca",company:"stackly"}
        console.log(Info.company)

// Create an object containing a fruits array. Print the second fruit.

        const fruitarray={
            fruitS:["apple","banana","mango","sethaful"]
        }
        console.log(fruitarray.fruitS[1])

// Create an object containing a toys array. Print the last toy dynamically.

        const toyarray={
            toys:["hourse","elephent","parret","picock"]
        }
        console.log(toyarray.toys[toyarray.toys.length-1])

// Create an object containing cricketer and team. Print the cricketer's name.

        const player={
            cricketer:"dhoni",
            team:"india"
        }
        console.log(player.cricketer)

// Create an object containing fruitName, toyName, and cricketer. Print all three properties.

        const Itemname={
            fruitname:"apple",
            toyname:"elephentname",
            cricketrname:"dhoni"
        }
        console.log(Itemname.fruitname,Itemname.toyname,Itemname.cricketrname)

// Create an object with two arrays: students and courses. Print the first student and second course.

        const Stdinfo={
            students:["raja","naveen","deepthi"],
            courses:["science","java","python"]

        }
        console.log(Stdinfo.students[0],Stdinfo.courses[1])

// Create an object containing a mobile array and print the third mobile.

        const mobilearray={
            mobile:["vivo","iphoe","realme","googlepixel"]
        }
        console.log(mobilearray.mobile[2])

// Create an object containing employeeName, skills, and experience. Print the second skill.

        const empinfo={
            employename:"raka",
            skills:["mern","java"],
            exp:20

        }
        console.log(empinfo.skills[1])

// Create an object containing your personal information and print any three individual properties.

        const personalinfo={
            name:"raja",
            age:20,
            city:"hyd",
            id:21
        }
        console.log(personalinfo.name,personalinfo.age,personalinfo.city)

// Arithmetic Operators

// Create two numbers and perform addition, subtraction, multiplication, and division.

        let ab=10;
        let bc=20;
        addition=ab+bc;
        subtraction=ab-bc;
        multiplication=ab*bc;
        division=ab/bc
        console.log(addition,subtraction,multiplication,division)

// Create two numbers and find their remainder using %.

        let abc=12;
        let bca=5;
        remainder=abc%bca
        console.log(remainder)

// Find the result of 2 ** 5.

        result=2 ** 5;
        console.log(result)

// Create two variables and perform all six arithmetic operations: +, -, *, /, %, **.

        let cd=12;
        let dc=15;
        Addition=cd+dc;
        Subtraction=cd-dc;
        Multiplication=cd*dc;
        Division=cd/dc;
        Modulus=cd%dc;
        Exponentiaol=cd ** dc;
        console.log(Addition,Subtraction,Multiplication,Division,Modulus,Exponentiaol)

// Create a variable containing 10. Increase its value by 5 using +.

        let abcd=10;
            abcd=abcd+5
            console.log(abcd)
        
// Increment & Decrement

// Create a variable with value 10 and use pre-increment. Print the result.
        

            let pre=10;
                ++pre;
            console.log(pre)

// Create a variable with value 10 and use post-increment. Print the result.

        let post=10;
            post++
            console.log(post)

// Create a variable with value 20 and use pre-decrement. Print the result.

        let pred=20;
            --pred;
            console.log(pred)

// Create a variable with value 20 and use post-decrement. Print the result.

        let postd=20
            postd--
            console.log(postd)

// Create two variables and demonstrate the difference between pre-increment and post-increment.

        let b1=10
        let b2=20
        console.log(b1++,++b2)

// Assignment Operators

// Create a = 20 and b = 10. Use += and print the result.

        var a1=10;
        var b5=20;
        console.log(a1+=b5)

// Create a = 50 and b = 20. Use -= and print the result.

        var a2=50;
        var b6=20;
        console.log(a2-=b6)

// Create a = 10 and b = 5. Use *= and print the result.

        var a3=10;
        var b7=5;
        console.log(a3*=b7)

// Create a = 100 and b = 10. Use /= and print the result.

        var a4=100;
        var b8=10
        console.log(a4/=b8)

// Create a = 25 and b = 4. Use %= and print the result.

        let a5=25;
        let b9=4;
        console.log(a5%=b9)

// Comparison, Logical & Ternary

// Compare two numbers using <, >, <=, and >=. Print all results.

        c1=10;
        c2=15;
        d1=c1<c2;
        d2=c1>c2;
        d3=c1<=c2;
        d4=c1>=c2;
        console.log(d1,d2,d3,d4)

// Compare a number and a string using both == and ===. Observe the difference.

        var no=5;
        var No="5";
        console.log(no==No,no===No)

// Create two conditions using numbers and combine them using &&, ||, and !.

        var g1=10;
        var g2=15;

       const res= g1>g2&&g1<g2||g2>g1
       console.log(res)

// Create a variable called age. Using a ternary operator, print "Eligible" if the age is 18 or above; otherwise print "Not Eligible".

        let age1=20
        age1>=18?console.log("Eligible"):console.log("NotElligible")

// Create marks variable and use a ternary operator:
// If marks are 35 or above → print "Pass"
// Otherwise → print "Fail"

         let marks=500;
        marks>35?console.log("pass"):console.log("fail")


