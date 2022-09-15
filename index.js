if (age >= 18) {
  console.log('Adult');
} else if (age >= 10) {
  // will work if age < 18 and age >= 10
  console.log('Teenager');
} else {
  // will work if age < 10 and age > 3
  console.log('Child');
}
