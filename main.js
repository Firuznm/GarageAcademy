// ---- lesson 2 tasks -------
//task 1: Daxil edilən ədədin cüt olub olmadığını yoxlayan alqoritm qurun  
//   let num =parseInt(prompt("Ədəd daxil edin")) 

//   function oddEven(n){
// 	if(n % 2 == 0){
// 		alert(`daxil etdiyiniz ${n} ededi cut ededdir`)
// 	  }else{
// 		alert(`daxil etdiyiniz ${n} ededi tek ededdir`)
// 	  }
//   }

//   oddEven(num)
// ------------------------------------------------------------------------------------------------------------------------
//task 2: Daxil edilən ədədin 100 dən böyük tək ədəd və ya 100 dən kiçik cüt ədəd olub olmadığını yoxlayan alqoritm qurun.
//Qeyd olunan şərtlər ödənmədiyi halda "Düzgün ədəd daxil edilməyib" mesajını çıxarın.

// let number=parseInt(prompt("Ədəd daxil edin"))

// function numberControl(num){
// 	if((num > 100 && num % 2 == 1) || (num < 100 && num % 2 == 0)){
// 		alert(`daxil etdiyiniz ${num} yuxaridaki serte daxildir yeni true dir`)
// 	}else{
// 		alert("Düzgün ədəd daxil edilməyib") 
// 	}
// }
// numberControl(number)

// ------------------------------------------------------------------------------------------------------------------------
//task 3: Daxil edilən ədədin rəqəmlərinin cəmini çıxaran alqoritm qurun

// let number= prompt("Ədəd daxil edin")

// function addingTheNumbers(num){
// 	let total=0;
// 	for(let i=0; i<num.length; i++){
// 		total += parseInt(num[i])
// 	}
// 	return total
// }
//   let numberTotal= addingTheNumbers(number)
//   console.log(numberTotal);
// -------------------------------------------------------------------
   
// let number=prompt("eded daxil edin")

// function numCount(num){
// 	let count=0;
// for(let i=0;i<num.length;i++){
//        count=count + 1
// }
// 	return count
// }
// let say=console.log(numCount(number)); 
// -------------- daxil edilen ededlerin EBOB nun tapilmasi ------------------------------
// let num1=prompt("eded daxil edin")
// let num2=prompt("eded daxil edin")

// function EBOB(a,b){
// 	   let ans=1
//      if(a<=b){
// 	for(let i=1;i<=b;i++){
//        if(a%i==0 && b%i==0){
// 		ans=i
// 	   }
// 	}
// }
// return ans
// }
// let cvb=console.log(EBOB(num1,num2));

// ----------- // TASK 1  --------------------------------------------------------------
// Daxil edilən ədədin 3 rəqəmli olub olmamasını yoxlayan alqoritm qurun.

// let num=prompt("eded daxil edin")

// function NumCountThree(n){
// 	if(n>=100 && n<=999 ){
// 		alert(`daxil etdiyiniz ${n} ededi 3 reqemli  ededdir`)
// 	}
// 	else{
// 		alert(`daxil etdiyiniz ${n} ededi yuxaridaki serti odemir!!!!!!!!!!`)
// 	}
// }
    
// NumCountThree(num)      

// ------------- // TASK 2  ------------------------------------------------------------------
// Daxil edilən 3 ədəd arasından ən böyük olanı çıxaran alqoritm qurun.

// let num1=parseInt(prompt("1 ci eded daxil edin"))
// let num2=parseInt(prompt("2 ci eded daxil edin"))
// let num3=parseInt(prompt("3 ci eded daxil edin"))

// function comparisonNumber(n1,n2,n3){
// 	if(n1 > n2 && n1 > n3){
// 	 alert(`daxil edilen ${n1},${n2} ve ${n3} ededlerinin icinde en boyuyu n1 (${n1}) dir`)
// 	}
// 	else if(n2 > n1 && n2 > n3){
// 		alert(`daxil edilen ${n1},${n2} ve ${n3} ededlerinin icinde en boyuyu n2 (${n2}) dir`)
// 	}
// 	else if(n3 > n1 && n3 > n2){
// 		alert(`daxil edilen ${n1},${n2} ve ${n3} ededlerinin icinde en boyuyu n3 (${n3}) dir`)
// 	}
// 	else{
// 		alert(`daxil edilen ${n1},${n2} ve ${n3} ededleri beraber ededlerdir`)
// 	}
// }

// comparisonNumber(num1,num2,num3) 

// ---------------- // TASK 3  ----------------------------------------------------------------
// Daxil edilən ədəd mənfidirsə müsbətə çevirib kvadartını çıxaran,
//  müsbətdirsə kubunu çıxaran alqoritm qurun.

// let num=parseInt(prompt("eded daxil edin"))

//   function testNumber(n){
// 	if(n < 0){
// 	  return n=-(-n) && n*n
// 	}else if (n>0){
// 		return n**3
// 	}else{
// 		return 0
// 	}
// }
// let result= console.log(testNumber(num));


// --------// TASK 4   -----------------------------------------------------
// Daxil edilən iki ədədin ayrı olaraq rəqəmlərinin cəmini tapan 
// və sonda iki cəmin hasilini çıxaran alqoritm qurun.

// let num1=prompt("1 ci ededi daxil edin")
// let num2=prompt("2 ci ededi daxil edin")

// function numberSumMultiplication(n1,n2){
// 	let n1Total=0;
// 	let n2Total=0;
// 	for(let i=0; i<n1.length; i++){
//          n1Total += parseInt(n1[i])
// 	}
// 	for (let i=0;i<n2.length; i++){
// 		n2Total += parseInt(n2[i])
// 	}
// 	console.log(n1Total,n2Total);

// 	return n1Total*n2Total
// }

// let result=console.log(numberSumMultiplication(num1,num2));  

// --------  // TASK 5 ------------------------------------------------------------------------
// Daxil edilən ədədin mürəkkəb ədəd(1-dən və özündən başqa böləni olan)
//  olduğunu yoxlayan alqoritm qurun.

// let num=parseInt(prompt("eded daxil edin"))

// function numberControl(n){
// 	let count=0;
// 	for(let i=1; i <= n; i++){
//    if(n % i === 0){
// 	count++
//    }
// 	}
// 	if(count>2){
// 		alert(`daxil edilen ${n} ededdi murekkeb ededdir`)
// 	}else{
// 		alert(`daxil edilen ${n} ededdi sade ededdir`)
// 	}
// }

//     numberControl(num)