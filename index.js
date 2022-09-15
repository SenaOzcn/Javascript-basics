function getTitle(age) {
  if (age >= 18) {
    // when age >= 18 exit the function
    return 'Adult';
  }
  
  // the program will get here only if the condition age >= 18 is not met
  // so in the following code we know for sure that age < 18
  if (age >= 10) {
    // when age >= 10 (but < 18) exit the function
    return 'Teenager';
  }
  
  // we get here only if we have not exited the function earlier
  // it means that age < 18 and age < 10
  return 'Child';
}
