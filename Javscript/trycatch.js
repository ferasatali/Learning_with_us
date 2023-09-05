console.log('Learn With Us');

try {
    const result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("The 'try...catch' block is finished.");
  }